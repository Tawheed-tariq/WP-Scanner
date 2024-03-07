export const resultToSend = [
    {
        id: 1,
        title : 'Active Scan Results',
        img : 'active.svg',
        res : '4 Ports Found',
        target : 'http://casetcollege.in',
        data : {
            headings : ["Port", "Protocol", "Satatus", "Service"],
            dataRows : [
                ["8080", "tcp", "Open", "Apache"],
                ["81", "tcp","Open", "Miscrosoft"],
            ]
        }
    },
    {
        id: 2,
        title : 'Sub Domain Finder results',
        img : 'subdom.svg',
        res : '16 subdomains found',
        target : '127.0.0.1',
        data : {
            headings : ["Sub Domain", "IP Address", "NetName"],
            dataRows : [
                ["Subdomain1.com", "127.0.0.1", "Miscrosoft"],
                ["Subdomain2.com", "192.168.91", "Miscrosoft"],
                ["Subdomain3.com", "192.168.78", "Google"],
            ]
        }
    },
    {
        id: 3,
        title : 'Vulnerability Scan results',
        img : 'vulnerability.svg',
        res : '8 vulnerabilities found',
        target : 'http://casetcollege.in',
        data : {
            headings : ["Plugin Name", "vulnerabilities"],
            dataRows : [
                [
                    "elementor", 
                    `Elementor Website Builder < 3.16.5 - Authenticated (Contributor+) Stored Cross-Site Scripting via get_inline_svg()
                    Version: 3.16.5
                    
                    Elementor Website Builder < 3.16.5 - Missing Authorization to Arbitrary Attachment Read
                    Version : 3.16.5`
                ],
                [
                    "element-skit-lite", 
                    `Elements kit Elementor addons < 2.9.2 - Missing Authorization
                    Version: 2.9.2

                    ElementsKit Lite < 3.0.4 - Unauthenticated Sensitive Information Exposure
                    Version: 3.0.4`
                ],
            ]
        }
    },
    {
        id: 4,
        res : 'Genral Info',
        target : '127.0.0.1',
        data : {
            headings : ["Title", "Country", "HTTP Server", "IP", "Email", "Bootstrap Version", "Jquery Version"],
            dataRows : [
                [' The Lead Generation Form Builder','UNITED STATES', 'Apache', '162.240.76.5', 'info@leadgenapp.io', '4.0.0,6.3.3', '1.11.0,3.6.0,3.7.0']
            ]
        }
    },
]


