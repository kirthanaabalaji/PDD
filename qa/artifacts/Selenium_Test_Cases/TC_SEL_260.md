# Test Case: TC_SEL_260

- **Test Case ID:** TC_SEL_260
- **Module:** SymptomTracking
- **Feature:** process submission for symptom log severity score slider using invalid credentials
- **Test Title:** Verify behavior of symptom log severity score slider during attempts to process submission using invalid credentials
- **Objective:** Evaluate that user can safely execute process submission for symptom log severity score slider using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-260
- **Preconditions:** System state is reset, and target console is directed to symptom log severity score slider configuration using invalid credentials (Ref SEL_260).
- **Test Steps:**
1. Target active interface for symptom log severity score slider.
2. Trigger action to process submission using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_260).
- **Test Data:** Target: symptom log severity score slider, Action: process submission, Parameters: using invalid credentials, Case Index: SEL_260
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_260.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-260
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_260_success.png
