# Test Case: TC_SEL_160

- **Test Case ID:** TC_SEL_160
- **Module:** SymptomTracking
- **Feature:** validate text alignment for symptom log severity score slider on high resolution displays
- **Test Title:** Verify behavior of symptom log severity score slider during attempts to validate text alignment on high resolution displays
- **Objective:** Evaluate that user can safely execute validate text alignment for symptom log severity score slider on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-160
- **Preconditions:** System state is reset, and target console is directed to symptom log severity score slider configuration on high resolution displays (Ref SEL_160).
- **Test Steps:**
1. Target active interface for symptom log severity score slider.
2. Trigger action to validate text alignment on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_160).
- **Test Data:** Target: symptom log severity score slider, Action: validate text alignment, Parameters: on high resolution displays, Case Index: SEL_160
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_160.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-160
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_160_success.png
