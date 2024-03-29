import subprocess
import re
import socket

def run_scan(command):
    try:
        result = subprocess.check_output(command, stderr=subprocess.STDOUT, universal_newlines=True)
        return result
    except subprocess.CalledProcessError as e:
        return f"Error running {command[0]}: {e.output}"
    
def resolve_domain_to_ip(domain):
    try:
        ip_address = socket.gethostbyname(domain)
        return ip_address
    except socket.gaierror:
        return None

def run_nmap_scan(target):
    ip = resolve_domain_to_ip(target)
    if ip is None:
        return "Unable to resolve domain to IP address."
    command = ['nmap', '-sV', ip, '-F', '-n', '-T4', '--min-rate', '1000']
    try:
        return run_scan(command)
    except subprocess.CalledProcessError as e:
        return f"Error running {command[0]}: {e.output}"

def run_whatweb_scan(target):
    command = ['whatweb', target]
    raw_result = run_scan(command)
    clean_result = re.sub(r'\033\[[0-9;]*[mK]', '', raw_result)
    return clean_result

def run_wpscan(target):
    command = ['wpscan', '--url', target, '--random-user-agent', '--enumerate', 'u,vp,vt', '--api-token', 'SYWmg4sM5UesbypI6U5J4gDkRubjHxMZdXL2mkWMDxU', '-t', '100']
    raw_result = run_scan(command)
    clean_result = re.sub(r'\033\[[0-9;]*[mK]', '', raw_result)
    return clean_result