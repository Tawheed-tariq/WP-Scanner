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
    }
]
