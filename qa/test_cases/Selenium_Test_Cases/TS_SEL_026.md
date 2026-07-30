# Test Case: TS_SEL_026

- **Test Case ID:** TS_SEL_026
- **Module:** ClinicalReports
- **Feature:** measure execution time for clinical recommendations expansion accordion when network speed is throttled
- **Test Title:** Verify behavior of clinical recommendations expansion accordion during attempts to measure execution time when network speed is throttled
- **Objective:** Evaluate that user can safely execute measure execution time for clinical recommendations expansion accordion when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-026
- **Preconditions:** System state is reset, and target console is directed to clinical recommendations expansion accordion configuration when network speed is throttled (Ref SEL_026).
- **Test Steps:**
1. Target active interface for clinical recommendations expansion accordion.
2. Trigger action to measure execution time when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_026).
- **Test Data:** Target: clinical recommendations expansion accordion, Action: measure execution time, Parameters: when network speed is throttled, Case Index: SEL_026
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_026.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-026
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_026_success.png
