from flask.views import MethodView
from flask import request
import uuid
from scan_templates.active_scan import active_scan
from flask_smorest import Blueprint, abort
from db import get_processed_results, save_scan_data, get_saved_scans, delete_scan
from schemas import ActiveScanSchema, SaveScanSchema, DeleteScanSchema

blp = Blueprint('scans', __name__, description='Operations on scans')

@blp.route('/start-active-scan')
class ActiveScan(MethodView):
    @blp.arguments(ActiveScanSchema)
    def post(self, data):
        try:
            target = data['target']
            scan_id = str(uuid.uuid4())
            active_scan(target, scan_id)
            return {'scan_id': scan_id, 'status': 'pending'}, 202
        except Exception as e:
            abort(500, message=str(e))

@blp.route('/scan-results/<scan_id>')
class ScanResults(MethodView):
    def get(self, scan_id):
        processed_data = get_processed_results(scan_id)
        if not processed_data:
            return {'status' : 'pending'}
        
        return processed_data
    
@blp.route('/save-scan')
class SaveScan(MethodView):
    @blp.arguments(SaveScanSchema)
    def post(self):
        data = request.json
        scan_data = {
            'name' : data['name'],
            'target' : data['target'],
            'time' : data['Time'],
            'status' : data['status'],
            '_id' : data['scan_id']
        }
        save_scan_data(scan_data)
        return {'status' : 'done'}, 200

@blp.route('/all-scans')
class AllScans(MethodView):
    def get(self):
        all_saved_scans = get_saved_scans()
        return all_saved_scans

@blp.route('/delete-scan')
class DeleteScan(MethodView):
    @blp.arguments(DeleteScanSchema)
    def delete(self):
        data = request.get_json()
        scan_id = data['scan_id']
        try:
            delete_scan(scan_id)
            return {"message": "Scan deleted successfully"}, 200
        except Exception as e:
            return {"error": str(e)}, 500