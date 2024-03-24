from flask import Flask, request, jsonify
import threading
import uuid
from db import get_processed_results, save_processed_results
from scan import run_nmap_scan, run_whatweb_scan, run_wpscan
from filter import parse_nmap_results, filter_whatweb_scan, parse_wp_results, find_vulnerabilities, find_users, find_themes
from flask_cors import CORS
from auth import auth

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth, url_prefix='/auth')

def active_scan(target, scan_id):
    def run_scans():
        nmap_results = run_nmap_scan(target)
        whatweb_results = run_whatweb_scan(target)
        wpscan_results = run_wpscan(target)

        processed_data = {
            'nmap': parse_nmap_results(nmap_results),
            'whatweb': filter_whatweb_scan(whatweb_results),
            'general': parse_wp_results(wpscan_results),
            'vulnerabilities': find_vulnerabilities(wpscan_results),
            'users': find_users(wpscan_results),
            'themes': find_themes(wpscan_results)
        }

        save_processed_results(scan_id, processed_data)
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

if __name__ == '__main__':
    app.run(debug=True)