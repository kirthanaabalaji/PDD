# Test Case: TC_SEL_291

- **Test Case ID:** TC_SEL_291
- **Module:** Onboarding
- **Feature:** test tooltips display for user deletion confirmation popup when file size exceeds limit
- **Test Title:** Verify behavior of user deletion confirmation popup during attempts to test tooltips display when file size exceeds limit
- **Objective:** Evaluate that user can safely execute test tooltips display for user deletion confirmation popup when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-291
- **Preconditions:** System state is reset, and target console is directed to user deletion confirmation popup configuration when file size exceeds limit (Ref SEL_291).
- **Test Steps:**
1. Target active interface for user deletion confirmation popup.
2. Trigger action to test tooltips display when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_291).
- **Test Data:** Target: user deletion confirmation popup, Action: test tooltips display, Parameters: when file size exceeds limit, Case Index: SEL_291
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_291.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-291
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_291_success.png
