# Test Case: TS_APP_204

- **Test Case ID:** TS_APP_204
- **Module:** OfflineMode
- **Feature:** evaluate resource lock duration for offline mode login cache with screen readers enabled
- **Test Title:** Verify behavior of offline mode login cache during attempts to evaluate resource lock duration with screen readers enabled
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for offline mode login cache with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-204
- **Preconditions:** System state is reset, and target console is directed to offline mode login cache configuration with screen readers enabled (Ref APP_204).
- **Test Steps:**
1. Target active interface for offline mode login cache.
2. Trigger action to evaluate resource lock duration with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_204).
- **Test Data:** Target: offline mode login cache, Action: evaluate resource lock duration, Parameters: with screen readers enabled, Case Index: APP_204
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_204.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-204
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_204_success.png
