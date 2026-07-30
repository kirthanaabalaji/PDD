# Test Case: TC_SEL_222

- **Test Case ID:** TC_SEL_222
- **Module:** AIChat
- **Feature:** inspect modal overlays for ai chat message input box using invalid credentials
- **Test Title:** Verify behavior of ai chat message input box during attempts to inspect modal overlays using invalid credentials
- **Objective:** Evaluate that user can safely execute inspect modal overlays for ai chat message input box using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-222
- **Preconditions:** System state is reset, and target console is directed to ai chat message input box configuration using invalid credentials (Ref SEL_222).
- **Test Steps:**
1. Target active interface for ai chat message input box.
2. Trigger action to inspect modal overlays using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_222).
- **Test Data:** Target: ai chat message input box, Action: inspect modal overlays, Parameters: using invalid credentials, Case Index: SEL_222
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_222.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-222
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_222_success.png
