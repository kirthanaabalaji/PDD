# Test Case: TC_APP_173

- **Test Case ID:** TC_APP_173
- **Module:** Settings
- **Feature:** audit gesture scaling zoom for warm start wake sequence during package upgrade install
- **Test Title:** Verify behavior of warm start wake sequence during attempts to audit gesture scaling zoom during package upgrade install
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for warm start wake sequence during package upgrade install under system checks.
- **Requirement ID:** REQ-APP-173
- **Preconditions:** System state is reset, and target console is directed to warm start wake sequence configuration during package upgrade install (Ref APP_173).
- **Test Steps:**
1. Target active interface for warm start wake sequence.
2. Trigger action to audit gesture scaling zoom during package upgrade install.
3. Collect audit logs and confirm status code validation (Check APP_173).
- **Test Data:** Target: warm start wake sequence, Action: audit gesture scaling zoom, Parameters: during package upgrade install, Case Index: APP_173
- **Expected Result:** The verification checks confirm that the device releases memory allocations successfully under reference APP_173.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-173
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_173_success.png
