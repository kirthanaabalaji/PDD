# Test Case: TC_APP_096

- **Test Case ID:** TC_APP_096
- **Module:** Settings
- **Feature:** test local database fetch for network latency indicator during database compaction sync
- **Test Title:** Verify behavior of network latency indicator during attempts to test local database fetch during database compaction sync
- **Objective:** Evaluate that user can safely execute test local database fetch for network latency indicator during database compaction sync under system checks.
- **Requirement ID:** REQ-APP-096
- **Preconditions:** System state is reset, and target console is directed to network latency indicator configuration during database compaction sync (Ref APP_096).
- **Test Steps:**
1. Target active interface for network latency indicator.
2. Trigger action to test local database fetch during database compaction sync.
3. Collect audit logs and confirm status code validation (Check APP_096).
- **Test Data:** Target: network latency indicator, Action: test local database fetch, Parameters: during database compaction sync, Case Index: APP_096
- **Expected Result:** The verification checks confirm that the item is scrolled into focus successfully under reference APP_096.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-096
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_096_success.png
