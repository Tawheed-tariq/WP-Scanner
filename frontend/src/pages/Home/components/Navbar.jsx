import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className={`w-full h-[70px] bg-[#EEF0F2] fixed z-[999] backdrop-blur-xl px-[20px] md:px-[100px] lg:px-[200px] flex items-center justify-between`}>
            <h1 className={`text-[20px] sm:text-[28px] md:text-[32px] text-txt font-bold`}>WP-Scanner</h1>
            <Link to={`/login`}>
                <div className={`w-[100px] md:w-[130px] h-[40px] md:h-[50px] cursor-pointer bg-[#FEFD45] rounded-2xl flex items-center justify-between px-[20px]`}>
                    <p className={`text-[16px] sm:text-[18px] md:text-[20px] text-text font-medium`}>Login</p>
                    <img className={`w-[18px] h-[18px] md:w-[20px] md:h-[20px] `} src="user.png" alt="" />
                </div>
            </Link>
        </nav>
    )
}

