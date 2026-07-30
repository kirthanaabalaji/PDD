# Test Case: TS_SEL_108

- **Test Case ID:** TS_SEL_108
- **Module:** Dashboard
- **Feature:** verify layout rendering for dashboard live graph animation using invalid credentials
- **Test Title:** Verify behavior of dashboard live graph animation during attempts to verify layout rendering using invalid credentials
- **Objective:** Evaluate that user can safely execute verify layout rendering for dashboard live graph animation using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-108
- **Preconditions:** System state is reset, and target console is directed to dashboard live graph animation configuration using invalid credentials (Ref SEL_108).
- **Test Steps:**
1. Target active interface for dashboard live graph animation.
2. Trigger action to verify layout rendering using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_108).
- **Test Data:** Target: dashboard live graph animation, Action: verify layout rendering, Parameters: using invalid credentials, Case Index: SEL_108
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_108.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-108
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_108_success.png
