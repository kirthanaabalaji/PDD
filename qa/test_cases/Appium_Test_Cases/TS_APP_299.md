# Test Case: TS_APP_299

- **Test Case ID:** TS_APP_299
- **Module:** Settings
- **Feature:** audit gesture scaling zoom for terms scroll check modal with screen readers enabled
- **Test Title:** Verify behavior of terms scroll check modal during attempts to audit gesture scaling zoom with screen readers enabled
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for terms scroll check modal with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-299
- **Preconditions:** System state is reset, and target console is directed to terms scroll check modal configuration with screen readers enabled (Ref APP_299).
- **Test Steps:**
1. Target active interface for terms scroll check modal.
2. Trigger action to audit gesture scaling zoom with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_299).
- **Test Data:** Target: terms scroll check modal, Action: audit gesture scaling zoom, Parameters: with screen readers enabled, Case Index: APP_299
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_299.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-299
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_299_success.png
