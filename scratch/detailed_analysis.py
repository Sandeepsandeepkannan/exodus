import glob, re, os, json

files = [
    'components/Hero.tsx',
    'app/page.tsx',
    'app/about/page.tsx',
    'app/products/page.tsx',
    'app/about-human-hair/page.tsx',
    'app/cranial-prosthesis/page.tsx',
    'app/contact/page.tsx',
    'components/SectionHeading.tsx',
    'components/ProductCard.tsx',
    'components/ProductModal.tsx',
    'components/QuickInquiryModal.tsx',
    'components/CTASection.tsx',
    'components/ContactForm.tsx',
    'components/WhyChooseUs.tsx',
]

results = {
    'hero_main_headings': [],
    'page_headings': [],
    'section_headings': [],
    'subheadings': [],
    'body_text': [],
    'product_text': [],
    'labels_eyebrows_badges': [],
    'buttons_cta': [],
    'forms': [],
    'other_text': [],
    'navbar': ['components/Navbar.tsx (EXCLUDED - UNCHANGED)'],
    'footer': ['components/Footer.tsx (EXCLUDED - UNCHANGED)']
}

# Detailed analysis per file
print("Detailed inspection of all files:")
for f in files:
    with open(f, 'r', encoding='utf-8') as handle:
        lines = handle.readlines()
    print(f"\n--- {f} ---")
    for i, line in enumerate(lines, 1):
        if re.search(r'text-(?:xs|sm|base|lg|[2-9]?xl|\[\w+\])', line):
            print(f"{i:3d}: {line.strip()[:100]}")
