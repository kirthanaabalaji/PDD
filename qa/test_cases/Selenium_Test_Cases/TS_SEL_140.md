# Test Case: TS_SEL_140

- **Test Case ID:** TS_SEL_140
- **Module:** Settings
- **Feature:** ensure contrast ratios for local storage synchronization queue when network speed is throttled
- **Test Title:** Verify behavior of local storage synchronization queue during attempts to ensure contrast ratios when network speed is throttled
- **Objective:** Evaluate that user can safely execute ensure contrast ratios for local storage synchronization queue when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-140
- **Preconditions:** System state is reset, and target console is directed to local storage synchronization queue configuration when network speed is throttled (Ref SEL_140).
- **Test Steps:**
1. Target active interface for local storage synchronization queue.
2. Trigger action to ensure contrast ratios when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_140).
- **Test Data:** Target: local storage synchronization queue, Action: ensure contrast ratios, Parameters: when network speed is throttled, Case Index: SEL_140
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_140.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-140
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_140_success.png
