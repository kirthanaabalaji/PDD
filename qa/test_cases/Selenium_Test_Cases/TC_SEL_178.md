# Test Case: TC_SEL_178

- **Test Case ID:** TC_SEL_178
- **Module:** Settings
- **Feature:** inspect download stream for emergency contact name entry when network speed is throttled
- **Test Title:** Verify behavior of emergency contact name entry during attempts to inspect download stream when network speed is throttled
- **Objective:** Evaluate that user can safely execute inspect download stream for emergency contact name entry when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-178
- **Preconditions:** System state is reset, and target console is directed to emergency contact name entry configuration when network speed is throttled (Ref SEL_178).
- **Test Steps:**
1. Target active interface for emergency contact name entry.
2. Trigger action to inspect download stream when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_178).
- **Test Data:** Target: emergency contact name entry, Action: inspect download stream, Parameters: when network speed is throttled, Case Index: SEL_178
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_178.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-178
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_178_success.png
