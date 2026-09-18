import glob, re, os

target_files = [
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
    'components/CTASection.tsx',
    'components/ContactForm.tsx',
    'components/WhyChooseUs.tsx',
]

def analyze_all():
    all_records = []
    
    for filepath in target_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        for line_idx, line in enumerate(lines, 1):
            # Check for font size classes
            # text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl, text-7xl, text-[...]
            # including responsive sm:text-*, md:text-*, lg:text-*, xl:text-*
            text_classes = re.findall(r'(?:(?:sm|md|lg|xl|2xl):)?text-(?:xs|sm|base|lg|[2-9]?xl|\[\d+px\])', line)
            if not text_classes:
                continue
            
            clean_line = line.strip()
            all_records.append({
                'file': filepath,
                'line_num': line_idx,
                'line_content': clean_line,
                'classes': text_classes
            })
            
    print(f"Total lines with typography classes across components & pages (excluding Navbar/Footer): {len(all_records)}")
    return all_records

if __name__ == '__main__':
    analyze_all()
