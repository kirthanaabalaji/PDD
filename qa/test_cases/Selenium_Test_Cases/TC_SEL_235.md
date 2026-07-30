# Test Case: TC_SEL_235

- **Test Case ID:** TC_SEL_235
- **Module:** Settings
- **Feature:** validate regex matching for terms of service scroll validation when network speed is throttled
- **Test Title:** Verify behavior of terms of service scroll validation during attempts to validate regex matching when network speed is throttled
- **Objective:** Evaluate that user can safely execute validate regex matching for terms of service scroll validation when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-235
- **Preconditions:** System state is reset, and target console is directed to terms of service scroll validation configuration when network speed is throttled (Ref SEL_235).
- **Test Steps:**
1. Target active interface for terms of service scroll validation.
2. Trigger action to validate regex matching when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_235).
- **Test Data:** Target: terms of service scroll validation, Action: validate regex matching, Parameters: when network speed is throttled, Case Index: SEL_235
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_235.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-235
- **Execution Time:** 0.520s
- **Evidence:** evidence/TC_SEL_235_success.png
