# Test Case: TS_SEL_174

- **Test Case ID:** TS_SEL_174
- **Module:** Onboarding
- **Feature:** audit keyboard navigation for profile information form fields using cross-site scripting strings
- **Test Title:** Verify behavior of profile information form fields during attempts to audit keyboard navigation using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for profile information form fields using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-174
- **Preconditions:** System state is reset, and target console is directed to profile information form fields configuration using cross-site scripting strings (Ref SEL_174).
- **Test Steps:**
1. Target active interface for profile information form fields.
2. Trigger action to audit keyboard navigation using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_174).
- **Test Data:** Target: profile information form fields, Action: audit keyboard navigation, Parameters: using cross-site scripting strings, Case Index: SEL_174
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_174.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-174
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_174_success.png
