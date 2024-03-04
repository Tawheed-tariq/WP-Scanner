import { navLinks } from "../../../constants"
import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className={`w-full h-[70px] bg-home-secondary fixed z-[999] backdrop-blur-xl px-[250px] flex items-center justify-between`}>
            <h1 className={`text-[32px] text-txt font-bold`}>WPScans</h1>
            <div className={`flex items-center gap-[20px]`}>
                
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
                <div className={`w-[150px] h-[50px] cursor-pointer bg-home-accent rounded-full flex items-center justify-between px-[30px]`}>
                    <p className={`text-xl text-text font-medium`}>Login</p>
                    <img className={`w-[20px] h-[20px] `} src="user.png" alt="" />
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