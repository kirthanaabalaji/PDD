# Test Case: TS_SEL_168

- **Test Case ID:** TS_SEL_168
- **Module:** Authentication
- **Feature:** validate fields for session timeout idle alert under local storage quota limits
- **Test Title:** Verify behavior of session timeout idle alert during attempts to validate fields under local storage quota limits
- **Objective:** Evaluate that user can safely execute validate fields for session timeout idle alert under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-168
- **Preconditions:** System state is reset, and target console is directed to session timeout idle alert configuration under local storage quota limits (Ref SEL_168).
- **Test Steps:**
1. Target active interface for session timeout idle alert.
2. Trigger action to validate fields under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_168).
- **Test Data:** Target: session timeout idle alert, Action: validate fields, Parameters: under local storage quota limits, Case Index: SEL_168
- **Expected Result:** The verification checks confirm that the animation runs smoothly at 60fps successfully under reference SEL_168.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-168
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_168_success.png
