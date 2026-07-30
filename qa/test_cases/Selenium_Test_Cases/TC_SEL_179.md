# Test Case: TC_SEL_179

- **Test Case ID:** TC_SEL_179
- **Module:** Settings
- **Feature:** check boundary limits for emergency trigger swipe action button on high resolution displays
- **Test Title:** Verify behavior of emergency trigger swipe action button during attempts to check boundary limits on high resolution displays
- **Objective:** Evaluate that user can safely execute check boundary limits for emergency trigger swipe action button on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-179
- **Preconditions:** System state is reset, and target console is directed to emergency trigger swipe action button configuration on high resolution displays (Ref SEL_179).
- **Test Steps:**
1. Target active interface for emergency trigger swipe action button.
2. Trigger action to check boundary limits on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_179).
- **Test Data:** Target: emergency trigger swipe action button, Action: check boundary limits, Parameters: on high resolution displays, Case Index: SEL_179
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_179.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-179
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_179_success.png
