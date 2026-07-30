# Test Case: TC_SEL_115

- **Test Case ID:** TC_SEL_115
- **Module:** Authentication
- **Feature:** inspect download stream for remember me cookie setting after session token expiration
- **Test Title:** Verify behavior of remember me cookie setting during attempts to inspect download stream after session token expiration
- **Objective:** Evaluate that user can safely execute inspect download stream for remember me cookie setting after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-115
- **Preconditions:** System state is reset, and target console is directed to remember me cookie setting configuration after session token expiration (Ref SEL_115).
- **Test Steps:**
1. Target active interface for remember me cookie setting.
2. Trigger action to inspect download stream after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_115).
- **Test Data:** Target: remember me cookie setting, Action: inspect download stream, Parameters: after session token expiration, Case Index: SEL_115
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_115.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-115
- **Execution Time:** 0.520s
- **Evidence:** evidence/TC_SEL_115_success.png
