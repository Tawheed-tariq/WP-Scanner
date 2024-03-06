import {Link} from 'react-router-dom'
export default function Hero(){
    return(
        <>
            <div className={`w-full h-[100vh] hero px-[250px] flex items-center justify-between`}>
                <div className="text-txt max-w-[700px]">
                    <h1 className="text-[64px] font-extrabold w-[600px]">Website Vulnerability Scanner</h1>

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
                <div>
                    <img className={`max-w-[700px] relative z-[3] max-h-[700px]`} src="scanner.png" alt="" />
                    {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient"/>
                    <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-0 white__gradient"/>
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/> */}
                </div>
            </div>
        </>
    )
}