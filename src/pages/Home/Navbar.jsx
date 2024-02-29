export default function NavBar(){
    return(
        <>
            <nav className={`w-full h-[70px] bg-home-secondary px-[250px] flex items-center justify-between`}>
                <h1 className={`text-[32px] text-txt font-bold`}>WPScans</h1>
                <div className={`w-[150px] h-[50px] bg-primary rounded-full flex items-center justify-between px-[30px]`}>
                    <p className={`text-xl text-text font-medium`}>Login</p>
                    <img className={`w-[20px] h-[20px] `} src="user.png" alt="" />
                </div>
            </nav>
        </>
    )
}