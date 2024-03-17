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
    wordpress_version_pattern = re.compile(r'WordPress version (.+)')

    robots_match = robots_txt_pattern.search(wp_output)
    xml_match = xml_rpc_pattern.search(wp_output)
    wordpress_readme = wordpress_readme_pattern.search(wp_output)
    wordpress_version = wordpress_version_pattern.search(wp_output)

    matches = {
        'res' : '',
        'data' : {
            'headings' : ["Files", "Description"],
            'dataRows' : [
                ["Robots.txt", robots_match.group(1) if robots_match else 'None'],
                ['xml-RPC' , xml_match.group(1) if xml_match else 'None'],
                ['wordpress readme', wordpress_readme.group(1) if wordpress_readme else 'None'],
                ['wordpress version',  wordpress_version.group(1) if wordpress_version else 'NA'],
            ]
        }
    }
    matches['res'] = str(len(matches['data']['dataRows'])) + ' Intresting Enteries Found'
    return matches

def plugin_vulnerabilities(vulnerabilities):
    pattern = r'\[!\](.*?)References'
    vuln_arr = re.findall(pattern , vulnerabilities.group(0).strip(), re.DOTALL)
    num_of_vuln = len(vuln_arr)

    vulns = []
    for vuln in vuln_arr:
        title_pattern = re.compile(r'Title: (.*)')
        fixed_pattern = re.compile(r'Fixed in: (.*)')

        title = title_pattern.search(vuln)
        fixed = fixed_pattern.search(vuln)

        data = {
            'title' : title.group(1),
            'Version' : fixed.group(1)
        }
        vulns.append(data)
    return [num_of_vuln, vulns]



def find_vulnerabilities(wp_output):
    try:
        plugins_pattern = r'\[i\] Plugin\(s\) Identified:\n(.*?)(?:Interesting Finding\(s\):|\[i\])'
        plugins = re.search(plugins_pattern, wp_output, re.DOTALL)

        if(plugins):
            plugin_output = plugins.group(1).strip() 
            plugin_arr = re.findall(r'\[\+\]\s(.*?)\n\n',plugin_output , re.DOTALL) 
            output_data = {
                'res' : '',
                'data' : {
                    'headings' : ["Plugin","number", "vulnerabilities"],
                    'dataRows' : []
                }
            }
            number = int()
            for plugin in plugin_arr:
                plugin_name_pattern = r'(.*)'
                plugin_name = re.match(plugin_name_pattern, plugin).group(1)

                vuln_pattern = r'vulnerabilit.* identified:(.*)'
                vulnerabilities = re.search(vuln_pattern,plugin, re.DOTALL)

                if(vulnerabilities):
                    data = plugin_vulnerabilities(vulnerabilities)
                    output_data['data']['dataRows'].append([plugin_name, data[0], data[1]])
                    number += data[0]
            output_data['res'] = str(number) + ' Vulnerabilities Found'
            return output_data if len(output_data) > 0 else None
    except:
        print('error')

def find_users(wp_output):
    users_pattern = r'\[i\] User\(s\) Identified:\n(.*?)(?:\[\+\] WPScan DB API|\[\+\] Finished|$)'
    users = re.search(users_pattern, wp_output , re.DOTALL)

    response = {
        'res' : '',
        'data' : {
            'headings' : ["username"],
            'dataRows' : []
        }
    }
    if users:
        users_output = users.group(1).strip()
        pattern = r'\[\+\](.*)'
        users_arr = re.findall(pattern, users_output)

        for user in users_arr:
            response['data']['dataRows'].append([user])
        response['res'] = str(len(response['data']['dataRows'])) + ' User(s) Found'

        return response
                
    return users