import re

def get_version(service_info):
    example_pattern = re.compile(r'\s{2,}')
    serviceArr = example_pattern.split(service_info)
    version = 'None' if len(serviceArr) < 2 else serviceArr[-1]
    service = serviceArr[0].rstrip('?')
    return [service, version]

def parse_nmap_results(nmap_output):
    port_pattern = re.compile(r'(\d+)\/(tcp|udp)\s+(open)\s+(.+)')
    results = {
        'res': '',
        'data': {
            'headings': ["Port", "Protocol", "Status", "Service", "Version"],
            'dataRows': []
        }
    }

    for line in nmap_output.split('\n'):
        match = port_pattern.match(line)
        if match:
            data = [int(match.group(1)), match.group(2), match.group(3)] + get_version(match.group(4))
            results['data']['dataRows'].append(data)

    results['res'] = f"{len(results['data']['dataRows'])} Ports Found"
    return results

def filter_whatweb_scan(scan_output):
    patterns = {
        'country': re.compile(r'Country\[(.*?)\]'),
        'server': re.compile(r'HTTPServer\[(.*?)\]'),
        'ip': re.compile(r'IP\[(.*?)\]'),
        'email': re.compile(r'Email\[(.*?)\]'),
        'bootstrap': re.compile(r'Bootstrap\[(.*?)\]'),
        'jquery': re.compile(r'JQuery\[(.*?)\]'),
    }
    result = {
        'res': 'General Info',
        'data': {
            'headings': ["Country", "HTTP Server", "IP", "Email", "Bootstrap Version", "JQuery Version"],
            'dataRows': []
        }
    }
    res = []
    for key, pattern in patterns.items():
        match = pattern.search(scan_output)
        res.append(match.group(1) if match else '')
    result['data']['dataRows'].append(res)
    return result

def parse_wp_results(wp_output):
    robots_txt_pattern = re.compile(r'robots.txt found: (.*)')
    xml_rpc_pattern = re.compile(r'XML-RPC seems to be enabled: (.*)')
    wordpress_readme_pattern = re.compile(r'WordPress readme found: (.*)')
    wordpress_version_pattern = re.compile(r'WordPress version (.+) identified')

    robots_match = robots_txt_pattern.search(wp_output)
    xml_match = xml_rpc_pattern.search(wp_output)
    wordpress_readme_match = wordpress_readme_pattern.search(wp_output)
    wordpress_version_match = wordpress_version_pattern.search(wp_output)

    findings = {
        'robots_txt': robots_match.group(1) if robots_match else 'Not Found',
        'xml_rpc': xml_match.group(1) if xml_match else 'Not Found',
        'wordpress_readme': wordpress_readme_match.group(1) if wordpress_readme_match else 'Not Found',
        'wordpress_version': wordpress_version_match.group(1) if wordpress_version_match else 'Not Identified'
    }
    
    return findings

def find_vulnerabilities(wp_output):
    vuln_pattern = re.compile(r'\[!\](.*?)(?=\n\n|\Z)', re.DOTALL)
    vulns = vuln_pattern.findall(wp_output)
    
    vulnerabilities = []
    for vuln in vulns:
        title_match = re.search(r'Title: (.+?)(?=\n|$)', vuln)
        fixed_in_match = re.search(r'Fixed in: (.+?)(?=\n|$)', vuln)
        
        vuln_info = {
            'title': title_match.group(1) if title_match else 'No title found',
            'fixed_in': fixed_in_match.group(1) if fixed_in_match else 'Not specified'
        }
        vulnerabilities.append(vuln_info)
    
    return vulnerabilities

def find_users(wp_output):
    user_pattern = re.compile(r'\[i\] User\(s\) Identified:\n\n((?:.+\n)+)', re.MULTILINE)
    users_match = user_pattern.search(wp_output)
    
    users = []
    if users_match:
        users_info = users_match.group(1)
        user_lines = users_info.strip().split('\n')
        for line in user_lines:
            user_name_match = re.search(r'\[\+\] (.+)', line)
            if user_name_match:
                users.append(user_name_match.group(1))
                
    return users