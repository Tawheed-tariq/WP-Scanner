import { navLinks } from "../../../constants"
import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className={`w-full h-[70px] bg-home-secondary fixed z-[999] backdrop-blur-xl px-[20px] md:px-[100px] lg:px-[200px] flex items-center justify-between`}>
            <h1 className={`text-[20px] sm:text-[28px] md:text-[32px] text-txt font-bold`}>WPScans</h1>
            <div className={`sm:flex hidden items-center gap-[20px]`}>
                
                {
                    navLinks.map((ele) => (
                        <NavItem
                            key={ele.id} 
                            title={ele.title}
                            img={ele.img}
                            url={ele.url}
                        />
                    ))
                }
                
            </div>
            <Link to={`/login`}>
                <div className={`w-[110px] md:w-[150px] h-[40px] md:h-[50px] cursor-pointer bg-home-accent rounded-full flex items-center justify-between px-[20px] md:px-[30px]`}>
                    <p className={`text-[16px] sm:text-[18px] md:text-[20px] text-text font-medium`}>Login</p>
                    <img className={`w-[18px] h-[18px] md:w-[20px] md:h-[20px] `} src="user.png" alt="" />
                </div>
            </Link>
        </nav>
    )
}

const NavItem = ({url, img, title}) => {
    return(
        <div className="flex items-center gap-[10px]">
            <img className="w-[25px] h-[25px] " src={img} alt="" />
            <a href={`#${url}`} className={`text-xl text-txt font-medium`}>{title}</a>
        </div>
    )
}