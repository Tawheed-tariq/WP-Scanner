export const resultToSend = [
    {
        id: 1,
        title : 'Active Scan Results',
        img : 'active.svg',
        target : 'http://casetcollege.in',
        response :[
            {
                res : '14 Ports Found',
                data : {
                    headings : ["Port", "Protocol", "Status", "Service", "Version"],
                    dataRows : [
                        [21, 'tcp', 'open', 'ftp', 'Pure-FTPd'],
                        [22, 'tcp', 'open', 'ssh', 'OpenSSH 7.4 (protocol 2.0)'],
                        [26, 'tcp', 'open', 'smtp', 'Exim smtpd 4.96.2'],
                        [80, 'tcp', 'open', 'http', 'Apache httpd'],
                        [110, 'tcp', 'open', 'pop3', 'Dovecot pop3d'],
                        [143, 'tcp', 'open', 'imap', 'Dovecot imapd'],
                        [443, 'tcp', 'open', 'ssl/http', 'Apache httpd'],
                        [554, 'tcp', 'open', 'rtsp', 'None'],
                        [587, 'tcp', 'open', 'smtp', 'Exim smtpd 4.96.2'],
                        [993, 'tcp', 'open', 'imaps', 'None'],
                        [995, 'tcp', 'open', 'pop3s', 'None'],
                        [1723, 'tcp', 'open', 'tcpwrapped', 'None'],
                        [2222, 'tcp', 'open', 'ssh', 'OpenSSH 7.4 (protocol 2.0)'],
                        [3306, 'tcp', 'open', 'mysql', 'MySQL 5.7.23-23'],
                    ]
                }
            },
            {
                res : 'Genral Info',
                data : {
                    headings : ["Title", "Country", "HTTP Server", "IP", "Email", "Bootstrap Version", "Jquery Version"],
                    dataRows : [
                        [' The Lead Generation Form Builder','UNITED STATES', 'Apache', '162.240.76.5', 'info@leadgenapp.io, info@leadgen.io', '4.0.0,6.3.3', '1.11.0,3.6.0,3.7.0']
                    ]
                }
            },
            {
                res: '8 vulnerabilities found', 
                data: {
                    headings: ['Plugin','number', 'vulnerabilities'], 
                    dataRows: [
                        ['elementor',5, [
                                {
                                    title: 'Elementor Website Builder < 3.16.5 - Authenticated (Contributor+) Stored Cross-Site Scripting via get_inline_svg()', 
                                    Version: '3.16.5'
                                }, 
                                {
                                    title: 'Elementor Website Builder < 3.16.5 - Missing Authorization to Arbitrary Attachment Read', 
                                    Version: '3.16.5'
                                }, 
                                {
                                    title: 'Elementor < 3.18.2 - Contributor+ Arbitrary File Upload to RCE via Template Import', 
                                    Version: '3.18.2'
                                }, 
                                {
                                    title: 'Elementor < 3.19.1 - Authenticated(Contributor+) Arbitrary File Deletion and PHAR Deserialization', 
                                    Version: '3.19.1'
                                }, 
                                {
                                    title: 'Elementor Website Builder – More than Just a Page Builder < 3.19.0 - Authenticated (Contributor+) Stored Cross-Site Scripting via get_image_alt', 
                                    Version: '3.19.0'
                                }
                            ]
                        ], 
                        ['elementskit-lite', 2,
                            [
                                {
                                    title: 'Elements kit Elementor addons < 2.9.2 - Missing Authorization', 
                                    Version: '2.9.2'
                                }, 
                                {
                                    title: 'ElementsKit Lite < 3.0.4 - Unauthenticated Sensitive Information Exposure', 
                                    Version: '3.0.4'
                                }
                            ]
                        ], 
                        ['gs-logo-slider', 1,
                            [
                                {
                                    title: 'GS Logo Slider < 3.5.2 - Cross-Site Request Forgery', 
                                    Version: '3.5.2'
                                }
                            ]
                        ]
                    ]
                }
            },
            {
                res: '4 Interesting Enteries Found',
                data: {
                    headings: ['Enteries', 'Description'], 
                    dataRows: [
                        ['Robots.txt', 'https://enterprise.leadgenapp.io/robots.txt'], 
                        ['xml-RPC', 'https://enterprise.leadgenapp.io/xmlrpc.php'], 
                        ['wordpress readme', 'https://enterprise.leadgenapp.io/readme.html'], 
                        ['wordpress version', '6.4.3 identified (Latest, released on 2024-01-30).'],
                    ]
                }
            },
            {
                res: '2 User(s) Found', 
                data: {
                    headings: ['username'], 
                    dataRows: [
                        [' admin'], 
                        [' Shahid Shahmiri']
                    ]
                }
            }
        ]
    }
]


