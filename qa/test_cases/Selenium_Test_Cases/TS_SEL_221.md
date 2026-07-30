# Test Case: TS_SEL_221

- **Test Case ID:** TS_SEL_221
- **Module:** Authentication
- **Feature:** check boundary limits for logout redirect landing page after five minutes of inactivity
- **Test Title:** Verify behavior of logout redirect landing page during attempts to check boundary limits after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute check boundary limits for logout redirect landing page after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-221
- **Preconditions:** System state is reset, and target console is directed to logout redirect landing page configuration after five minutes of inactivity (Ref SEL_221).
- **Test Steps:**
1. Target active interface for logout redirect landing page.
2. Trigger action to check boundary limits after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_221).
- **Test Data:** Target: logout redirect landing page, Action: check boundary limits, Parameters: after five minutes of inactivity, Case Index: SEL_221
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_221.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-221
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_221_success.png
