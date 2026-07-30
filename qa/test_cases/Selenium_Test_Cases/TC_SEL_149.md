# Test Case: TC_SEL_149

- **Test Case ID:** TC_SEL_149
- **Module:** Authentication
- **Feature:** verify network callback for cookie consent policy banner under local storage quota limits
- **Test Title:** Verify behavior of cookie consent policy banner during attempts to verify network callback under local storage quota limits
- **Objective:** Evaluate that user can safely execute verify network callback for cookie consent policy banner under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-149
- **Preconditions:** System state is reset, and target console is directed to cookie consent policy banner configuration under local storage quota limits (Ref SEL_149).
- **Test Steps:**
1. Target active interface for cookie consent policy banner.
2. Trigger action to verify network callback under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_149).
- **Test Data:** Target: cookie consent policy banner, Action: verify network callback, Parameters: under local storage quota limits, Case Index: SEL_149
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_149.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-149
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_149_success.png
