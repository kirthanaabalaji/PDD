# Test Case: TS_SEL_173

- **Test Case ID:** TS_SEL_173
- **Module:** Settings
- **Feature:** measure execution time for notification preferences toggles for assistive screen readers
- **Test Title:** Verify behavior of notification preferences toggles during attempts to measure execution time for assistive screen readers
- **Objective:** Evaluate that user can safely execute measure execution time for notification preferences toggles for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-173
- **Preconditions:** System state is reset, and target console is directed to notification preferences toggles configuration for assistive screen readers (Ref SEL_173).
- **Test Steps:**
1. Target active interface for notification preferences toggles.
2. Trigger action to measure execution time for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_173).
- **Test Data:** Target: notification preferences toggles, Action: measure execution time, Parameters: for assistive screen readers, Case Index: SEL_173
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_173.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-173
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_173_success.png
