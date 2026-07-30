# Test Case: TS_SEC_027

- **Test Case ID:** TS_SEC_027
- **Module:** SQLi
- **Feature:** audit brute force block speed for unauthenticated route access controls with executable php script files
- **Test Title:** Verify behavior of unauthenticated route access controls during attempts to audit brute force block speed with executable php script files
- **Objective:** Evaluate that user can safely execute audit brute force block speed for unauthenticated route access controls with executable php script files under system checks.
- **Requirement ID:** REQ-SEC-027
- **Preconditions:** System state is reset, and target console is directed to unauthenticated route access controls configuration with executable php script files (Ref SEC_027).
- **Test Steps:**
1. Target active interface for unauthenticated route access controls.
2. Trigger action to audit brute force block speed with executable php script files.
3. Collect audit logs and confirm status code validation (Check SEC_027).
- **Test Data:** Target: unauthenticated route access controls, Action: audit brute force block speed, Parameters: with executable php script files, Case Index: SEC_027
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_027.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-027
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_027_execution.log
