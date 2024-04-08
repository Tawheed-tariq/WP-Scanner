from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, Spacer, SimpleDocTemplate
import io
from datetime import datetime

def convert_scan_data_to_pdf(raw_data):
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()
    Story = []
    
    # "Scan Report" Title and Date without unnecessary PageBreaks
    report_title = "Scan Report"
    current_date = datetime.now().strftime("%Y-%m-%d")
    confidentiality_level = "Confidentiality Level: Confidential"

    Story.append(Paragraph(report_title, styles['Title']))
    Story.append(Spacer(1, 12))
    Story.append(Paragraph(f"Date: {current_date}", styles['Normal']))
    Story.append(Paragraph(confidentiality_level, styles['Normal']))
    Story.append(Spacer(1, 12))
    
    # Inserting Scan Results directly after the report info without a PageBreak
    for scan_type, results in raw_data.items():
        Story.append(Paragraph(f"{scan_type} Scan Results", styles['Heading2']))
        lines = results.split('\n')
        for line in lines:
            Story.append(Paragraph(line, styles['Normal']))
        Story.append(Spacer(1, 12))  # Spacing after each section
    
    doc.build(Story)
    buffer.seek(0)
    return buffer.getvalue()
