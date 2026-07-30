# Test Case: TC_SEL_064

- **Test Case ID:** TC_SEL_064
- **Module:** SymptomTracking
- **Feature:** track cookie changes for dosage calculator slider controls when network speed is throttled
- **Test Title:** Verify behavior of dosage calculator slider controls during attempts to track cookie changes when network speed is throttled
- **Objective:** Evaluate that user can safely execute track cookie changes for dosage calculator slider controls when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-064
- **Preconditions:** System state is reset, and target console is directed to dosage calculator slider controls configuration when network speed is throttled (Ref SEL_064).
- **Test Steps:**
1. Target active interface for dosage calculator slider controls.
2. Trigger action to track cookie changes when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_064).
- **Test Data:** Target: dosage calculator slider controls, Action: track cookie changes, Parameters: when network speed is throttled, Case Index: SEL_064
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_064.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-064
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_064_success.png
