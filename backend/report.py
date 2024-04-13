from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, Spacer, SimpleDocTemplate
import io
from datetime import datetime
from html import escape

def escape_html(text):
    """Escapes HTML characters in text to prevent syntax errors in report generation."""
    return escape(text)

def format_data_for_pdf(data):
    if isinstance(data, str):
        return [escape_html(line) for line in data.split('\n')]
    elif isinstance(data, dict):
        # Format the dictionary into a list of strings, escaping HTML as needed
        return [f"{key}: {escape_html(str(value))}" for key, value in data.items()]
    elif isinstance(data, list):
        # Handle list of lists or other structures if needed, escaping HTML in each element
        return [', '.join(escape_html(str(item)) for item in sublist) if isinstance(sublist, list) else escape_html(str(sublist)) for sublist in data]
    else:
        return [escape_html(str(data))]  # Default fallback

def convert_scan_data_to_pdf(raw_data):
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()
    Story = []
    
    report_title = "Scan Report"
    current_date = datetime.now().strftime("%Y-%m-%d")
    confidentiality_level = "Confidentiality Level: Confidential"

    Story.append(Paragraph(report_title, styles['Title']))
    Story.append(Spacer(1, 12))
    Story.append(Paragraph(f"Date: {current_date}", styles['Normal']))
    Story.append(Paragraph(confidentiality_level, styles['Normal']))
    Story.append(Spacer(1, 12))
    
    for scan_type, results in raw_data.items():
        Story.append(Paragraph(f"{scan_type.capitalize()} Scan Results", styles['Heading2']))
        formatted_lines = format_data_for_pdf(results)  # Use helper function to format data
        for line in formatted_lines:
            Story.append(Paragraph(line, styles['Normal']))
        Story.append(Spacer(1, 12))
    
    doc.build(Story)
    buffer.seek(0)
    return buffer.getvalue()