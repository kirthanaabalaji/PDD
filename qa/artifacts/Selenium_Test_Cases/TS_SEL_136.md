# Test Case: TS_SEL_136

- **Test Case ID:** TS_SEL_136
- **Module:** Dashboard
- **Feature:** inspect download stream for navigation drawer menu items using cross-site scripting strings
- **Test Title:** Verify behavior of navigation drawer menu items during attempts to inspect download stream using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute inspect download stream for navigation drawer menu items using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-136
- **Preconditions:** System state is reset, and target console is directed to navigation drawer menu items configuration using cross-site scripting strings (Ref SEL_136).
- **Test Steps:**
1. Target active interface for navigation drawer menu items.
2. Trigger action to inspect download stream using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_136).
- **Test Data:** Target: navigation drawer menu items, Action: inspect download stream, Parameters: using cross-site scripting strings, Case Index: SEL_136
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_136.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-136
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_136_success.png
