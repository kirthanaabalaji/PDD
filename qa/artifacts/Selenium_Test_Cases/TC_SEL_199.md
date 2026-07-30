# Test Case: TC_SEL_199

- **Test Case ID:** TC_SEL_199
- **Module:** Authentication
- **Feature:** inspect download stream for cookie consent policy banner during api gateway timeout
- **Test Title:** Verify behavior of cookie consent policy banner during attempts to inspect download stream during api gateway timeout
- **Objective:** Evaluate that user can safely execute inspect download stream for cookie consent policy banner during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-199
- **Preconditions:** System state is reset, and target console is directed to cookie consent policy banner configuration during api gateway timeout (Ref SEL_199).
- **Test Steps:**
1. Target active interface for cookie consent policy banner.
2. Trigger action to inspect download stream during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_199).
- **Test Data:** Target: cookie consent policy banner, Action: inspect download stream, Parameters: during api gateway timeout, Case Index: SEL_199
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_199.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-199
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_199_success.png
