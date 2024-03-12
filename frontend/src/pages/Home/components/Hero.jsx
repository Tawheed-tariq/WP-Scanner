import {Link} from 'react-router-dom'
export default function Hero(){
    return(
        <>
            <div className={`w-full min-h-[100vh] hero px-[20px] mt-[70px] lg:px-[100px] xl:px-[200px] flex flex-col md:flex-row items-center justify-center md:justify-between`}>
                <div className="text-txt max-w-[500px] lg:max-w-[620px] xl:max-w-[700px]">
                    <h1 className="text-[64px] font-extrabold md:w-[600px]">Website Vulnerability Scanner</h1>

                    <p className={`text-[20px] mt-[10px]`}>The Website Vulnerability Scanner is a highly-accurate vulnerability  
                        scanning solution, battle-tested in real life penetration testing  engagements.
                    </p>

                    <p className={`text-[20px] my-[25px]`}>Designed to be both powerful and easy to use, the scanner accommodates  
                        the needs of both security teams and application security professionals.
                    </p>

                    <Link to={`/signup`}>
                        <button className="bg-home-accent rounded-xl text-text text-[24px] font-medium flex items-center gap-[10px] px-[15px] py-[15px] ">
                            Create Account
                            <img className="w-[20px] h-[20px] " src="add.png" alt="" />
                        </button>
                    </Link>
                </div>
                <img className={`w-[700px] aspect-square`} src="scanner.png" alt="" />
            </div>
        </>
    )
}