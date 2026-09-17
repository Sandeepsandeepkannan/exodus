import zipfile
import xml.etree.ElementTree as ET

docx_path = r"C:\Users\sande\OneDrive\Desktop\Rainbow-Media\Exodus-Website\Code\EXODUS WEBSITE CONTENTS IN ORDER SEP 26.docx"

with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')
tree = ET.fromstring(xml_content)
paragraphs = []
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
for p in tree.iterfind('.//w:p', ns):
    texts = [node.text for node in p.iterfind('.//w:t', ns) if node.text]
    if texts:
        paragraphs.append(''.join(texts))

with open(r"C:\Users\sande\OneDrive\Desktop\Rainbow-Media\Exodus-Website\Code\scratch\exact_all_paragraphs.txt", "w", encoding="utf-8") as f:
    for i, p in enumerate(paragraphs):
        f.write(f"[{i+1}] {p}\n")

print(f"Wrote {len(paragraphs)} paragraphs to exact_all_paragraphs.txt")
