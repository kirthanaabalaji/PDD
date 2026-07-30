# Test Case: TS_APP_172

- **Test Case ID:** TS_APP_172
- **Module:** SymptomTracking
- **Feature:** verify image dimensions for dosage configuration slider during database compaction sync
- **Test Title:** Verify behavior of dosage configuration slider during attempts to verify image dimensions during database compaction sync
- **Objective:** Evaluate that user can safely execute verify image dimensions for dosage configuration slider during database compaction sync under system checks.
- **Requirement ID:** REQ-APP-172
- **Preconditions:** System state is reset, and target console is directed to dosage configuration slider configuration during database compaction sync (Ref APP_172).
- **Test Steps:**
1. Target active interface for dosage configuration slider.
2. Trigger action to verify image dimensions during database compaction sync.
3. Collect audit logs and confirm status code validation (Check APP_172).
- **Test Data:** Target: dosage configuration slider, Action: verify image dimensions, Parameters: during database compaction sync, Case Index: APP_172
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_172.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-APP-172
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_172_success.png
