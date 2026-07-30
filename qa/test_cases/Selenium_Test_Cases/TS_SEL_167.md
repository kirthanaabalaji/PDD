# Test Case: TS_SEL_167

- **Test Case ID:** TS_SEL_167
- **Module:** SymptomTracking
- **Feature:** audit focus states for medicine entry list scroll position when cookies are blocked
- **Test Title:** Verify behavior of medicine entry list scroll position during attempts to audit focus states when cookies are blocked
- **Objective:** Evaluate that user can safely execute audit focus states for medicine entry list scroll position when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-167
- **Preconditions:** System state is reset, and target console is directed to medicine entry list scroll position configuration when cookies are blocked (Ref SEL_167).
- **Test Steps:**
1. Target active interface for medicine entry list scroll position.
2. Trigger action to audit focus states when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_167).
- **Test Data:** Target: medicine entry list scroll position, Action: audit focus states, Parameters: when cookies are blocked, Case Index: SEL_167
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_167.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-167
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_167_success.png
