import re

files = [
    'app/products/page.tsx',
    'app/about/page.tsx',
    'app/about-human-hair/page.tsx',
    'app/cranial-prosthesis/page.tsx',
    'app/contact/page.tsx'
]

for f in files:
    content = open(f, 'r', encoding='utf-8').read()
    m = re.search(r'<h1[^>]*className="([^"]+)"[^>]*>\s*([^<\n]+)', content)
    if m:
        print(f"{f:32s} -> {m.group(2).strip():35s} | Class: {m.group(1)}")
