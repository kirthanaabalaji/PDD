# Test Case: TC_SEL_279

- **Test Case ID:** TC_SEL_279
- **Module:** Settings
- **Feature:** audit keyboard navigation for emergency trigger swipe action button using invalid credentials
- **Test Title:** Verify behavior of emergency trigger swipe action button during attempts to audit keyboard navigation using invalid credentials
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for emergency trigger swipe action button using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-279
- **Preconditions:** System state is reset, and target console is directed to emergency trigger swipe action button configuration using invalid credentials (Ref SEL_279).
- **Test Steps:**
1. Target active interface for emergency trigger swipe action button.
2. Trigger action to audit keyboard navigation using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_279).
- **Test Data:** Target: emergency trigger swipe action button, Action: audit keyboard navigation, Parameters: using invalid credentials, Case Index: SEL_279
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_279.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-279
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_279_success.png
