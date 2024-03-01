export default function Working(){

    const elements = [
        {
            id: 1,
            title : 'Active Scan',
            desc : 'While the Spider is running, another component of the Website Scanner takes each previously discovered Injection Point and injects multiple payloads to detect vulnerabilities.',
            url : 'active-scan.svg'
        },
        {
            id: 2,
            title : 'Subdomain Finder',
            desc : 'While the Spider is running, another component of the Website Scanner takes each previously discovered Injection Point and injects multiple payloads to detect vulnerabilities.',
            url : 'sub-domain.svg'
        },
        {
            id: 3,
            title : 'Password Attack',
            desc : 'While the Spider is running, another component of the Website Scanner takes each previously discovered Injection Point and injects multiple payloads to detect vulnerabilities.',
            url : 'password-attack.svg'
        },
        {
            id: 4,
            title : 'Vulnerability Scan',
            desc : 'While the Spider is running, another component of the Website Scanner takes each previously discovered Injection Point and injects multiple payloads to detect vulnerabilities.',
            url : 'vuln.svg'
        },
        {
            id: 5,
            title : "Way BAck Url's",
            desc : 'While the Spider is running, another component of the Website Scanner takes each previously discovered Injection Point and injects multiple payloads to detect vulnerabilities.',
            url : 'way-back.svg'
        }
    ]

    return(
        <div id="work" className={`bg-home-bg w-full px-[250px] text-txt flex flex-col items-center justify-center pt-[200px]`}>
            <div className={`w-[1200px]`}>
                <h1 className="text-[58px] mx-auto font-extrabold w-[1000px]">How does the Website Vulnerability scanner work</h1>

                <p className={`text-[20px] mt-[10px]`}>
                    The Website Vulnerability Scanner is a DAST (Dynamic Application  Security Testing) 
                    tool which tries to discover vulnerabilities like XSS,  SQL injection, HTTP Prototype 
                    Pollution, Directory Traversal, and more  in running web applications.
                </p>

                <p className={`text-[20px] my-[25px]`}>
                    The scanner interacts with the target application by sending numerous 
                    HTTP requests with specific payloads. If the application is vulnerable,  
                    these payloads will determine the code to behave abnormally, informing  
                    the scanner that a vulnerability exists.
                </p>
            </div>

            <div className={`w-full flex flex-wrap justify-center gap-[30px] py-[100px]`}>
                {
                    elements.map((ele) => (
                        <div key={ele.id} className={`py-[20px]  scan border-l-[5px] border-t-[5px] border-home-primary px-[30px] rounded-3xl bg-home-secondary max-w-[600px]`}>
                            <div className="flex items-center gap-[30px] mb-[20px]">
                                <img className={`w-[100px] h-[100px]`} src={ele.url} alt="" />
                                <h1 className="text-[40px] font-bold ">{ele.title}</h1>
                            </div>
                            <p className={`text-[16px]`}>
                                {ele.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

