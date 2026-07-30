# Test Case: TS_SEL_196

- **Test Case ID:** TS_SEL_196
- **Module:** Settings
- **Feature:** check tab indexing for password visibility toggle switch when file size exceeds limit
- **Test Title:** Verify behavior of password visibility toggle switch during attempts to check tab indexing when file size exceeds limit
- **Objective:** Evaluate that user can safely execute check tab indexing for password visibility toggle switch when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-196
- **Preconditions:** System state is reset, and target console is directed to password visibility toggle switch configuration when file size exceeds limit (Ref SEL_196).
- **Test Steps:**
1. Target active interface for password visibility toggle switch.
2. Trigger action to check tab indexing when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_196).
- **Test Data:** Target: password visibility toggle switch, Action: check tab indexing, Parameters: when file size exceeds limit, Case Index: SEL_196
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_196.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-196
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_196_success.png
