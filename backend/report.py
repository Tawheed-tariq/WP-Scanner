from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import io

def convert_scan_data_to_pdf(raw_data):
    buffer = io.BytesIO()
    p = canvas.Canvas(buffer, pagesize=letter)
    y_position = 750
    
    for scan_type, results in raw_data.items():
        p.drawString(80, y_position, f"{scan_type} Scan Results:\n")
        lines = results.split('\n')
        for line in lines:
            y_position -= 10
            if y_position < 50:
                p.showPage()
                y_position = 750
            p.drawString(80, y_position, line)
            if len(lines) > 1:  # Ensure spacing between sections if there's more than one line
                y_position -= 10
    
    p.save()
    buffer.seek(0)
    return buffer.getvalue()
