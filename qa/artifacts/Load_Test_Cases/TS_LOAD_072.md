# Test Case: TS_LOAD_072

- **Test Case ID:** TS_LOAD_072
- **Module:** Database
- **Feature:** check payload upload time for Groq API LLM proxy queue under continuous long-duration soak run
- **Test Title:** Verify behavior of Groq API LLM proxy queue during attempts to check payload upload time under continuous long-duration soak run
- **Objective:** Evaluate that user can safely execute check payload upload time for Groq API LLM proxy queue under continuous long-duration soak run under system checks.
- **Requirement ID:** REQ-LOAD-072
- **Preconditions:** System state is reset, and target console is directed to Groq API LLM proxy queue configuration under continuous long-duration soak run (Ref LOAD_072).
- **Test Steps:**
1. Target active interface for Groq API LLM proxy queue.
2. Trigger action to check payload upload time under continuous long-duration soak run.
3. Collect audit logs and confirm status code validation (Check LOAD_072).
- **Test Data:** Target: Groq API LLM proxy queue, Action: check payload upload time, Parameters: under continuous long-duration soak run, Case Index: LOAD_072
- **Expected Result:** The verification checks confirm that the database throughput handles burst operations successfully under reference LOAD_072.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-072
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_072_execution.log
