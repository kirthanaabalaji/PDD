# Test Case: TS_SEL_050

- **Test Case ID:** TS_SEL_050
- **Module:** Authentication
- **Feature:** process submission for login input fields after five minutes of inactivity
- **Test Title:** Verify behavior of login input fields during attempts to process submission after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute process submission for login input fields after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-050
- **Preconditions:** System state is reset, and target console is directed to login input fields configuration after five minutes of inactivity (Ref SEL_050).
- **Test Steps:**
1. Target active interface for login input fields.
2. Trigger action to process submission after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_050).
- **Test Data:** Target: login input fields, Action: process submission, Parameters: after five minutes of inactivity, Case Index: SEL_050
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_050.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-050
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_050_success.png
