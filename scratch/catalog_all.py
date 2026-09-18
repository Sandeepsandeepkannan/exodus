import glob, re, os

# Target files
target_files = [
    ('components/Hero.tsx', 'Home Hero Component'),
    ('app/page.tsx', 'Home Page Content'),
    ('app/about/page.tsx', 'About Us Page'),
    ('app/products/page.tsx', 'Products Page'),
    ('app/about-human-hair/page.tsx', 'About Human Hair Page'),
    ('app/cranial-prosthesis/page.tsx', 'Cranial Prosthesis / Wig Bank Page'),
    ('app/contact/page.tsx', 'Contact Page'),
    ('components/SectionHeading.tsx', 'Shared Section Heading Component'),
    ('components/ProductCard.tsx', 'Shared Product Card Component'),
    ('components/ProductModal.tsx', 'Shared Product Modal Component'),
    ('components/CTASection.tsx', 'Shared CTA Section Component'),
    ('components/ContactForm.tsx', 'Shared Contact Form Component'),
    ('components/WhyChooseUs.tsx', 'Shared Why Choose Us Component'),
]

# Let's write a categorizer
def inspect_file(filepath, label):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        lines = content.splitlines()
    
    items = []
    for i, line in enumerate(lines, 1):
        matches = re.findall(r'(?:(?:sm|md|lg|xl|2xl):)?text-(?:xs|sm|base|lg|[2-9]?xl|\[\d+px\])', line)
        if matches:
            items.append((i, line.strip(), matches))
    return items

total_count = 0
for fp, name in target_files:
    items = inspect_file(fp, name)
    total_count += len(items)
    print(f"{name} ({fp}): {len(items)} typography lines")

print(f"\nTotal typography lines: {total_count}")
