# Test Case: TS_SEC_049

- **Test Case ID:** TS_SEC_049
- **Module:** AccessControl
- **Feature:** check traversal directory access for broken session handling invalidator using relative path traversing dots
- **Test Title:** Verify behavior of broken session handling invalidator during attempts to check traversal directory access using relative path traversing dots
- **Objective:** Evaluate that user can safely execute check traversal directory access for broken session handling invalidator using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-049
- **Preconditions:** System state is reset, and target console is directed to broken session handling invalidator configuration using relative path traversing dots (Ref SEC_049).
- **Test Steps:**
1. Target active interface for broken session handling invalidator.
2. Trigger action to check traversal directory access using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_049).
- **Test Data:** Target: broken session handling invalidator, Action: check traversal directory access, Parameters: using relative path traversing dots, Case Index: SEC_049
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_049.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-049
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_049_execution.log
