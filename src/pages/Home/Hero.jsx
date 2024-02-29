export default function Hero(){
    return(
        <>
            <div className={`w-full h-[91vh] px-[250px] flex items-center justify-between`}>
                <div className="text-txt max-w-[700px]">
                    <h1 className="text-[64px] font-extrabold w-[600px]">Website Vulnerability Scanner</h1>

                    <p className={`text-[20px] mt-[10px]`}>The Website Vulnerability Scanner is a highly-accurate vulnerability  
                        scanning solution, battle-tested in real life penetration testing  engagements.
                    </p>

                    <p className={`text-[20px] my-[25px]`}>Designed to be both powerful and easy to use, the scanner accommodates  
                        the needs of both security teams and application security professionals.
                    </p>

                    <button className="bg-home-accent rounded-xl text-text text-[24px] font-medium flex items-center gap-[10px] px-[15px] py-[15px] ">
                        Create Account
                        <img className="w-[20px] h-[20px] " src="add.png" alt="" />
                    </button>
                </div>
                <div>
                    <img className={`max-w-[700px] max-h-[700px]`} src="scanner.png" alt="" />
                </div>
            </div>
        </>
    )
}