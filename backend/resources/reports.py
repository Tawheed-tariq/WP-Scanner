from flask.views import MethodView
from flask import make_response
import uuid
from flask_smorest import Blueprint
from db import get_reports, get_pdf_report, get_scan_info

blp = Blueprint('reports', __name__, description='Operations on reports')

@blp.route('/reports')
class ListReports(MethodView):
    def get(self):
        report_data = get_reports()
        return report_data

@blp.route('/report/<scan_id>')
class GetReport(MethodView):
    def get(self, scan_id):
        scan_info = get_scan_info(scan_id)
        pdf_data = get_pdf_report(scan_id)
        if pdf_data and scan_info:
            response = make_response(pdf_data)
            response.headers['Content-Type'] = 'application/pdf'
            response.headers['Content-Disposition'] = f'attachment; filename=report_{scan_info["name"]}.pdf'
            return response
        else:
            return {'error': 'Report not found or scan info missing'}, 404
