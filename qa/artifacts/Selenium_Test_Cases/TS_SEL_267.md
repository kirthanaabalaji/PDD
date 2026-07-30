# Test Case: TS_SEL_267

- **Test Case ID:** TS_SEL_267
- **Module:** SymptomTracking
- **Feature:** evaluate text wrapping for medicine entry list scroll position after session token expiration
- **Test Title:** Verify behavior of medicine entry list scroll position during attempts to evaluate text wrapping after session token expiration
- **Objective:** Evaluate that user can safely execute evaluate text wrapping for medicine entry list scroll position after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-267
- **Preconditions:** System state is reset, and target console is directed to medicine entry list scroll position configuration after session token expiration (Ref SEL_267).
- **Test Steps:**
1. Target active interface for medicine entry list scroll position.
2. Trigger action to evaluate text wrapping after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_267).
- **Test Data:** Target: medicine entry list scroll position, Action: evaluate text wrapping, Parameters: after session token expiration, Case Index: SEL_267
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_267.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-267
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_267_success.png
