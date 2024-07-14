import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiScan2Line } from "react-icons/ri";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardLayout({title, children}){
    const [open, setOpen] = useState(false)
    const [showDeletePopup, setShowlogoutPopup] = useState(false);
    const [currUsr, setCurrUsr] = useState('')
    const navigate = useNavigate()
    
    const toggle = () => {
        setOpen(prev => !prev)
    }

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }


    useEffect(() => {
        const getUser = async () => {
            try {
                if(!localStorage.getItem('wp-scan-user')){
                    navigate('/login')
                }
                else{
                    setCurrUsr(
                        await JSON.parse(localStorage.getItem("wp-scan-user"))
                    )
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getUser()
    }, [])
    return(
        // <w-full md:w-[calc(100%-256px)] md:ml-64 >
        <>
            <SideNav open={open} />
            
            <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main ">
                <TopNav 
                    open={open} 
                    toggle={toggle} 
                    title={title}
                    setShowlogoutPopup={setShowlogoutPopup}
                    currUsr={currUsr}
                />
                <div className="w-full overflow-y-auto md:ml-[200px] overflow-x-hidden px-[20px] md:px-[70px] py-[30px]">
                    {children}
                </div>
            </div>
            {/* logout popup */}
            {showDeletePopup && (
                <div className="fixed inset-0 flex items-center z-[999] justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg">
                        <p className="text-lg font-semibold mb-4">Do you want to Logout</p>
                        <div className="flex justify-end">
                            <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded" onClick={() => setShowlogoutPopup(false)}>
                               No
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


// top nav 

const TopNav = ({title, toggle, open, setShowlogoutPopup,currUsr}) => {
    return(
        <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
                toggle 
            </button>
            {/* <h1 className="sm:text-[20px] md:text-[30px] font-medium ">
                   title
            </h1> */}

            <ul className="ml-auto flex items-center">
                {/* search bar  */}
                <li className="mr-1 dropdown">
                    <button type="button" className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600">
                        btn1
                    </button>
                    {/* search bar  */}
                    <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                        <form action="" className="p-4 border-b border-b-gray-100">
                            <div className="relative w-full">
                                <input type="text" className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500" placeholder="Search..."/>
                                <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-900"></i>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="dropdown">
                    <button type="button" className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600">
                        btn2
                    </button>
                </li>
                
                <li className="dropdown ml-3">
                    <button type="button" className="dropdown-toggle flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                                <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt=""/>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-2 md:block text-left">
                            <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>                
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                        <li>
                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profile</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Settings</a>
                        </li>
                        <li>
                            <form method="POST" action="">
                                <a role="menuitem" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                                    // onclick="event.preventDefault();this.closest('form').submit();"
                                    >
                                    Log Out
                                </a>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}


// side nav 
const SideNav = ({open}) => {
    const TopLinks = [
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
            title : 'New Scan',
            img : <TbReportAnalytics color="#226F78" size={`20`} />,
            link : '/report'
        },
        {
            id: 3,
            title : 'Report',
            img : <TbReportAnalytics color="#226F78" size={`20`} />,
            link : '/report'
        }
    
    ]
    const bottomLinks = [
        {
            id: 1,
            title : 'Profile',
            img : <TbReportAnalytics color="#226F78" size={`20`} />,
            link : '/profile'
        },
        {
            id: 2,
            title : 'Setting',
            img : <TbReportAnalytics color="#226F78" size={`20`} />,
            link : '/setting'
        }
    ]
    const location = useLocation()
    const isActiveLink = (link) => {
        return location.pathname === link || location.pathname.startsWith(link)
    }
    return(
        <>
            <div className={`w-64 fixed h-full hidden md:flex items-center justify-between flex-col shadow-lg shadow-black  bg-white`}>
                <div className={`flex flex-col gap-[20px] mt-20 pb-10 w-full`}>
                    {
                        TopLinks.map((ele) => (
                           <Link to={ele.link} key={ele.id}>
                                <div className={`flex gap-[10px] py-3 px-[20px] ${isActiveLink(ele.link) ? 'bg-newprimary border-r-2 border-blue-500 text-accent' : ''} items-center`}>
                                    {ele.img}
                                    <p className={`text-sm`}>{ele.title}</p>
                                </div>
                           </Link>
                        ))
                    }
                </div>
                <div className={`flex flex-col gap-[20px] py-10 w-full`}>
                    {
                        bottomLinks.map((ele) => (
                           <Link to={ele.link} key={ele.id}>
                                <div className={`flex gap-[10px] py-3 px-[20px] ${isActiveLink(ele.link) ? 'bg-newprimary border-r-2 border-blue-500 text-accent' : ''} items-center`}>
                                    {ele.img}
                                    <p className={`text-sm`}>{ele.title}</p>
                                </div>
                           </Link>
                        ))
                    }
                </div>
            </div>


            <div className={`w-[200px] backdrop-blur-sm ${open ? '' : 'translate-x-[-250px]'} transition-all fixed mt-[70px] custom-height flex md:hidden items-center flex-col  bg-secondary-50`}>
                <div className={`flex flex-col gap-[20px] py-[20px]`}>
                    {
                        TopLinks.map((ele) => (
                           <Link to={ele.link} key={ele.id}>
                                <div className={`flex gap-[5px] py-[10px] px-[30px] rounded-full ${isActiveLink(ele.link) ? 'bg-primary' : ''} items-center`}>
                                    {ele.img}
                                    <p className={`text-[14px]`}>{ele.title}</p>
                                </div>
                           </Link>
                        ))
                    }
                </div>
                <div className={`flex flex-col gap-[20px] py-[20px]`}>
                    {
                        bottomLinks.map((ele) => (
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
