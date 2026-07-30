# Test Case: TS_SEL_053

- **Test Case ID:** TS_SEL_053
- **Module:** Authentication
- **Feature:** check boundary limits for registration email validation when cookies are blocked
- **Test Title:** Verify behavior of registration email validation during attempts to check boundary limits when cookies are blocked
- **Objective:** Evaluate that user can safely execute check boundary limits for registration email validation when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-053
- **Preconditions:** System state is reset, and target console is directed to registration email validation configuration when cookies are blocked (Ref SEL_053).
- **Test Steps:**
1. Target active interface for registration email validation.
2. Trigger action to check boundary limits when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_053).
- **Test Data:** Target: registration email validation, Action: check boundary limits, Parameters: when cookies are blocked, Case Index: SEL_053
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_053.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-053
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_053_success.png
