import os
from pypdf import PdfReader

def extract_text_from_pdf(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return f"Error reading {pdf_path}: {e}"

base_dir = os.getcwd()
assets_dir = os.path.join(base_dir, 'assets')
output_file = "extracted_text.txt"

files = [
    "EuRoC_22_Post_flight_report_compressed.pdf",
    "EuRoC_technical_report___Darwin_II_compressed.pdf"
]

with open(output_file, "w", encoding="utf-8") as f:
    for filename in files:
        path = os.path.join(assets_dir, filename)
        f.write(f"--- START CONTENT: {filename} ---\n")
        print(f"Propcessing {filename}...")
        if os.path.exists(path):
            content = extract_text_from_pdf(path)
            f.write(content)
        else:
            f.write(f"File not found: {path}\n")
        f.write(f"\n--- END CONTENT: {filename} ---\n")

print(f"Extraction complete. Check {output_file}")
