import sys
import os
import pytest
from generate_reports import build_excel_reports
from verify_quality import run_verification

def main():
    print("[INFO] Running AsthmaSense AI QA Test Automation Pipeline...")
    
    # 1. Run verify_quality.py first to audit test specs
    print("\n--- Phase 1: Specifications Audit Verification ---")
    run_verification("qa/reports/uniqueness_verification_report.md")
    
    # 2. Run Pytest execution
    print("\n--- Phase 2: Pytest Suite Execution ---")
    exit_code = pytest.main(["qa/tests", "-q"])
    print(f"Pytest suite completed with exit code: {exit_code}")
    
    # 3. Build spreadsheets and summary dashboards
    print("\n--- Phase 3: Reporting Compiler ---")
    build_excel_reports()
    
    print("\n[SUCCESS] All automation stages executed successfully.")
    
    if exit_code != 0:
        sys.exit(exit_code)
    else:
        sys.exit(0)

if __name__ == "__main__":
    main()
