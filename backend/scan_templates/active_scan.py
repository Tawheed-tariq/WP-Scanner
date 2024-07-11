import threading
from db import save_processed_results, save_scan_results, change_scan_status, save_pdf_report
from scan import run_nmap_scan, run_whatweb_scan, run_wpscan, find_subdomains
from filter import parse_nmap_results, filter_whatweb_scan, parse_wp_results, find_vulnerabilities, find_users, find_themes, filter_subdomains
from report import convert_scan_data_to_pdf

def active_scan(target, scan_id):
    def run_scans():
        nmap_results = run_nmap_scan(target)
        whatweb_results = run_whatweb_scan(target)
        wpscan_results = run_wpscan(target)
        subdomain_results = find_subdomains(target)
        
        scan_data = {
            'nmap_raw': nmap_results,
            'whatweb_raw': whatweb_results,
            'wpscan_raw': wpscan_results,
            'subdomain_raw': subdomain_results
        }
        save_scan_results(scan_id, scan_data)
        
        processed_data = {
            'nmap': parse_nmap_results(nmap_results),
            'whatweb': filter_whatweb_scan(whatweb_results),
            'general': parse_wp_results(wpscan_results),
            'vulnerabilities': find_vulnerabilities(wpscan_results),
            'users': find_users(wpscan_results),
            'themes': find_themes(wpscan_results),
            'subdomains': filter_subdomains(subdomain_results)
        }

        save_processed_results(scan_id, processed_data)
        
        change_scan_status(scan_id)
        pdf_data = convert_scan_data_to_pdf(scan_data)
        save_pdf_report(scan_id, pdf_data)

    thread = threading.Thread(target=run_scans)
    thread.start()