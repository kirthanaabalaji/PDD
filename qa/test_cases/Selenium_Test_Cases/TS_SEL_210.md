# Test Case: TS_SEL_210

- **Test Case ID:** TS_SEL_210
- **Module:** SymptomTracking
- **Feature:** validate fields for symptom log severity score slider after session token expiration
- **Test Title:** Verify behavior of symptom log severity score slider during attempts to validate fields after session token expiration
- **Objective:** Evaluate that user can safely execute validate fields for symptom log severity score slider after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-210
- **Preconditions:** System state is reset, and target console is directed to symptom log severity score slider configuration after session token expiration (Ref SEL_210).
- **Test Steps:**
1. Target active interface for symptom log severity score slider.
2. Trigger action to validate fields after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_210).
- **Test Data:** Target: symptom log severity score slider, Action: validate fields, Parameters: after session token expiration, Case Index: SEL_210
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_210.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-210
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_210_success.png
