# Test Case: TC_LOAD_002

- **Test Case ID:** TC_LOAD_002
- **Module:** Database
- **Feature:** measure server warm start delay for Symptom report query aggregator with large audio attachment uploads
- **Test Title:** Verify behavior of Symptom report query aggregator during attempts to measure server warm start delay with large audio attachment uploads
- **Objective:** Evaluate that user can safely execute measure server warm start delay for Symptom report query aggregator with large audio attachment uploads under system checks.
- **Requirement ID:** REQ-LOAD-002
- **Preconditions:** System state is reset, and target console is directed to Symptom report query aggregator configuration with large audio attachment uploads (Ref LOAD_002).
- **Test Steps:**
1. Target active interface for Symptom report query aggregator.
2. Trigger action to measure server warm start delay with large audio attachment uploads.
3. Collect audit logs and confirm status code validation (Check LOAD_002).
- **Test Data:** Target: Symptom report query aggregator, Action: measure server warm start delay, Parameters: with large audio attachment uploads, Case Index: LOAD_002
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_002.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-002
- **Execution Time:** 6.9s
- **Evidence:** logs/TC_LOAD_002_execution.log
