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

for rel_path in files_to_check:
    full_path = os.path.join(code_dir, rel_path)
    if not os.path.exists(full_path):
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
        lines = content.splitlines()
        print(f"\n==================== {rel_path} ====================")
        for i, l in enumerate(lines, start=1):
            if any(tag in l for tag in ['<h1', '<h2', '<h3', '<h4', '<SectionHeading', 'eyebrow=', 'title=', 'subtitle=']) or 'PAGE' in l or 'SECTION' in l or 'Page' in l:
                print(f"L{i:03d}: {l.strip()}")
