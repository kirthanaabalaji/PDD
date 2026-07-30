# Test Case: TC_SEL_193

- **Test Case ID:** TC_SEL_193
- **Module:** Settings
- **Feature:** validate regex matching for captcha validation image challenge using cross-site scripting strings
- **Test Title:** Verify behavior of captcha validation image challenge during attempts to validate regex matching using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute validate regex matching for captcha validation image challenge using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-193
- **Preconditions:** System state is reset, and target console is directed to captcha validation image challenge configuration using cross-site scripting strings (Ref SEL_193).
- **Test Steps:**
1. Target active interface for captcha validation image challenge.
2. Trigger action to validate regex matching using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_193).
- **Test Data:** Target: captcha validation image challenge, Action: validate regex matching, Parameters: using cross-site scripting strings, Case Index: SEL_193
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_193.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-193
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_193_success.png
