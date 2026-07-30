# Test Case: TC_SEC_066

- **Test Case ID:** TC_SEC_066
- **Module:** AccessControl
- **Feature:** manipulate record ownership indices for XML external entity injection block against OWASP top 10 rules
- **Test Title:** Verify behavior of XML external entity injection block during attempts to manipulate record ownership indices against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for XML external entity injection block against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-066
- **Preconditions:** System state is reset, and target console is directed to XML external entity injection block configuration against OWASP top 10 rules (Ref SEC_066).
- **Test Steps:**
1. Target active interface for XML external entity injection block.
2. Trigger action to manipulate record ownership indices against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_066).
- **Test Data:** Target: XML external entity injection block, Action: manipulate record ownership indices, Parameters: against OWASP top 10 rules, Case Index: SEC_066
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_066.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-066
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_066_execution.log
