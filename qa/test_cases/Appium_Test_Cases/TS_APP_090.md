# Test Case: TS_APP_090

- **Test Case ID:** TS_APP_090
- **Module:** BreathingExercises
- **Feature:** monitor memory consumption for breath holding counter with screen readers enabled
- **Test Title:** Verify behavior of breath holding counter during attempts to monitor memory consumption with screen readers enabled
- **Objective:** Evaluate that user can safely execute monitor memory consumption for breath holding counter with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-090
- **Preconditions:** System state is reset, and target console is directed to breath holding counter configuration with screen readers enabled (Ref APP_090).
- **Test Steps:**
1. Target active interface for breath holding counter.
2. Trigger action to monitor memory consumption with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_090).
- **Test Data:** Target: breath holding counter, Action: monitor memory consumption, Parameters: with screen readers enabled, Case Index: APP_090
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_090.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-090
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_090_success.png
