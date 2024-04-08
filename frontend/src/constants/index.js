export const properties = [
    {
        id : 1,
        title : 'No SetUp Required',
        desc : 'Being a cloud-based scanner, it just works out of the box. There’s no  need to install anything on your end to scan public-facing web  applications. Just create an account and start scanning.',
        img : 'nosetup.svg'
    },
    {
        id : 2,
        title : 'Scheduling',
        desc : 'It’s a really good idea to scan your web applications periodically since  new vulnerabilities appear every day. With WPScans, you can  schedule daily, weekly, monthly or quarterly scans against your web apps  and automatically get reports via email or other channels when risks  emerge.',
        img : 'schedule.svg'
    }
]


export const elements = [
    {
        id: 1,
        title: 'Active Scan',
        desc: 'Performs an intensive examination of the web application to identify live vulnerabilities and security loopholes.',
        url: 'active-scan.svg'
    },
    {
        id: 2,
        title: 'Subdomain Finder',
        desc: 'Discovers hidden subdomains to unveil a broader attack surface of the target web application.',
        url: 'sub-domain.svg'
    },
    {
        id: 3,
        title: 'Password Attack',
        desc: 'Simulates attack scenarios to test the strength of passwords and identify weak authentication mechanisms.',
        url: 'password-attack.svg'
    },
    {
        id: 4,
        title: 'Vulnerability Scan',
        desc: 'Scans and assesses the web application for known vulnerabilities, providing insights for mitigation.',
        url: 'vuln.svg'
    },
    {
        id: 5,
        title: "Wayback URLs",
        desc: 'Retrieves historical URLs of the web application from the Wayback Machine for comprehensive security analysis.',
        url: 'way-back.svg'
    }
]


export const signupInputs = [
    {
        id: 1,
        icon : 'user.png',
        placeholder : 'Username',
        type : 'text',
        name : 'username'
    },
    {
        id: 2,
        icon : 'mail.png',
        placeholder : 'Email',
        type : 'email',
        name : 'email'
    },
    {
        id: 3,
        icon : 'paasword.png',
        placeholder : 'Password',
        type : 'password',
        name : 'password'
    },
    {
        id: 4,
        icon : 'paasword.png',
        placeholder : 'Confirm Password',
        type : 'password',
        name : 'confirmPassword'
    }
]


export const loginInputs = [
    {
        id: 1,
        icon : 'user.png',
        placeholder : 'Username',
        type : 'username',
        name : 'username'
    },
    {
        id: 2,
        icon : 'paasword.png',
        placeholder : 'Password',
        type : 'password',
        name : 'password'
    }
]


export const RecommendedTools = [
    {
        id : 1,
        title : 'Active Scan',
        url: '/scans/new-scan',
        isReady : true
    },
    {
        id : 2,
        title : 'Subdomain Finder',
        url: '/scans/new-scan',
        isReady : false
    },
    {
        id : 3,
        title : 'Vulnerability Scan',
        url: '/scans/new-scan',
        isReady : false
    },
    {
        id : 4,
        title : 'Password Attack',
        url: '/scans/new-scan',
        isReady : false
    }
]
