import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiScan2Line } from "react-icons/ri";
import { MdWifiFind } from "react-icons/md";
import {Link, useLocation} from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
export default function DashboardLayout({title, children}){
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(prev => !prev)
    }
    return(
        <>
            <TopNav open={open} toggle={toggle} title={title}/>
            <div className="flex w-[100vw]">
                <SideNav open={open} />
                <div className="w-full overflow-y-auto md:ml-[200px] overflow-x-hidden px-[20px] md:px-[70px] py-[30px] mt-[70px]">
                    {children}
                </div>
            </div>
        </>
    )
}

const TopNav = ({title, toggle, open}) => {
    return(
        <div className={`h-[70px] backdrop-blur-lg fixed z-[999] w-[100vw] bg-secondary-50 flex items-center`}>
            <div className="pl-[15px] sm:pl-[30px] md:pl-[0px] md:min-w-[200px] flex justify-center">
                <h1 className="text-[20px] sm:text-[25px] hidden md:block md:text-[30px] text-center font-semibold ">
                    WPScans
                </h1>
                {!open ? <VscLayoutSidebarLeft onClick={toggle} className={`md:hidden`} color="#226F78" size={`25`} /> : <IoCloseCircleSharp onClick={toggle} className={`md:hidden`} color="#226F78" size={`25`}/>}
            </div>
            <div className={`w-full h-full flex items-center justify-between px-[20px] md:px-[70px]`}>
                <h1 className="sm:text-[20px] md:text-[30px] font-medium ">
                    {title}
                </h1>

                {/* user icon */}
                <div className={`bg-primary cursor-pointer flex gap-[10px] md:gap-[15px] items-center pl-[15px] md:pl-[20px] pr-[10px] py-[10px] rounded-full`}>
                    <p className="text-[12px] sm:text-[16px] md:text-[18px] ">Tawheed</p>
                    <div className={`w-[20px] md:w-[30px] flex items-center justify-center h-[20px] md:h-[30px] bg-accent rounded-full`}>
                        <FaUser size={`15`} color="#F8FCFB"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SideNav = ({open}) => {
    const sideNavLinks = [
        {
            id: 1,
            title : 'Dashboard',
            img : <MdDashboard color="#226F78" size={`20`} />,
            link : '/dashboard'
        },
        {
            id: 2,
            title : 'Scans',
            img : <RiScan2Line color="#226F78" size={`20`}/>,
            link : '/scans'
        },
        {
            id: 3,
            title : 'Findings',
            img : <MdWifiFind color="#226F78" size={`20`}/>,
            link : '/scan-results'
        },
        {
            id: 4,
            title : 'Report',
            img : <TbReportAnalytics color="#226F78" size={`20`} />,
            link : '/report'
        },
    
    ]
    const location = useLocation()
    const isActiveLink = (link) => {
        return location.pathname === link || location.pathname.startsWith(link)
    }
    return(
        <>
            <div className={`w-[220px] fixed mt-[70px] custom-height hidden md:flex items-center flex-col  bg-secondary-50`}>
                <div className={`flex flex-col gap-[20px] py-[40px]`}>
                    {
                        sideNavLinks.map((ele) => (
                           <Link to={ele.link} key={ele.id}>
                                <div className={`flex gap-[10px] py-[7px] px-[20px] rounded-full ${isActiveLink(ele.link) ? 'bg-primary' : ''} items-center`}>
                                    {ele.img}
                                    <p className={`text-[18px]`}>{ele.title}</p>
                                </div>
                           </Link>
                        ))
                    }
                </div>
            </div>


            <div className={`w-[200px] backdrop-blur-sm ${open ? '' : 'translate-x-[-250px]'} transition-all fixed mt-[70px] custom-height flex md:hidden items-center flex-col  bg-secondary-50`}>
                <div className={`flex flex-col gap-[20px] py-[20px]`}>
                    {
                        sideNavLinks.map((ele) => (
                           <Link to={ele.link} key={ele.id}>
                                <div className={`flex gap-[5px] py-[10px] px-[30px] rounded-full ${isActiveLink(ele.link) ? 'bg-primary' : ''} items-center`}>
                                    {ele.img}
                                    <p className={`text-[14px]`}>{ele.title}</p>
                                </div>
                           </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
