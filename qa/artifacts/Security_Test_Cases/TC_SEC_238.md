# Test Case: TC_SEC_238

- **Test Case ID:** TC_SEC_238
- **Module:** AccessControl
- **Feature:** check traversal directory access for Atlas backup storage access control with array parameter pollution payloads
- **Test Title:** Verify behavior of Atlas backup storage access control during attempts to check traversal directory access with array parameter pollution payloads
- **Objective:** Evaluate that user can safely execute check traversal directory access for Atlas backup storage access control with array parameter pollution payloads under system checks.
- **Requirement ID:** REQ-SEC-238
- **Preconditions:** System state is reset, and target console is directed to Atlas backup storage access control configuration with array parameter pollution payloads (Ref SEC_238).
- **Test Steps:**
1. Target active interface for Atlas backup storage access control.
2. Trigger action to check traversal directory access with array parameter pollution payloads.
3. Collect audit logs and confirm status code validation (Check SEC_238).
- **Test Data:** Target: Atlas backup storage access control, Action: check traversal directory access, Parameters: with array parameter pollution payloads, Case Index: SEC_238
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_238.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-238
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_238_execution.log
