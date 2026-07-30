# Test Case: TS_LOAD_144

- **Test Case ID:** TS_LOAD_144
- **Module:** AIChat
- **Feature:** check thread context switches for /api/chat/clear POST route when downstream Groq service is throttled
- **Test Title:** Verify behavior of /api/chat/clear POST route during attempts to check thread context switches when downstream Groq service is throttled
- **Objective:** Evaluate that user can safely execute check thread context switches for /api/chat/clear POST route when downstream Groq service is throttled under system checks.
- **Requirement ID:** REQ-LOAD-144
- **Preconditions:** System state is reset, and target console is directed to /api/chat/clear POST route configuration when downstream Groq service is throttled (Ref LOAD_144).
- **Test Steps:**
1. Target active interface for /api/chat/clear POST route.
2. Trigger action to check thread context switches when downstream Groq service is throttled.
3. Collect audit logs and confirm status code validation (Check LOAD_144).
- **Test Data:** Target: /api/chat/clear POST route, Action: check thread context switches, Parameters: when downstream Groq service is throttled, Case Index: LOAD_144
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_144.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-144
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_144_execution.log
