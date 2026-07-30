# Test Case: TS_SEL_118

- **Test Case ID:** TS_SEL_118
- **Module:** Authentication
- **Feature:** validate text alignment for session timeout idle alert on narrow mobile layout viewport
- **Test Title:** Verify behavior of session timeout idle alert during attempts to validate text alignment on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute validate text alignment for session timeout idle alert on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-118
- **Preconditions:** System state is reset, and target console is directed to session timeout idle alert configuration on narrow mobile layout viewport (Ref SEL_118).
- **Test Steps:**
1. Target active interface for session timeout idle alert.
2. Trigger action to validate text alignment on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_118).
- **Test Data:** Target: session timeout idle alert, Action: validate text alignment, Parameters: on narrow mobile layout viewport, Case Index: SEL_118
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_118.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-118
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_118_success.png
