# Test Case: TC_SEL_128

- **Test Case ID:** TC_SEL_128
- **Module:** Settings
- **Feature:** verify network callback for emergency contact name entry with multiple simultaneous submits
- **Test Title:** Verify behavior of emergency contact name entry during attempts to verify network callback with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute verify network callback for emergency contact name entry with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-128
- **Preconditions:** System state is reset, and target console is directed to emergency contact name entry configuration with multiple simultaneous submits (Ref SEL_128).
- **Test Steps:**
1. Target active interface for emergency contact name entry.
2. Trigger action to verify network callback with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_128).
- **Test Data:** Target: emergency contact name entry, Action: verify network callback, Parameters: with multiple simultaneous submits, Case Index: SEL_128
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_128.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-128
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_128_success.png
