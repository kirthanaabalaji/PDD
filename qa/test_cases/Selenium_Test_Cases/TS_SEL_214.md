# Test Case: TS_SEL_214

- **Test Case ID:** TS_SEL_214
- **Module:** SymptomTracking
- **Feature:** validate regex matching for dosage calculator slider controls during server database failover
- **Test Title:** Verify behavior of dosage calculator slider controls during attempts to validate regex matching during server database failover
- **Objective:** Evaluate that user can safely execute validate regex matching for dosage calculator slider controls during server database failover under system checks.
- **Requirement ID:** REQ-SEL-214
- **Preconditions:** System state is reset, and target console is directed to dosage calculator slider controls configuration during server database failover (Ref SEL_214).
- **Test Steps:**
1. Target active interface for dosage calculator slider controls.
2. Trigger action to validate regex matching during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_214).
- **Test Data:** Target: dosage calculator slider controls, Action: validate regex matching, Parameters: during server database failover, Case Index: SEL_214
- **Expected Result:** The verification checks confirm that the browser console shows no errors successfully under reference SEL_214.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-214
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_214_success.png
