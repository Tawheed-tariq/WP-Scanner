import tldextract

def normalize_domain(target):
    """Extracts the primary domain using tldextract for handling complex TLDs."""
    extracted = tldextract.extract(target)
    # Rebuild the domain from its parts
    return f"{extracted.domain}.{extracted.suffix}"

# Use this normalize_domain in the same way as shown above

domain = normalize_domain("dpssrinagar.com")
print(domain)