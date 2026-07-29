const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    date: { type: Date, default: Date.now },
    wheezingDetected: { type: String, enum: ['Yes', 'No'] },
    riskLevel: { type: String, enum: ['Low', 'Moderate', 'High'] },
    confidence: { type: String },
    summary: String,
    transcript: String,
    clinicalFindings: String,
    rr: String,
    pattern: String,
    regularity: String,
    recommendedExercise: String,
    recommendations: [String],
  },
  { timestamps: true },
);

module.exports = mongoose.models.Report || mongoose.model('Report', ReportSchema, 'audioreports');
