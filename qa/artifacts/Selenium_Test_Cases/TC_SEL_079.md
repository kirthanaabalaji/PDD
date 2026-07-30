# Test Case: TC_SEL_079

- **Test Case ID:** TC_SEL_079
- **Module:** Settings
- **Feature:** reset options for emergency trigger swipe action button using cross-site scripting strings
- **Test Title:** Verify behavior of emergency trigger swipe action button during attempts to reset options using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute reset options for emergency trigger swipe action button using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-079
- **Preconditions:** System state is reset, and target console is directed to emergency trigger swipe action button configuration using cross-site scripting strings (Ref SEL_079).
- **Test Steps:**
1. Target active interface for emergency trigger swipe action button.
2. Trigger action to reset options using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_079).
- **Test Data:** Target: emergency trigger swipe action button, Action: reset options, Parameters: using cross-site scripting strings, Case Index: SEL_079
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_079.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-079
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_079_success.png
