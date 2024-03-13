from flask import Flask, request, jsonify
from scan import run_nmap_scan, run_whatweb_scan
import threading
from filter import parse_nmap_results, filter_whatweb_scan  
import uuid

app = Flask("__name___")

scans = {}

def active_scan(target, scan_id):
    def run_scans():
        nmap_results = run_nmap_scan(target)
        whatweb_results = run_whatweb_scan(target)

        parsed_nmap_results = parse_nmap_results(nmap_results)
        filtered_whatweb_results = filter_whatweb_scan(whatweb_results)

        scans[scan_id] = {
            'nmap': parsed_nmap_results,
            'whatweb': filtered_whatweb_results
        }

    thread = threading.Thread(target=run_scans)
    thread.start()

@app.route('/start-active-scan', methods=['POST'])
def start_active_scan():
    data = request.json
    target = data['target']
    scan_id = str(uuid.uuid4())
    scans[scan_id] = {'status': 'pending'}
    active_scan(target, scan_id)
    return jsonify({'scan_id': scan_id}), 202

@app.route('/scan-results/<scan_id>', methods=['GET'])
def scan_results(scan_id):
    scan = scans.get(scan_id)
    if not scan:
        return jsonify({'error': 'Scan not found'}), 404
    return jsonify(scan)

if __name__ == '__main__':
    app.run(debug=True)