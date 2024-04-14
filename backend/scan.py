import subprocess
import re
import socket
import tldextract

def run_scan(command, shell=False):
    try:
        result = subprocess.check_output(command, stderr=subprocess.STDOUT, shell=shell, universal_newlines=True)
        return result
    except subprocess.CalledProcessError as e:
        return f"Error running command: {e.output}"
    
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
    command = ['nmap', '-sV', ip, '-n', '-T4', '-F', '--min-rate', '1000']
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
    command = ['wpscan', '--url', target, '--random-user-agent', '--enumerate', 'u,vp,vt', '--api-token', 'pMSnMTtaJO2yOC6ERtHqps9qqpbJzVZEizjaVo4DKtY']
    #command = ['wpscan', '--url', target, '--random-user-agent', '-t', '100']

    raw_result = run_scan(command)
    clean_result = re.sub(r'\033\[[0-9;]*[mK]', '', raw_result)
    return clean_result

def find_subdomains(domain):
    extracted = tldextract.extract(domain)
    normalized_domain = f"{extracted.domain}.{extracted.suffix}" 
    find_command = f"assetfinder --subs-only {normalized_domain} | sort -u"
    subdomains = run_scan(find_command, shell=True).splitlines()
    alive_subdomains = []
    
    for subdomain in subdomains:
        if subdomain:
            httpx_command = f"echo {subdomain} | httpx -silent"
            result = run_scan(httpx_command, shell=True)
            if result.strip():
                alive_subdomains.append(subdomain)
    
    return alive_subdomains