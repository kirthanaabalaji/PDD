# Test Case: TS_SEL_286

- **Test Case ID:** TS_SEL_286
- **Module:** Dashboard
- **Feature:** validate text alignment for navigation drawer menu items after session token expiration
- **Test Title:** Verify behavior of navigation drawer menu items during attempts to validate text alignment after session token expiration
- **Objective:** Evaluate that user can safely execute validate text alignment for navigation drawer menu items after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-286
- **Preconditions:** System state is reset, and target console is directed to navigation drawer menu items configuration after session token expiration (Ref SEL_286).
- **Test Steps:**
1. Target active interface for navigation drawer menu items.
2. Trigger action to validate text alignment after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_286).
- **Test Data:** Target: navigation drawer menu items, Action: validate text alignment, Parameters: after session token expiration, Case Index: SEL_286
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_286.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-286
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_286_success.png
