# Test Case: TS_SEL_085

- **Test Case ID:** TS_SEL_085
- **Module:** Settings
- **Feature:** track cookie changes for terms of service scroll validation during api gateway timeout
- **Test Title:** Verify behavior of terms of service scroll validation during attempts to track cookie changes during api gateway timeout
- **Objective:** Evaluate that user can safely execute track cookie changes for terms of service scroll validation during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-085
- **Preconditions:** System state is reset, and target console is directed to terms of service scroll validation configuration during api gateway timeout (Ref SEL_085).
- **Test Steps:**
1. Target active interface for terms of service scroll validation.
2. Trigger action to track cookie changes during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_085).
- **Test Data:** Target: terms of service scroll validation, Action: track cookie changes, Parameters: during api gateway timeout, Case Index: SEL_085
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_085.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-085
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_085_success.png
