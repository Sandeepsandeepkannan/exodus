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

patterns = [
    (r'(Page\s*[-–—]\s*\d+[^<"\n]*)', 'Page label'),
    (r'(\bPAGE\s*[-–—]\s*\d+[^<"\n]*)', 'PAGE label'),
    (r'(SECTION\s*\d+)', 'SECTION label'),
    (r'(>\s*\d+\.\s*[^<\n]+)', 'Numbered heading/text in JSX'),
    (r'(title=["\']\d+\.[^"\']+)', 'Numbered title prop'),
]

results = []

for rel_path in files_to_check:
    full_path = os.path.join(code_dir, rel_path)
    if not os.path.exists(full_path):
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        for line_num, line in enumerate(lines, start=1):
            for pat, pat_type in patterns:
                matches = re.findall(pat, line)
                for m in matches:
                    results.append({
                        'file': rel_path,
                        'line': line_num,
                        'type': pat_type,
                        'matched': m.strip(),
                        'full_line': line.strip()
                    })

print(f"Total potential occurrences found: {len(results)}")
for r in results:
    print(f"[{r['file']}:{r['line']}] ({r['type']}) -> {r['matched']}")
    print(f"   Line: {r['full_line']}")
