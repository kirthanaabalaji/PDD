# Test Case: TS_LOAD_112

- **Test Case ID:** TS_LOAD_112
- **Module:** Authentication
- **Feature:** audit log writing speed for /api/auth/verify-otp endpoint under complex aggregation pipeline queries
- **Test Title:** Verify behavior of /api/auth/verify-otp endpoint during attempts to audit log writing speed under complex aggregation pipeline queries
- **Objective:** Evaluate that user can safely execute audit log writing speed for /api/auth/verify-otp endpoint under complex aggregation pipeline queries under system checks.
- **Requirement ID:** REQ-LOAD-112
- **Preconditions:** System state is reset, and target console is directed to /api/auth/verify-otp endpoint configuration under complex aggregation pipeline queries (Ref LOAD_112).
- **Test Steps:**
1. Target active interface for /api/auth/verify-otp endpoint.
2. Trigger action to audit log writing speed under complex aggregation pipeline queries.
3. Collect audit logs and confirm status code validation (Check LOAD_112).
- **Test Data:** Target: /api/auth/verify-otp endpoint, Action: audit log writing speed, Parameters: under complex aggregation pipeline queries, Case Index: LOAD_112
- **Expected Result:** The verification checks confirm that the CPU execution load peaks below 80 percent successfully under reference LOAD_112.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-112
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_112_execution.log
