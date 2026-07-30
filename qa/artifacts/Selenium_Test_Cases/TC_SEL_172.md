# Test Case: TC_SEL_172

- **Test Case ID:** TC_SEL_172
- **Module:** AIChat
- **Feature:** validate regex matching for ai chat message input box after session token expiration
- **Test Title:** Verify behavior of ai chat message input box during attempts to validate regex matching after session token expiration
- **Objective:** Evaluate that user can safely execute validate regex matching for ai chat message input box after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-172
- **Preconditions:** System state is reset, and target console is directed to ai chat message input box configuration after session token expiration (Ref SEL_172).
- **Test Steps:**
1. Target active interface for ai chat message input box.
2. Trigger action to validate regex matching after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_172).
- **Test Data:** Target: ai chat message input box, Action: validate regex matching, Parameters: after session token expiration, Case Index: SEL_172
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_172.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-172
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_172_success.png
