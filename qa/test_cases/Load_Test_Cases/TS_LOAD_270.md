# Test Case: TS_LOAD_270

- **Test Case ID:** TS_LOAD_270
- **Module:** AIChat
- **Feature:** check thread context switches for Groq chat history truncation queue with large session payload records
- **Test Title:** Verify behavior of Groq chat history truncation queue during attempts to check thread context switches with large session payload records
- **Objective:** Evaluate that user can safely execute check thread context switches for Groq chat history truncation queue with large session payload records under system checks.
- **Requirement ID:** REQ-LOAD-270
- **Preconditions:** System state is reset, and target console is directed to Groq chat history truncation queue configuration with large session payload records (Ref LOAD_270).
- **Test Steps:**
1. Target active interface for Groq chat history truncation queue.
2. Trigger action to check thread context switches with large session payload records.
3. Collect audit logs and confirm status code validation (Check LOAD_270).
- **Test Data:** Target: Groq chat history truncation queue, Action: check thread context switches, Parameters: with large session payload records, Case Index: LOAD_270
- **Expected Result:** The verification checks confirm that the WebSocket session handles parallel connections successfully under reference LOAD_270.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-270
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_270_execution.log
