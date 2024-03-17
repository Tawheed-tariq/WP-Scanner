from db import get_scan_results
from filter import parse_nmap_results, filter_whatweb_scan, parse_wp_results, find_vulnerabilities, find_users

# Assume 'scan_id' is known and corresponds to a record in your MongoDB
scan_id = '50d2980b-9190-4f32-9fe6-98a301e2cd5f'

def test_filters(scan_id):
    # Retrieve scan data from MongoDB
    scan_data = get_scan_results(scan_id)
    if not scan_data:
        print("Scan data not found for ID:", scan_id)
        return

    # Assuming your MongoDB data structure matches the expected format
    nmap_raw = scan_data.get('nmap_raw', '')
    whatweb_raw = scan_data.get('whatweb_raw', '')
    wpscan_raw = scan_data.get('wpscan_raw', '')

    # Apply filters
    parsed_nmap_results = parse_nmap_results(nmap_raw)
    filtered_whatweb_results = filter_whatweb_scan(whatweb_raw)
    parsed_wpscan_general = parse_wp_results(wpscan_raw)
    wpscan_vulnerabilities = find_vulnerabilities(wpscan_raw)
    wpscan_users = find_users(wpscan_raw)

    # Print results to see the output
    print("NMAP Results:", parsed_nmap_results)
    print("WhatWeb Results:", filtered_whatweb_results)
    print("WPScan General Info:", parsed_wpscan_general)
    print("WPScan Vulnerabilities:", wpscan_vulnerabilities)
    print("WPScan Users:", wpscan_users)

if __name__ == "__main__":
    test_filters(scan_id)