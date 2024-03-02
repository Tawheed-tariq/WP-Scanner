import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiScan2Line } from "react-icons/ri";
import { MdWifiFind } from "react-icons/md";


export default function DashboardLayout({children}){
    
    return(
        <>
            <TopNav/>
            <div className="flex w-[100vw]">
                <SideNav/>
                <div className="w-full overflow-y-auto overflow-x-hidden px-[100px] py-[50px] mt-[70px]">
                    {children}
                </div>
            </div>
            
            
        </>
    )
}

const TopNav = () => {
    return(
        <div className={`h-[70px] backdrop-blur-lg fixed z-[999] w-[100vw] bg-secondary-50 flex items-center`}>
            <h1 className="text-[35px] text-center w-[300px] font-semibold ">
                WPScans
            </h1>
            <div className={`w-full h-full flex items-center justify-between px-[100px]`}>
                <h1 className="text-[30px] font-medium ">
                    Dashboard
                </h1>

                {/* user icon */}
                <div className={`bg-primary cursor-pointer flex gap-[15px] items-center pl-[20px] pr-[10px] py-[10px] rounded-full`}>
                    <p>Tawheed</p>
                    <div className={`w-[30px] flex items-center justify-center h-[30px] bg-accent rounded-full`}>
                        <img className={`w-[15px] h-[15px]`} src="user.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const SideNav = () => {
    const sideNavLinks = [
        {
            id: 1,
            title : 'Dashboard',
            img : <MdDashboard color="#226F78" size={`25`} />
        },
        {
            id: 2,
            title : 'Scans',
            img : <RiScan2Line color="#226F78" size={`25`}/>
        },
        {
            id: 3,
            title : 'Findings',
            img : <MdWifiFind color="#226F78" size={`25`} />
        },
        {
            id: 4,
            title : 'Report',
            img : <TbReportAnalytics color="#226F78" size={`25`} />
        },
    
    ]
    return(
        <>
            <div className={`w-[300px] fixed mt-[70px] custom-height flex items-center flex-col  bg-secondary-50`}>
                <div className={`flex flex-col gap-[30px] py-[40px]`}>
                    {
                        sideNavLinks.map((ele) => (
                           <SideNavIcon
                                key={ele.id}
                                img={ele.img}
                                title={ele.title}
                           />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

const SideNavIcon = ({img, title}) => {
    return(
        <div className={`flex gap-[10px] py-[10px] px-[30px] rounded-full bg-primary items-center`}>
            {img}
            <p className={`text-[22px]`}>{title}</p>
        </div>
    )
}