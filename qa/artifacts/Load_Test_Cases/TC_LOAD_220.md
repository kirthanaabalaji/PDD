# Test Case: TC_LOAD_220

- **Test Case ID:** TC_LOAD_220
- **Module:** AIChat
- **Feature:** inspect memory allocation limits for Groq chat history truncation queue when downstream Groq service is throttled
- **Test Title:** Verify behavior of Groq chat history truncation queue during attempts to inspect memory allocation limits when downstream Groq service is throttled
- **Objective:** Evaluate that user can safely execute inspect memory allocation limits for Groq chat history truncation queue when downstream Groq service is throttled under system checks.
- **Requirement ID:** REQ-LOAD-220
- **Preconditions:** System state is reset, and target console is directed to Groq chat history truncation queue configuration when downstream Groq service is throttled (Ref LOAD_220).
- **Test Steps:**
1. Target active interface for Groq chat history truncation queue.
2. Trigger action to inspect memory allocation limits when downstream Groq service is throttled.
3. Collect audit logs and confirm status code validation (Check LOAD_220).
- **Test Data:** Target: Groq chat history truncation queue, Action: inspect memory allocation limits, Parameters: when downstream Groq service is throttled, Case Index: LOAD_220
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_220.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-220
- **Execution Time:** 4.5s
- **Evidence:** logs/TC_LOAD_220_execution.log
