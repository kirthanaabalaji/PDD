# Test Case: TS_SEL_215

- **Test Case ID:** TS_SEL_215
- **Module:** Authentication
- **Feature:** measure execution time for remember me cookie setting when file size exceeds limit
- **Test Title:** Verify behavior of remember me cookie setting during attempts to measure execution time when file size exceeds limit
- **Objective:** Evaluate that user can safely execute measure execution time for remember me cookie setting when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-215
- **Preconditions:** System state is reset, and target console is directed to remember me cookie setting configuration when file size exceeds limit (Ref SEL_215).
- **Test Steps:**
1. Target active interface for remember me cookie setting.
2. Trigger action to measure execution time when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_215).
- **Test Data:** Target: remember me cookie setting, Action: measure execution time, Parameters: when file size exceeds limit, Case Index: SEL_215
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_215.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-215
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_215_success.png
