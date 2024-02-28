export default function NavBar(){
    return(
        <>
            <nav className={`w-full h-[70px] bg-secondary-80 px-[100px] flex items-center justify-between`}>
                <h1 className={`text-[32px] font-bold`}>WPScans</h1>
                <div className={`w-[150px] h-[50px] bg-primary rounded-full flex items-center justify-between px-[30px]`}>
                    <p className={`text-xl font-medium`}>Login</p>
                    <img className={`w-[20px] h-[20px]`} src="user.png" alt="" />
                </div>
            </nav>
        </>
    )
}