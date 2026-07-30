# Test Case: TC_LOAD_258

- **Test Case ID:** TC_LOAD_258
- **Module:** SymptomTracking
- **Feature:** test queue backlog latency for /api/data/symptoms DELETE route when downstream Groq service is throttled
- **Test Title:** Verify behavior of /api/data/symptoms DELETE route during attempts to test queue backlog latency when downstream Groq service is throttled
- **Objective:** Evaluate that user can safely execute test queue backlog latency for /api/data/symptoms DELETE route when downstream Groq service is throttled under system checks.
- **Requirement ID:** REQ-LOAD-258
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms DELETE route configuration when downstream Groq service is throttled (Ref LOAD_258).
- **Test Steps:**
1. Target active interface for /api/data/symptoms DELETE route.
2. Trigger action to test queue backlog latency when downstream Groq service is throttled.
3. Collect audit logs and confirm status code validation (Check LOAD_258).
- **Test Data:** Target: /api/data/symptoms DELETE route, Action: test queue backlog latency, Parameters: when downstream Groq service is throttled, Case Index: LOAD_258
- **Expected Result:** The verification checks confirm that the request queue does not overflow backlog successfully under reference LOAD_258.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-258
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_258_execution.log
