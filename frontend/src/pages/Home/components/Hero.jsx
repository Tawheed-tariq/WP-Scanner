import {Link} from 'react-router-dom'
export default function Hero(){
    return(
        <>
            <div className={`w-full min-h-[100vh] hero px-[20px] mt-[70px] lg:px-[100px] xl:px-[200px] flex flex-col gap-[40px] md:gap-[10px] md:flex-row items-center justify-center md:justify-between`}>
                <div className="text-txt max-w-[500px] lg:max-w-[620px] xl:max-w-[700px]">
                    <h1 className="text-[34px] sm:text-[44px] md:text-[60px] font-extrabold md:w-[600px]">Website Vulnerability Scanner</h1>

                    <p className={`text-[14px] sm:text-[16px] md:text-[18px] mt-[10px]`}>The Website Vulnerability Scanner is a highly-accurate vulnerability  
                        scanning solution, battle-tested in real life penetration testing  engagements.
                    </p>

                    <p className={`text-[14px] sm:text-[16px] md:text-[18px] my-[25px]`}>Designed to be both powerful and easy to use, the scanner accommodates  
                        the needs of both security teams and application security professionals.
                    </p>

                    <Link to={`/signup`}>
                        <button className="bg-home-accent rounded-xl text-text text-[16px] sm:text-[18px] md:text-[20px] font-medium flex items-center gap-[10px] p-[15px] ">
                            Create Account
                            <img className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] " src="add.png" alt="" />
                        </button>
                    </Link>
                </div>
                <img className={`w-[700px] aspect-square`} src="scanner.png" alt="" />
            </div>
        </>
    )
}