# Test Case: TS_SEL_129

- **Test Case ID:** TS_SEL_129
- **Module:** Settings
- **Feature:** verify layout rendering for emergency trigger swipe action button when cookies are blocked
- **Test Title:** Verify behavior of emergency trigger swipe action button during attempts to verify layout rendering when cookies are blocked
- **Objective:** Evaluate that user can safely execute verify layout rendering for emergency trigger swipe action button when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-129
- **Preconditions:** System state is reset, and target console is directed to emergency trigger swipe action button configuration when cookies are blocked (Ref SEL_129).
- **Test Steps:**
1. Target active interface for emergency trigger swipe action button.
2. Trigger action to verify layout rendering when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_129).
- **Test Data:** Target: emergency trigger swipe action button, Action: verify layout rendering, Parameters: when cookies are blocked, Case Index: SEL_129
- **Expected Result:** The verification checks confirm that the browser console shows no errors successfully under reference SEL_129.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-129
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_129_success.png
