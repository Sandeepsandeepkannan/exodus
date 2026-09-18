import os
import re

code_dir = r"C:\Users\sande\OneDrive\Desktop\Rainbow-Media\Exodus-Website\Code"
files_to_check = [
    r"app\page.tsx",
    r"app\about\page.tsx",
    r"app\products\page.tsx",
    r"app\about-human-hair\page.tsx",
    r"app\cranial-prosthesis\page.tsx",
    r"app\contact\page.tsx",
    r"components\Navbar.tsx",
    r"components\Footer.tsx",
    r"components\Hero.tsx",
    r"components\WhyChooseUs.tsx",
    r"components\CTASection.tsx",
    r"components\ProductCard.tsx",
    r"components\ProductModal.tsx",
    r"data\products.ts",
]

all_findings = []

for rel_path in files_to_check:
    full_path = os.path.join(code_dir, rel_path)
    if not os.path.exists(full_path):
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        for idx, line in enumerate(lines, start=1):
            # Check for Page labels
            if re.search(r'Page\s*[-–—]\s*\d+|PAGE\s*[-–—]\s*\d+', line, re.I):
                all_findings.append({
                    'category': 'Page label',
                    'file': rel_path,
                    'line': idx,
                    'text': line.strip()
                })
            # Check for Section / Topic numbering in headings, titles, badges
            elif re.search(r'(<h[1-6]|title=|<SectionHeading|>)\s*["\']?\s*\d+\.\s*', line):
                all_findings.append({
                    'category': 'Topic numbering',
                    'file': rel_path,
                    'line': idx,
                    'text': line.strip()
                })
            elif re.search(r'SECTION\s*\d+', line):
                all_findings.append({
                    'category': 'Other document-structure label',
                    'file': rel_path,
                    'line': idx,
                    'text': line.strip()
                })

print(f"Total findings: {len(all_findings)}")
for f in all_findings:
    print(f"[{f['category']}] in {f['file']}:{f['line']}")
    print(f"   Line: {f['text']}\n")
