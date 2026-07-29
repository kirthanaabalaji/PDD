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
    
    # Store sets for duplicates checks
    all_titles = set()
    all_ids = set()
    all_scenarios = set()
    
    report_lines = [
        "# QA Framework Quality & Uniqueness Audit Verification Report",
        "",
        "This report verifies that the rebuilt QA automation framework meets all strict quality, uniqueness, and naming convention standards.",
        ""
    ]
    
    category_checks = {}
    
    placeholder_pattern = re.compile(
        r"(\bpart\s*\d+|\bscenario\s*#|\btest\s*#|\bverify\s*scenario|\bexecute\s*scenario|\btest\s*case\s*#|\bscenario\s*\d+|\btest\s*\d+)", 
        re.IGNORECASE
    )
    
    for category in categories:
        specs = all_specs.get(category, [])
        count = len(specs)
        category_checks[category] = {
            "count": count,
            "duplicate_ids": 0,
            "duplicate_titles": 0,
            "duplicate_features": 0,
            "placeholders": 0,
            "duplicate_scenarios": 0
        }
        
        print(f"\n[INFO] Auditing Category: {category.upper()} ({count} tests)")
        
        if count != 300:
            failures.append(f"Category '{category}' has {count} tests (Expected: exactly 300).")
            
        category_features = set()
        for spec in specs:
            id_val = spec.get("id")
            title = spec.get("title")
            feature = spec.get("feature")
            steps = spec.get("steps")
            preconditions = spec.get("preconditions")
            expected = spec.get("expected")
            
            # Check duplicate IDs
            if id_val in all_ids:
                category_checks[category]["duplicate_ids"] += 1
                failures.append(f"Duplicate ID found: {id_val}")
            else:
                all_ids.add(id_val)
                
            # Check duplicate Titles
            if title in all_titles:
                category_checks[category]["duplicate_titles"] += 1
                failures.append(f"Duplicate title found: '{title}'")
            else:
                all_titles.add(title)
                
            # Check duplicate Features within category
            if feature in category_features:
                category_checks[category]["duplicate_features"] += 1
                failures.append(f"Duplicate feature found in {category.upper()}: '{feature}'")
            else:
                category_features.add(feature)
                
            # Check placeholder patterns in title and feature name
            if placeholder_pattern.search(title) or placeholder_pattern.search(feature):
                category_checks[category]["placeholders"] += 1
                failures.append(f"Placeholder name violation in test {id_val}: Title='{title}' or Feature='{feature}'")
                
            # Check duplicate scenarios (combination of preconditions, steps, expected)
            scenario_key = (preconditions, steps, expected)
            if scenario_key in all_scenarios:
                category_checks[category]["duplicate_scenarios"] += 1
                failures.append(f"Duplicate scenario structure found in test {id_val}: '{title}'")
            else:
                all_scenarios.add(scenario_key)

    # Compile Verification Tables
    report_lines.append("## Category Audit Summary")
    report_lines.append("")
    report_lines.append("| Category | Total Tests | Duplicate IDs | Duplicate Titles | Duplicate Features | Placeholders | Duplicate Scenarios | Status |")
    report_lines.append("| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |")
    
    all_ok = True
    for cat in categories:
        checks = category_checks[cat]
        status = "✅ PASS" if (checks["count"] == 300 and checks["duplicate_ids"] == 0 and 
                               checks["duplicate_titles"] == 0 and checks["duplicate_features"] == 0 and
                               checks["placeholders"] == 0 and checks["duplicate_scenarios"] == 0) else "❌ FAIL"
        if status == "❌ FAIL":
            all_ok = False
            
        report_lines.append(
            f"| {cat.upper()} | {checks['count']} | {checks['duplicate_ids']} | "
            f"{checks['duplicate_titles']} | {checks['duplicate_features']} | {checks['placeholders']} | "
            f"{checks['duplicate_scenarios']} | {status} |"
        )
        
    report_lines.append("")
    report_lines.append("## Detailed Audit Log")
    report_lines.append("")
    
    if failures:
        report_lines.append(f"⚠️ **Found {len(failures)} Quality Audit failures:**")
        report_lines.append("")
        for fail in failures[:50]: # limit log length
            report_lines.append(f"- {fail}")
        if len(failures) > 50:
            report_lines.append(f"- ... and {len(failures) - 50} more audit issues.")
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
        
    if not all_ok or failures:
        print("\n[FAIL] Quality audit FAILED. Please review the audit logs.")
        sys.exit(1)
    else:
        print("\n[SUCCESS] Quality audit PASSED. No duplicates or naming placeholders found.")

if __name__ == "__main__":
    # Check if artifact path is provided as CLI argument
    path = sys.argv[1] if len(sys.argv) > 1 else None
    run_verification(path)
