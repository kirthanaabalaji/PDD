import os
import json
import sys
import re

def run_verification(artifact_report_path=None):
    print("[INFO] Starting Quality & Uniqueness Audit Verification...")
    
    registry_file = "qa/test_registry.json"
    if not os.path.exists(registry_file):
        print(f"[ERROR] Error: {registry_file} not found. Run generate_framework.py first.")
        sys.exit(1)
        
    with open(registry_file, "r") as f:
        all_specs = json.load(f)
        
    categories = ["selenium", "appium", "load", "security"]
    failures = []
    
    dup_titles = 0
    dup_objectives = 0
    dup_preconditions = 0
    dup_steps = 0
    dup_expected = 0
    dup_req_ids = 0
    dup_traceability = 0
    dup_scenarios = 0
    
    titles = set()
    objectives = set()
    preconditions_set = set()
    steps_set = set()
    expected_set = set()
    req_ids = set()
    traceability_set = set()
    scenarios_set = set()
    
    placeholder_pattern = re.compile(
        r"(\bpart\s*\d+|\bscenario\s*#|\btest\s*#|\bverify\s*scenario|\bexecute\s*scenario|\btest\s*case\s*#|\bscenario\s*\d+|\btest\s*\d+)", 
        re.IGNORECASE
    )
    
    total_count = 0
    placeholders_found = 0
    
    for category in categories:
        specs = all_specs.get(category, [])
        total_count += len(specs)
        
        for spec in specs:
            id_val = spec.get("id")
            title = spec.get("title")
            feature = spec.get("feature")
            objective = spec.get("objective")
            preconditions = spec.get("preconditions")
            steps = spec.get("steps")
            expected = spec.get("expected")
            req_id = spec.get("requirements_mapping")
            trace = spec.get("requirements_mapping")
            
            # Checks
            if title in titles: dup_titles += 1
            else: titles.add(title)
            
            if objective in objectives: dup_objectives += 1
            else: objectives.add(objective)
            
            if preconditions in preconditions_set: dup_preconditions += 1
            else: preconditions_set.add(preconditions)
            
            if steps in steps_set: dup_steps += 1
            else: steps_set.add(steps)
            
            if expected in expected_set: dup_expected += 1
            else: expected_set.add(expected)
            
            if req_id in req_ids: dup_req_ids += 1
            else: req_ids.add(req_id)
            
            if trace in traceability_set: dup_traceability += 1
            else: traceability_set.add(trace)
            
            scenario_key = (preconditions, steps, expected)
            if scenario_key in scenarios_set: dup_scenarios += 1
            else: scenarios_set.add(scenario_key)
            
            if placeholder_pattern.search(title) or placeholder_pattern.search(feature):
                placeholders_found += 1
                failures.append(f"Placeholder name violation in test {id_val}: Title='{title}' or Feature='{feature}'")

    if total_count != 1200:
        failures.append(f"Total test case count is {total_count} (Expected: exactly 1200).")

    # Add descriptive logs for any duplicates found
    if dup_titles > 0: failures.append(f"Found {dup_titles} duplicate test titles.")
    if dup_objectives > 0: failures.append(f"Found {dup_objectives} duplicate test objectives.")
    if dup_preconditions > 0: failures.append(f"Found {dup_preconditions} duplicate preconditions.")
    if dup_steps > 0: failures.append(f"Found {dup_steps} duplicate steps.")
    if dup_expected > 0: failures.append(f"Found {dup_expected} duplicate expected results.")
    if dup_req_ids > 0: failures.append(f"Found {dup_req_ids} duplicate requirement IDs.")
    if dup_traceability > 0: failures.append(f"Found {dup_traceability} duplicate traceability entries.")
    if dup_scenarios > 0: failures.append(f"Found {dup_scenarios} duplicate business scenarios.")

    report_lines = [
        "# QA Framework Quality & Uniqueness Audit Verification Report",
        "",
        "This report verifies that the rebuilt QA automation framework meets all strict quality, uniqueness, and naming convention standards.",
        "",
        "## Uniqueness Audit Summary Metrics",
        "",
        f"- Duplicate Test Titles: {dup_titles}",
        f"- Duplicate Objectives: {dup_objectives}",
        f"- Duplicate Preconditions: {dup_preconditions}",
        f"- Duplicate Steps: {dup_steps}",
        f"- Duplicate Expected Results: {dup_expected}",
        f"- Duplicate Requirement IDs: {dup_req_ids}",
        f"- Duplicate Traceability Entries: {dup_traceability}",
        f"- Duplicate Business Scenarios: {dup_scenarios}",
        f"- Placeholder Naming Violations: {placeholders_found}",
        f"- Total Test Cases Checked: {total_count}",
        "",
        "## Category Execution Audit Breakdown",
        "",
        "| Category | Total Tests | Status |",
        "| :--- | :---: | :---: |"
    ]

    for cat in categories:
        specs = all_specs.get(cat, [])
        status = "✅ PASS" if (len(specs) == 300 and not failures) else "❌ FAIL"
        report_lines.append(f"| {cat.upper()} | {len(specs)} | {status} |")

    report_lines.append("")
    report_lines.append("## Detailed Audit Log")
    report_lines.append("")
    
    if failures:
        report_lines.append(f"⚠️ **Found {len(failures)} Quality Audit failures:**")
        report_lines.append("")
        for fail in failures[:50]:
            report_lines.append(f"- {fail}")
    else:
        report_lines.append("🏆 **Zero Quality Audit failures detected! All 1,200 tests meet specifications.**")
        
    report_content = "\n".join(report_lines)
    
    # Save standard report
    os.makedirs("qa/reports", exist_ok=True)
    with open("qa/reports/uniqueness_verification_report.md", "w", encoding="utf-8") as f:
        f.write(report_content)
    print("\n[INFO] QA uniqueness verification report written to: qa/reports/uniqueness_verification_report.md")
    
    # Save artifact report if path provided
    if artifact_report_path:
        try:
            parent_dir = os.path.dirname(artifact_report_path)
            if parent_dir:
                os.makedirs(parent_dir, exist_ok=True)
            with open(artifact_report_path, "w", encoding="utf-8") as f:
                f.write(report_content)
            print(f"[INFO] Artifact report mirrored to: {artifact_report_path}")
        except Exception as e:
            print(f"[WARNING] Could not mirror report to artifact path '{artifact_report_path}': {e}")
        
    if failures:
        print("\n[FAIL] Quality audit FAILED. Please review the audit logs.")
        sys.exit(1)
    else:
        print("\n[SUCCESS] Quality audit PASSED. No duplicates or naming placeholders found.")

if __name__ == "__main__":
    path = sys.argv[1] if len(sys.argv) > 1 else None
    run_verification(path)
