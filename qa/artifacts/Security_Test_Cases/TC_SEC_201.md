# Test Case: TC_SEC_201

- **Test Case ID:** TC_SEC_201
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for HttpOnly and Secure session cookies using relative path traversing dots
- **Test Title:** Verify behavior of HttpOnly and Secure session cookies during attempts to inspect routing for open redirect using relative path traversing dots
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for HttpOnly and Secure session cookies using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-201
- **Preconditions:** System state is reset, and target console is directed to HttpOnly and Secure session cookies configuration using relative path traversing dots (Ref SEC_201).
- **Test Steps:**
1. Target active interface for HttpOnly and Secure session cookies.
2. Trigger action to inspect routing for open redirect using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_201).
- **Test Data:** Target: HttpOnly and Secure session cookies, Action: inspect routing for open redirect, Parameters: using relative path traversing dots, Case Index: SEC_201
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_201.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-201
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_201_execution.log
