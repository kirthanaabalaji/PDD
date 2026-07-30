# Test Case: TS_SEL_180

- **Test Case ID:** TS_SEL_180
- **Module:** Onboarding
- **Feature:** inspect modal overlays for change password input validation during api gateway timeout
- **Test Title:** Verify behavior of change password input validation during attempts to inspect modal overlays during api gateway timeout
- **Objective:** Evaluate that user can safely execute inspect modal overlays for change password input validation during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-180
- **Preconditions:** System state is reset, and target console is directed to change password input validation configuration during api gateway timeout (Ref SEL_180).
- **Test Steps:**
1. Target active interface for change password input validation.
2. Trigger action to inspect modal overlays during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_180).
- **Test Data:** Target: change password input validation, Action: inspect modal overlays, Parameters: during api gateway timeout, Case Index: SEL_180
- **Expected Result:** The verification checks confirm that the browser console shows no errors successfully under reference SEL_180.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-180
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_180_success.png
