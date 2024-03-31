from flask import Flask, request, jsonify, make_response
import threading
import uuid
from db import get_processed_results, save_processed_results, save_scan_results, save_scan_data, get_saved_scans, change_scan_status, save_pdf_report, get_reports, get_pdf_report, get_scan_info
from scan import run_nmap_scan, run_whatweb_scan, run_wpscan
from filter import parse_nmap_results, filter_whatweb_scan, parse_wp_results, find_vulnerabilities, find_users, find_themes
from flask_cors import CORS
from auth import auth
from report import convert_scan_data_to_pdf

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth, url_prefix='/auth')

def active_scan(target, scan_id):
    def run_scans():
        nmap_results = run_nmap_scan(target)
        whatweb_results = run_whatweb_scan(target)
        wpscan_results = run_wpscan(target)
        
        scan_data = {
            'nmap_raw': nmap_results,
            'whatweb_raw': whatweb_results,
            'wpscan_raw': wpscan_results
        }
        save_scan_results(scan_id, scan_data)
        
        processed_data = {
            'nmap': parse_nmap_results(nmap_results),
            'whatweb': filter_whatweb_scan(whatweb_results),
            'general': parse_wp_results(wpscan_results),
            'vulnerabilities': find_vulnerabilities(wpscan_results),
            'users': find_users(wpscan_results),
            'themes': find_themes(wpscan_results)
        }

        save_processed_results(scan_id, processed_data)
        change_scan_status(scan_id)

        scan_info = get_scan_info(scan_id)
        if scan_info:
            name = scan_info.get('name', 'Unknown Scan Name')
            target = scan_info.get('target', 'Unknown Target')
        else:
            name = "Unknown"
            target = "Unknown"

        pdf_data = convert_scan_data_to_pdf(scan_data, name, target)
        save_pdf_report(scan_id, pdf_data)

    thread = threading.Thread(target=run_scans)
    thread.start()

@app.route('/start-active-scan', methods=['POST'])
def start_active_scan():
    data = request.json
    target = data['target']
    scan_id = str(uuid.uuid4())
    active_scan(target, scan_id)
    return jsonify({'scan_id': scan_id, 'status': 'pending'}), 202

@app.route('/scan-results/<scan_id>', methods=['GET'])
def scan_results(scan_id):
    processed_data = get_processed_results(scan_id)
    if not processed_data:
        return jsonify({'error': 'Processed scan data not found'}), 404
        
    return jsonify(processed_data)

@app.route('/save-scan', methods=['POST'])
def save_scan():
    data = request.json
    scan_data = {
        'name' : data['name'],
        'target' : data['target'],
        'time' : data['Time'],
        'status' : data['status'],
        '_id' : data['scan_id']
    }
    save_scan_data(scan_data)
    return jsonify({'status' : 'done'}), 200

@app.route('/all-scans', methods=['GET'])
def get_all_scans():
    all_saved_scans = get_saved_scans()
    return jsonify(all_saved_scans)

@app.route('/reports', methods=['GET'])
def list_reports():
    report_ids = get_reports()
    return jsonify(report_ids)

@app.route('/report/<scan_id>', methods=['GET'])
def get_report(scan_id):
    pdf_data = get_pdf_report(scan_id)
    if pdf_data:
        response = make_response(pdf_data)
        response.headers['Content-Type'] = 'application/pdf'
        response.headers['Content-Disposition'] = f'attachment; filename=report_{scan_id}.pdf'
        return response
    else:
        return jsonify({'error': 'Report not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)