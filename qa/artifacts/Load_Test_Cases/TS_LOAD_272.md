# Test Case: TS_LOAD_272

- **Test Case ID:** TS_LOAD_272
- **Module:** Database
- **Feature:** evaluate socket connection times for Groq API LLM proxy queue with multi-threaded k6 load configurations
- **Test Title:** Verify behavior of Groq API LLM proxy queue during attempts to evaluate socket connection times with multi-threaded k6 load configurations
- **Objective:** Evaluate that user can safely execute evaluate socket connection times for Groq API LLM proxy queue with multi-threaded k6 load configurations under system checks.
- **Requirement ID:** REQ-LOAD-272
- **Preconditions:** System state is reset, and target console is directed to Groq API LLM proxy queue configuration with multi-threaded k6 load configurations (Ref LOAD_272).
- **Test Steps:**
1. Target active interface for Groq API LLM proxy queue.
2. Trigger action to evaluate socket connection times with multi-threaded k6 load configurations.
3. Collect audit logs and confirm status code validation (Check LOAD_272).
- **Test Data:** Target: Groq API LLM proxy queue, Action: evaluate socket connection times, Parameters: with multi-threaded k6 load configurations, Case Index: LOAD_272
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_272.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-272
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_272_execution.log
