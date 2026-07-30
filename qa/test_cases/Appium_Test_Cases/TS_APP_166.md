# Test Case: TS_APP_166

- **Test Case ID:** TS_APP_166
- **Module:** SymptomTracking
- **Feature:** test swipe gesture handlers for daily symptom logging form with screen readers enabled
- **Test Title:** Verify behavior of daily symptom logging form during attempts to test swipe gesture handlers with screen readers enabled
- **Objective:** Evaluate that user can safely execute test swipe gesture handlers for daily symptom logging form with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-166
- **Preconditions:** System state is reset, and target console is directed to daily symptom logging form configuration with screen readers enabled (Ref APP_166).
- **Test Steps:**
1. Target active interface for daily symptom logging form.
2. Trigger action to test swipe gesture handlers with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_166).
- **Test Data:** Target: daily symptom logging form, Action: test swipe gesture handlers, Parameters: with screen readers enabled, Case Index: APP_166
- **Expected Result:** The verification checks confirm that the database commits transaction successfully under reference APP_166.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-166
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_166_success.png
