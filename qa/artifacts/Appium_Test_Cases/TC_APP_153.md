# Test Case: TC_APP_153

- **Test Case ID:** TC_APP_153
- **Module:** Authentication
- **Feature:** monitor memory consumption for fingerprint scanner verification during database compaction sync
- **Test Title:** Verify behavior of fingerprint scanner verification during attempts to monitor memory consumption during database compaction sync
- **Objective:** Evaluate that user can safely execute monitor memory consumption for fingerprint scanner verification during database compaction sync under system checks.
- **Requirement ID:** REQ-APP-153
- **Preconditions:** System state is reset, and target console is directed to fingerprint scanner verification configuration during database compaction sync (Ref APP_153).
- **Test Steps:**
1. Target active interface for fingerprint scanner verification.
2. Trigger action to monitor memory consumption during database compaction sync.
3. Collect audit logs and confirm status code validation (Check APP_153).
- **Test Data:** Target: fingerprint scanner verification, Action: monitor memory consumption, Parameters: during database compaction sync, Case Index: APP_153
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_153.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-153
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_153_success.png
