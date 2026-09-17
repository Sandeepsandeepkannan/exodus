import re
import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r"C:\Users\sande\OneDrive\Desktop\Rainbow-Media\Exodus-Website\Code\EXODUS WEBSITE CONTENTS IN ORDER SEP 26.docx"

def extract_text_from_docx(docx_file):
    with zipfile.ZipFile(docx_file) as z:
        xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    paragraphs = []
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    for p in tree.iterfind('.//w:p', ns):
        texts = [node.text for node in p.iterfind('.//w:t', ns) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    return paragraphs

raw_paragraphs = extract_text_from_docx(docx_path)
items = [(i+1, p.strip()) for i, p in enumerate(raw_paragraphs) if p.strip()]

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

file_contents = {}
for f in files_to_check:
    full_path = os.path.join(code_dir, f)
    if os.path.exists(full_path):
        with open(full_path, "r", encoding="utf-8") as fp:
            content = fp.read()
            # strip JSX tags: <...>
            stripped_content = re.sub(r'<[^>]+>', ' ', content)
            file_contents[f] = stripped_content

def normalize(s):
    s = s.replace('“', '"').replace('”', '"').replace('’', "'").replace('‘', "'")
    s = s.replace('–', '-').replace('—', '-').replace('…', '...')
    s = re.sub(r'[^\w\s]', ' ', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip().lower()

missing = []
found = []

for idx, text in items:
    norm_text = normalize(text)
    matched = False
    matched_file = None
    for fname, content in file_contents.items():
        norm_content = normalize(content)
        if norm_text in norm_content:
            matched = True
            matched_file = fname
            break
    
    if matched:
        found.append((idx, text, matched_file))
    else:
        missing.append((idx, text))

print(f"Total non-empty items: {len(items)}")
print(f"Matched: {len(found)}")
print(f"Missing: {len(missing)}")

if missing:
    print("\n--- REMAINING UNMATCHED ITEMS ---")
    for idx, text in missing:
        safe_text = text.encode('ascii', 'replace').decode('ascii')
        print(f"[{idx}] {safe_text}")
else:
    print("\nSUCCESS: 100% OF ALL 282 PARAGRAPHS AND ITEMS IN THE DOCX ARE VERIFIED AND PRESENT IN THE WEBSITE CODEBASE!")
