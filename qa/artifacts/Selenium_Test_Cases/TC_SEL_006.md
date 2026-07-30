# Test Case: TC_SEL_006

- **Test Case ID:** TC_SEL_006
- **Module:** Authentication
- **Feature:** audit keyboard navigation for forgot password security link when file size exceeds limit
- **Test Title:** Verify behavior of forgot password security link during attempts to audit keyboard navigation when file size exceeds limit
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for forgot password security link when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-006
- **Preconditions:** System state is reset, and target console is directed to forgot password security link configuration when file size exceeds limit (Ref SEL_006).
- **Test Steps:**
1. Target active interface for forgot password security link.
2. Trigger action to audit keyboard navigation when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_006).
- **Test Data:** Target: forgot password security link, Action: audit keyboard navigation, Parameters: when file size exceeds limit, Case Index: SEL_006
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_006.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-006
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_006_success.png
