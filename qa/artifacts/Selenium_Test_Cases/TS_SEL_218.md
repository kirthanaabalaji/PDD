# Test Case: TS_SEL_218

- **Test Case ID:** TS_SEL_218
- **Module:** Authentication
- **Feature:** process submission for session timeout idle alert during api gateway timeout
- **Test Title:** Verify behavior of session timeout idle alert during attempts to process submission during api gateway timeout
- **Objective:** Evaluate that user can safely execute process submission for session timeout idle alert during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-218
- **Preconditions:** System state is reset, and target console is directed to session timeout idle alert configuration during api gateway timeout (Ref SEL_218).
- **Test Steps:**
1. Target active interface for session timeout idle alert.
2. Trigger action to process submission during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_218).
- **Test Data:** Target: session timeout idle alert, Action: process submission, Parameters: during api gateway timeout, Case Index: SEL_218
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_218.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-218
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_218_success.png
