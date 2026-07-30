# Test Case: TS_SEL_127

- **Test Case ID:** TS_SEL_127
- **Module:** Onboarding
- **Feature:** track cookie changes for profile picture upload modal using invalid credentials
- **Test Title:** Verify behavior of profile picture upload modal during attempts to track cookie changes using invalid credentials
- **Objective:** Evaluate that user can safely execute track cookie changes for profile picture upload modal using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-127
- **Preconditions:** System state is reset, and target console is directed to profile picture upload modal configuration using invalid credentials (Ref SEL_127).
- **Test Steps:**
1. Target active interface for profile picture upload modal.
2. Trigger action to track cookie changes using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_127).
- **Test Data:** Target: profile picture upload modal, Action: track cookie changes, Parameters: using invalid credentials, Case Index: SEL_127
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_127.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-127
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_127_success.png
