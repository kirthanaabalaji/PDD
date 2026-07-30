# Test Case: TS_SEL_091

- **Test Case ID:** TS_SEL_091
- **Module:** Onboarding
- **Feature:** check tab indexing for user deletion confirmation popup when cookies are blocked
- **Test Title:** Verify behavior of user deletion confirmation popup during attempts to check tab indexing when cookies are blocked
- **Objective:** Evaluate that user can safely execute check tab indexing for user deletion confirmation popup when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-091
- **Preconditions:** System state is reset, and target console is directed to user deletion confirmation popup configuration when cookies are blocked (Ref SEL_091).
- **Test Steps:**
1. Target active interface for user deletion confirmation popup.
2. Trigger action to check tab indexing when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_091).
- **Test Data:** Target: user deletion confirmation popup, Action: check tab indexing, Parameters: when cookies are blocked, Case Index: SEL_091
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_091.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-091
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_091_success.png
