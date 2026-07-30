# Test Case: TS_APP_283

- **Test Case ID:** TS_APP_283
- **Module:** Settings
- **Feature:** inspect alarm configuration for deep link navigation schema when background storage is cleared
- **Test Title:** Verify behavior of deep link navigation schema during attempts to inspect alarm configuration when background storage is cleared
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for deep link navigation schema when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-283
- **Preconditions:** System state is reset, and target console is directed to deep link navigation schema configuration when background storage is cleared (Ref APP_283).
- **Test Steps:**
1. Target active interface for deep link navigation schema.
2. Trigger action to inspect alarm configuration when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_283).
- **Test Data:** Target: deep link navigation schema, Action: inspect alarm configuration, Parameters: when background storage is cleared, Case Index: APP_283
- **Expected Result:** The verification checks confirm that the item is scrolled into focus successfully under reference APP_283.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-283
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_283_success.png
