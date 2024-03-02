export default function DashboardLayout({children}){
    
    return(
        <>
            <TopNav/>
            <div className="flex w-[100vw]">
                <SideNav/>
                <div className="w-full bg-accent overflow-y-auto overflow-x-hidden px-[100px] py-[50px] mt-[70px]">
                    {children}
                </div>
            </div>
            
            
        </>
    )
}

const TopNav = () => {
    return(
        <div className={`h-[70px] fixed z-[999] w-[100vw] bg-secondary-50 flex items-center`}>
            <h1 className="text-[35px] text-center w-[300px] font-semibold ">
                WPScans
            </h1>
            <div className={`w-full h-full flex items-center justify-between px-[100px]`}>
                <h1 className="text-[30px] font-medium ">
                    Dashboard
                </h1>

                {/* user icon */}
                <div className={`bg-secondary-80 cursor-pointer flex gap-[15px] items-center pl-[20px] pr-[10px] py-[10px] rounded-full`}>
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
            img : ''
        },
        {
            id: 2,
            title : 'Scans',
            img : ''
        },
        {
            id: 3,
            title : 'Findings',
            img : ''
        },
        {
            id: 4,
            title : 'Report',
            img : ''
        },

    ]
    return(
        <>
            <div className={`w-[300px] mt-[70px] custom-height flex items-center flex-col gap-[25px] bg-secondary-50`}>
                {
                    sideNavLinks.map((ele) => (
                        <>
                        </>
                    ))
                }
            </div>
        </>
    )
}