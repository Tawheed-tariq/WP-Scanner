export default function Working(){
    return(
        <>
            <div className={`bg-home-bg w-full text-txt flex flex-col items-center justify-center pt-[220px]`}>
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

                <div className={`w-full px-[200px] flex justify-center gap-[25px] py-[100px]`}>
                    <div className={`py-[20px]  scan border-l-[5px] border-t-[5px] border-home-primary px-[30px] rounded-3xl bg-home-secondary max-w-[500px]`}>
                        <div className="flex items-center gap-[30px] mb-[20px]">
                            <img src="Vector.png" alt="" />
                            <h1 className="text-[40px] font-bold ">Active Scan</h1>
                        </div>
                        <p className={`text-[16px]`}>
                            While the Spider is running, another component of the Website Scanner  
                            takes each previously discovered Injection Point and injects multiple  
                            payloads to detect vulnerabilities.
                        </p>
                    </div>

                    <div className={`py-[20px] border-l-[5px] border-t-[5px] border-home-primary px-[40px] rounded-3xl bg-home-secondary max-w-[500px]`}>
                        <div>
                            <img src="" alt="" />
                            <h1 className="text-[40px] font-bold ">Active Scan</h1>
                        </div>
                        <p className={`text-[16px]`}>
                            While the Spider is running, another component of the Website Scanner  
                            takes each previously discovered Injection Point and injects multiple  
                            payloads to detect vulnerabilities.
                        </p>
                    </div>


                    <div className={`py-[20px] border-l-[5px] border-t-[5px] border-home-primary px-[40px] rounded-3xl bg-home-secondary max-w-[500px]`}>
                        <div>
                            <img src="" alt="" />
                            <h1 className="text-[40px] font-bold ">Active Scan</h1>
                        </div>
                        <p className={`text-[16px]`}>
                            While the Spider is running, another component of the Website Scanner  
                            takes each previously discovered Injection Point and injects multiple  
                            payloads to detect vulnerabilities.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}