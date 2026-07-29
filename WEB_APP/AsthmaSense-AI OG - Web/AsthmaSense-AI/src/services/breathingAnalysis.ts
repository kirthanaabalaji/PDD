import { Platform } from 'react-native';
import {
  API_BASE_URL,
  BREATHING_ANALYZE_URL,
  BREATHING_HEALTH_URL,
} from '../config/api';

export type BreathingAnalysisResult = {
  wheezingDetected: 'Yes' | 'No';
  riskLevel: 'Low' | 'Moderate' | 'High';
  summary: string;
  confidence: string;
  transcript: string;
  model: string;
  recommendedExercise?: string;
  recommendations?: string[];
  rr?: string;
  pattern?: string;
  regularity?: string;
  foodsToEat?: string[];
  foodsToAvoid?: string[];
};

export type ApiHealth = {
  ok: boolean;
  whisperModel?: string;
  hasApiKey?: boolean;
};

type UploadSource = {
  uri: string;
  name: string;
  mimeType: string;
};

export async function checkApiHealth(): Promise<ApiHealth> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(BREATHING_HEALTH_URL, {
      signal: controller.signal,
    });
    const data = await response.json().catch(() => ({}));
    return { ok: response.ok && data.ok === true, ...data };
  } catch {
    return { ok: false };
  } finally {
    clearTimeout(timeout);
  }
}

function estimatePitch(channelData: Float32Array, sampleRate: number): number {
  const size = Math.min(channelData.length, 2048);
  let bestOffset = -1;
  let bestCorrelation = 0;
  
  const minOffset = Math.floor(sampleRate / 1200);
  const maxOffset = Math.ceil(sampleRate / 300);
  
  for (let offset = minOffset; offset <= maxOffset; offset++) {
    let correlation = 0;
    for (let i = 0; i < size - offset; i++) {
      correlation += channelData[i] * channelData[i + offset];
    }
    if (correlation > bestCorrelation) {
      bestCorrelation = correlation;
      bestOffset = offset;
    }
  }
  
  return bestOffset !== -1 ? sampleRate / bestOffset : 0;
}

async function runBrowserAudioDSP(blob: Blob): Promise<{ dspWheeze: 'Yes' | 'No'; dspRisk: 'Low' | 'Moderate' | 'High' }> {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) {
      return { dspWheeze: 'No', dspRisk: 'Low' };
    }
    
    const audioCtx = new AudioContextClass();
    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    const channelData = audioBuffer.getChannelData(0);
    const sampleRate = audioBuffer.sampleRate;
    
    let sum = 0;
    for (let i = 0; i < channelData.length; i++) {
      sum += channelData[i] * channelData[i];
    }
    const rms = Math.sqrt(sum / channelData.length);
    const pitch = estimatePitch(channelData, sampleRate);
    
    console.log('[Browser DSP] Analysis Result. RMS:', rms, 'Pitch:', pitch);
    
    if (rms < 0.015) {
      return { dspWheeze: 'No', dspRisk: 'Low' };
    }
    
    if (pitch >= 300 && pitch <= 1200 && rms > 0.015) {
      if (rms > 0.065) {
        return { dspWheeze: 'Yes', dspRisk: 'High' };
      }
      return { dspWheeze: 'Yes', dspRisk: 'Moderate' };
    }
    
    if (rms > 0.075) {
      return { dspWheeze: 'Yes', dspRisk: 'High' };
    }
    
    return { dspWheeze: 'No', dspRisk: 'Low' };
  } catch (err) {
    console.warn('[Browser DSP] Audio Context decode failed, defaulting:', err);
    return { dspWheeze: 'No', dspRisk: 'Low' };
  }
}

export async function analyzeBreathingAudio(
  source: UploadSource,
): Promise<BreathingAnalysisResult> {
  const formData = new FormData();
  
  try {
    if (Platform.OS === 'web') {
      const res = await fetch(source.uri);
      const blob = await res.blob();
      formData.append('audio', blob, source.name);
      
      // Perform browser-side audio feature analysis (DSP)
      const dspResult = await runBrowserAudioDSP(blob);
      formData.append('dspWheeze', dspResult.dspWheeze);
      formData.append('dspRisk', dspResult.dspRisk);
    } else {
      formData.append('audio', {
        uri: source.uri,
        name: source.name,
        type: source.mimeType,
      } as unknown as Blob);
    }
  } catch (blobErr) {
    console.warn('Failed to resolve audio blob, using raw structure:', blobErr);
    formData.append('audio', {
      uri: source.uri,
      name: source.name,
      type: source.mimeType,
    } as unknown as Blob);
  }

  let response: Response;
  try {
    response = await fetch(BREATHING_ANALYZE_URL, {
      method: 'POST',
      body: formData,
    });
  } catch {
    throw new Error(
      `Cannot reach server at ${API_BASE_URL}. Start the API (npm run dev in asthmasense-server) and use the same Wi‑Fi.`,
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      typeof data.error === 'string' ? data.error : `Analysis failed (${response.status})`,
    );
  }

  return data as BreathingAnalysisResult;
}
