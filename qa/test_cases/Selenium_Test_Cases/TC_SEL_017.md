# Test Case: TC_SEL_017

- **Test Case ID:** TC_SEL_017
- **Module:** SymptomTracking
- **Feature:** check storage updates for medicine entry list scroll position when database sync is delayed
- **Test Title:** Verify behavior of medicine entry list scroll position during attempts to check storage updates when database sync is delayed
- **Objective:** Evaluate that user can safely execute check storage updates for medicine entry list scroll position when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-017
- **Preconditions:** System state is reset, and target console is directed to medicine entry list scroll position configuration when database sync is delayed (Ref SEL_017).
- **Test Steps:**
1. Target active interface for medicine entry list scroll position.
2. Trigger action to check storage updates when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_017).
- **Test Data:** Target: medicine entry list scroll position, Action: check storage updates, Parameters: when database sync is delayed, Case Index: SEL_017
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_017.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-017
- **Execution Time:** 0.680s
- **Evidence:** evidence/TC_SEL_017_success.png
