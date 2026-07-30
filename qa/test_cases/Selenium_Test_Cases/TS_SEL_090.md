# Test Case: TS_SEL_090

- **Test Case ID:** TS_SEL_090
- **Module:** Settings
- **Feature:** audit keyboard navigation for local storage synchronization queue with multiple simultaneous submits
- **Test Title:** Verify behavior of local storage synchronization queue during attempts to audit keyboard navigation with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for local storage synchronization queue with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-090
- **Preconditions:** System state is reset, and target console is directed to local storage synchronization queue configuration with multiple simultaneous submits (Ref SEL_090).
- **Test Steps:**
1. Target active interface for local storage synchronization queue.
2. Trigger action to audit keyboard navigation with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_090).
- **Test Data:** Target: local storage synchronization queue, Action: audit keyboard navigation, Parameters: with multiple simultaneous submits, Case Index: SEL_090
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_090.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-090
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_090_success.png
