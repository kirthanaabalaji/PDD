# Test Case: TS_SEL_155

- **Test Case ID:** TS_SEL_155
- **Module:** Authentication
- **Feature:** process submission for browser history back navigation behavior using cross-site scripting strings
- **Test Title:** Verify behavior of browser history back navigation behavior during attempts to process submission using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute process submission for browser history back navigation behavior using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-155
- **Preconditions:** System state is reset, and target console is directed to browser history back navigation behavior configuration using cross-site scripting strings (Ref SEL_155).
- **Test Steps:**
1. Target active interface for browser history back navigation behavior.
2. Trigger action to process submission using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_155).
- **Test Data:** Target: browser history back navigation behavior, Action: process submission, Parameters: using cross-site scripting strings, Case Index: SEL_155
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_155.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-155
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_155_success.png
