# Test Case: TC_SEL_022

- **Test Case ID:** TC_SEL_022
- **Module:** AIChat
- **Feature:** track cookie changes for ai chat message input box using cross-site scripting strings
- **Test Title:** Verify behavior of ai chat message input box during attempts to track cookie changes using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute track cookie changes for ai chat message input box using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-022
- **Preconditions:** System state is reset, and target console is directed to ai chat message input box configuration using cross-site scripting strings (Ref SEL_022).
- **Test Steps:**
1. Target active interface for ai chat message input box.
2. Trigger action to track cookie changes using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_022).
- **Test Data:** Target: ai chat message input box, Action: track cookie changes, Parameters: using cross-site scripting strings, Case Index: SEL_022
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_022.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-022
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_022_success.png
