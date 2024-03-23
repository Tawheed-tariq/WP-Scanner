import {Link} from 'react-router-dom'
export default function Hero(){
    const listItems = [
        "Accommodates diverse needs of security teams ",
        "Robust capabilities for comprehensive scans",
        "Thorough vulnerability assessments"
    ]
    return(
        <>
            <div className={`hero w-full h-[110vh] mt-[70px]  px-[20px] lg:px-[100px] xl:px-[200px] flex flex-col gap-[40px] md:gap-[10px] md:flex-row items-center justify-center md:justify-between pb-[150px]`}>
                <div className="text-txt max-w-[500px] lg:max-w-[620px] xl:max-w-[700px]">
                    <h1 className="text-[24px] text-[#FEFD45] font-bold ">Website Vulnerability Scanner</h1>
                    <h1 className="text-[30px] sm:text-[36px] md:text-[50px] text-[#F8FCFB] font-extrabold md:w-[600px]">Precision Scanning for Effective Pen Testing</h1>

                    <p className={`text-[14px] sm:text-[16px] text-[#F8FCFB] md:text-[18px] my-[10px]`}>
                        Powerful and user-friendly, our scanner meets the needs of security teams and app security pros
                    </p>

                    <ul>
                        {
                            listItems.map((item, index) => (
                                <li key={index} className='flex items-center gap-[10px]'>
                                    <img src="check-icon.png" alt="" />
                                    <p className={`text-[14px] sm:text-[16px] text-[#F8FCFB] md:text-[18px]`}>{item}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <Link to={`/signup`}>
                        <button className="bg-[#FEFD45] rounded-xl text-text text-[16px] sm:text-[18px] md:text-[20px] font-medium flex items-center gap-[10px] p-[15px] my-[20px]">
                            Create Account
                            <img className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] " src="add.png" alt="" />
                        </button>
                    </Link>
                </div>
                <img className={`w-[600px] h-[600px] aspect-square`} src="scanner.png" alt="" />
            </div>
        </>
    )
}