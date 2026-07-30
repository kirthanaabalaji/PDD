# Test Case: TC_SEC_129

- **Test Case ID:** TC_SEC_129
- **Module:** AccessControl
- **Feature:** manipulate record ownership indices for clinical insights calculations validation during server internal log dumping
- **Test Title:** Verify behavior of clinical insights calculations validation during attempts to manipulate record ownership indices during server internal log dumping
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for clinical insights calculations validation during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-129
- **Preconditions:** System state is reset, and target console is directed to clinical insights calculations validation configuration during server internal log dumping (Ref SEC_129).
- **Test Steps:**
1. Target active interface for clinical insights calculations validation.
2. Trigger action to manipulate record ownership indices during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_129).
- **Test Data:** Target: clinical insights calculations validation, Action: manipulate record ownership indices, Parameters: during server internal log dumping, Case Index: SEC_129
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_129.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-129
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_129_execution.log
