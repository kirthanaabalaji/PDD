# Test Case: TS_SEL_152

- **Test Case ID:** TS_SEL_152
- **Module:** Authentication
- **Feature:** measure execution time for multi-tab login state sync with empty values
- **Test Title:** Verify behavior of multi-tab login state sync during attempts to measure execution time with empty values
- **Objective:** Evaluate that user can safely execute measure execution time for multi-tab login state sync with empty values under system checks.
- **Requirement ID:** REQ-SEL-152
- **Preconditions:** System state is reset, and target console is directed to multi-tab login state sync configuration with empty values (Ref SEL_152).
- **Test Steps:**
1. Target active interface for multi-tab login state sync.
2. Trigger action to measure execution time with empty values.
3. Collect audit logs and confirm status code validation (Check SEL_152).
- **Test Data:** Target: multi-tab login state sync, Action: measure execution time, Parameters: with empty values, Case Index: SEL_152
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_152.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-152
- **Execution Time:** 0.280s
- **Evidence:** evidence/TS_SEL_152_success.png
