# Test Case: TC_SEL_294

- **Test Case ID:** TC_SEL_294
- **Module:** Settings
- **Feature:** validate fields for api error toast notifications during api gateway timeout
- **Test Title:** Verify behavior of api error toast notifications during attempts to validate fields during api gateway timeout
- **Objective:** Evaluate that user can safely execute validate fields for api error toast notifications during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-294
- **Preconditions:** System state is reset, and target console is directed to api error toast notifications configuration during api gateway timeout (Ref SEL_294).
- **Test Steps:**
1. Target active interface for api error toast notifications.
2. Trigger action to validate fields during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_294).
- **Test Data:** Target: api error toast notifications, Action: validate fields, Parameters: during api gateway timeout, Case Index: SEL_294
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_294.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-294
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_294_success.png
