# Test Case: TS_SEL_191

- **Test Case ID:** TS_SEL_191
- **Module:** Onboarding
- **Feature:** verify network callback for user deletion confirmation popup after session token expiration
- **Test Title:** Verify behavior of user deletion confirmation popup during attempts to verify network callback after session token expiration
- **Objective:** Evaluate that user can safely execute verify network callback for user deletion confirmation popup after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-191
- **Preconditions:** System state is reset, and target console is directed to user deletion confirmation popup configuration after session token expiration (Ref SEL_191).
- **Test Steps:**
1. Target active interface for user deletion confirmation popup.
2. Trigger action to verify network callback after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_191).
- **Test Data:** Target: user deletion confirmation popup, Action: verify network callback, Parameters: after session token expiration, Case Index: SEL_191
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_191.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-191
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_191_success.png
