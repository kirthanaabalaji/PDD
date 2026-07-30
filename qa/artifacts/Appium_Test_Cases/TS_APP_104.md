# Test Case: TS_APP_104

- **Test Case ID:** TS_APP_104
- **Module:** OfflineMode
- **Feature:** inspect storage path allocation for offline mode login cache when database storage quota is exceeded
- **Test Title:** Verify behavior of offline mode login cache during attempts to inspect storage path allocation when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute inspect storage path allocation for offline mode login cache when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-104
- **Preconditions:** System state is reset, and target console is directed to offline mode login cache configuration when database storage quota is exceeded (Ref APP_104).
- **Test Steps:**
1. Target active interface for offline mode login cache.
2. Trigger action to inspect storage path allocation when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_104).
- **Test Data:** Target: offline mode login cache, Action: inspect storage path allocation, Parameters: when database storage quota is exceeded, Case Index: APP_104
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_104.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-104
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_104_success.png
