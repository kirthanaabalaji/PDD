# Test Case: TS_SEL_028

- **Test Case ID:** TS_SEL_028
- **Module:** Settings
- **Feature:** check tab indexing for emergency contact name entry during api gateway timeout
- **Test Title:** Verify behavior of emergency contact name entry during attempts to check tab indexing during api gateway timeout
- **Objective:** Evaluate that user can safely execute check tab indexing for emergency contact name entry during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-028
- **Preconditions:** System state is reset, and target console is directed to emergency contact name entry configuration during api gateway timeout (Ref SEL_028).
- **Test Steps:**
1. Target active interface for emergency contact name entry.
2. Trigger action to check tab indexing during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_028).
- **Test Data:** Target: emergency contact name entry, Action: check tab indexing, Parameters: during api gateway timeout, Case Index: SEL_028
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_028.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-028
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_028_success.png
