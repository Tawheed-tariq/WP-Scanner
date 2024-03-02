import { elements } from "../../constants"
export default function Working(){
    return(
        <div id="work" className={`bg-home-bg w-full working px-[250px] text-txt flex flex-col items-center justify-center pt-[200px]`}>
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
                        <Item 
                            key={ele.id}
                            title={ele.title}
                            url={ele.url}
                            desc={ele.desc}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const Item = ({title, url, desc}) => {
    return(
        <div className={`py-[20px]  scan border-l-[5px] border-t-[5px] border-home-primary px-[30px] rounded-3xl bg-home-secondary max-w-[600px]`}>
            <div className="flex items-center gap-[30px] mb-[20px]">
                <img className={`w-[100px] h-[100px]`} src={url} alt="" />
                <h1 className="text-[40px] font-bold ">{title}</h1>
            </div>
            <p className={`text-[16px]`}>
                {desc}
            </p>
        </div>
    )
}