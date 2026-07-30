# Test Case: TS_SEL_217

- **Test Case ID:** TS_SEL_217
- **Module:** SymptomTracking
- **Feature:** check tab indexing for medicine entry list scroll position on high resolution displays
- **Test Title:** Verify behavior of medicine entry list scroll position during attempts to check tab indexing on high resolution displays
- **Objective:** Evaluate that user can safely execute check tab indexing for medicine entry list scroll position on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-217
- **Preconditions:** System state is reset, and target console is directed to medicine entry list scroll position configuration on high resolution displays (Ref SEL_217).
- **Test Steps:**
1. Target active interface for medicine entry list scroll position.
2. Trigger action to check tab indexing on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_217).
- **Test Data:** Target: medicine entry list scroll position, Action: check tab indexing, Parameters: on high resolution displays, Case Index: SEL_217
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_217.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-217
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_217_success.png
