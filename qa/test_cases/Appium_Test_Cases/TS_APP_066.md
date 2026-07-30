# Test Case: TS_APP_066

- **Test Case ID:** TS_APP_066
- **Module:** SymptomTracking
- **Feature:** test background execution for daily symptom logging form when database storage quota is exceeded
- **Test Title:** Verify behavior of daily symptom logging form during attempts to test background execution when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute test background execution for daily symptom logging form when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-066
- **Preconditions:** System state is reset, and target console is directed to daily symptom logging form configuration when database storage quota is exceeded (Ref APP_066).
- **Test Steps:**
1. Target active interface for daily symptom logging form.
2. Trigger action to test background execution when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_066).
- **Test Data:** Target: daily symptom logging form, Action: test background execution, Parameters: when database storage quota is exceeded, Case Index: APP_066
- **Expected Result:** The verification checks confirm that the local storage path is secured successfully under reference APP_066.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-066
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_066_success.png
