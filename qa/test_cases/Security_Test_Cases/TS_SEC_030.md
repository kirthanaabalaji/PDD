# Test Case: TS_SEC_030

- **Test Case ID:** TS_SEC_030
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for multer audio file type validation using relative path traversing dots
- **Test Title:** Verify behavior of multer audio file type validation during attempts to check cookie storage configurations using relative path traversing dots
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for multer audio file type validation using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-030
- **Preconditions:** System state is reset, and target console is directed to multer audio file type validation configuration using relative path traversing dots (Ref SEC_030).
- **Test Steps:**
1. Target active interface for multer audio file type validation.
2. Trigger action to check cookie storage configurations using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_030).
- **Test Data:** Target: multer audio file type validation, Action: check cookie storage configurations, Parameters: using relative path traversing dots, Case Index: SEC_030
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_030.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-030
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_030_execution.log
