export default function FormLayout({children}){
    return(
        <div className={`flex justify-center items-center h-[100vh]`}>
            <div className={`flex flex-col w-full justify-center items-center max-w-[900px] bg-secondary-50 px-[40px] pt-[30px] pb-[50px] rounded-3xl`}>
                <h1 className="text-[40px] text-text font-bold">WPScans</h1>

                <p className={`text-[20px] text-text mt-[10px]`}>
                    Sign up to access our WordPress Scanner, a powerful tool 
                    for detecting website vulnerabilities. Easily identify and 
                    mitigate security risks to fortify your online presence.
                </p>

                <hr className={`w-full border-text mt-[10px] mb-[40px]`} />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}