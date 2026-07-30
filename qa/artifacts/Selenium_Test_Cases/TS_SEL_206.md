# Test Case: TS_SEL_206

- **Test Case ID:** TS_SEL_206
- **Module:** Authentication
- **Feature:** check storage updates for forgot password security link under local storage quota limits
- **Test Title:** Verify behavior of forgot password security link during attempts to check storage updates under local storage quota limits
- **Objective:** Evaluate that user can safely execute check storage updates for forgot password security link under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-206
- **Preconditions:** System state is reset, and target console is directed to forgot password security link configuration under local storage quota limits (Ref SEL_206).
- **Test Steps:**
1. Target active interface for forgot password security link.
2. Trigger action to check storage updates under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_206).
- **Test Data:** Target: forgot password security link, Action: check storage updates, Parameters: under local storage quota limits, Case Index: SEL_206
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_206.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-206
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_206_success.png
