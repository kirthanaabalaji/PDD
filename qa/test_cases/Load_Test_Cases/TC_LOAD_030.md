# Test Case: TC_LOAD_030

- **Test Case ID:** TC_LOAD_030
- **Module:** BreathingExercises
- **Feature:** check payload upload time for /api/data/sessions GET route when downstream Groq service is throttled
- **Test Title:** Verify behavior of /api/data/sessions GET route during attempts to check payload upload time when downstream Groq service is throttled
- **Objective:** Evaluate that user can safely execute check payload upload time for /api/data/sessions GET route when downstream Groq service is throttled under system checks.
- **Requirement ID:** REQ-LOAD-030
- **Preconditions:** System state is reset, and target console is directed to /api/data/sessions GET route configuration when downstream Groq service is throttled (Ref LOAD_030).
- **Test Steps:**
1. Target active interface for /api/data/sessions GET route.
2. Trigger action to check payload upload time when downstream Groq service is throttled.
3. Collect audit logs and confirm status code validation (Check LOAD_030).
- **Test Data:** Target: /api/data/sessions GET route, Action: check payload upload time, Parameters: when downstream Groq service is throttled, Case Index: LOAD_030
- **Expected Result:** The verification checks confirm that the failover route restores active states successfully under reference LOAD_030.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-030
- **Execution Time:** 4.5s
- **Evidence:** logs/TC_LOAD_030_execution.log
