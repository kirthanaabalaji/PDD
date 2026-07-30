# Test Case: TC_SEL_073

- **Test Case ID:** TC_SEL_073
- **Module:** Settings
- **Feature:** inspect download stream for notification preferences toggles under local storage quota limits
- **Test Title:** Verify behavior of notification preferences toggles during attempts to inspect download stream under local storage quota limits
- **Objective:** Evaluate that user can safely execute inspect download stream for notification preferences toggles under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-073
- **Preconditions:** System state is reset, and target console is directed to notification preferences toggles configuration under local storage quota limits (Ref SEL_073).
- **Test Steps:**
1. Target active interface for notification preferences toggles.
2. Trigger action to inspect download stream under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_073).
- **Test Data:** Target: notification preferences toggles, Action: inspect download stream, Parameters: under local storage quota limits, Case Index: SEL_073
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_073.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-073
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_073_success.png
