# Test Case: TS_SEC_198

- **Test Case ID:** TS_SEC_198
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for security HTTP response headers with executable php script files
- **Test Title:** Verify behavior of security HTTP response headers during attempts to check cookie storage configurations with executable php script files
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for security HTTP response headers with executable php script files under system checks.
- **Requirement ID:** REQ-SEC-198
- **Preconditions:** System state is reset, and target console is directed to security HTTP response headers configuration with executable php script files (Ref SEC_198).
- **Test Steps:**
1. Target active interface for security HTTP response headers.
2. Trigger action to check cookie storage configurations with executable php script files.
3. Collect audit logs and confirm status code validation (Check SEC_198).
- **Test Data:** Target: security HTTP response headers, Action: check cookie storage configurations, Parameters: with executable php script files, Case Index: SEC_198
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_198.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-198
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_198_execution.log
