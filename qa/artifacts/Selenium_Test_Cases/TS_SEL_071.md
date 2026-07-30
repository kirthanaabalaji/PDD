# Test Case: TS_SEL_071

- **Test Case ID:** TS_SEL_071
- **Module:** Authentication
- **Feature:** process submission for logout redirect landing page with multiple simultaneous submits
- **Test Title:** Verify behavior of logout redirect landing page during attempts to process submission with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute process submission for logout redirect landing page with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-071
- **Preconditions:** System state is reset, and target console is directed to logout redirect landing page configuration with multiple simultaneous submits (Ref SEL_071).
- **Test Steps:**
1. Target active interface for logout redirect landing page.
2. Trigger action to process submission with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_071).
- **Test Data:** Target: logout redirect landing page, Action: process submission, Parameters: with multiple simultaneous submits, Case Index: SEL_071
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_071.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-071
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_071_success.png
