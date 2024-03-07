import DashboardLayout from "../../../components/DashboardLayout";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function ScanHome(){
    return(
        <DashboardLayout title={`Scans`}>
            {/* New Scan  */}
            <div className={` py-[20px] md:py-[50px] px-[10px] flex justify-end`}>
                <Link className={`bg-secondary boxShadow rounded-xl`} to={`/scans/scan-templates`}>
                    <button className={`px-[20px] flex gap-[10px] items-center text-[18px] md:text-[22px] py-[10px]`}>
                        <TbActivityHeartbeat color={`#226F78`} size={`20`} md:size={`30`}/>
                        New Scan
                    </button>
                </Link>
            </div>

            {/* Scan results table*/}
            <div className={`w-full py-[5px] flex flex-col gap-[15px] px-[20px]`}>
                <div className={`w-full flex justify-between  px-[20px] py-[10px] rounded-2xl boxShadow bg-secondary-50`}>
                    <p className={`text-text font-medium text-[16px] md:text-[22px]`}>Scans</p>
                    <p className={`text-text font-medium text-[16px] md:text-[22px]`}>Status</p>
                    <p className={`text-text font-medium text-[16px] md:text-[22px]`}>Target</p>
                    <p className={`text-text font-medium text-[16px] md:text-[22px]`}>Date</p>
                </div>
            {/* data rows */}
                <div className={`w-full flex gap-[10px] justify-between border-text border-[1px] px-[20px] py-[10px]`}>
                    <p className={`text-accent text-[14px] md:text-[20px]`}>Active Scan</p>
                    <p className={`text-text text-[14px] md:text-[20px]`}>Completed</p>
                    <p className={`text-accent text-[14px] md:text-[20px]`}>127.0.0.1</p>
                    <p className={`text-text text-[14px] md:text-[20px]`}>24-01-2024</p>
                </div>

                <div className={`w-full flex gap-[10px] justify-between border-text border-[1px] px-[20px] py-[10px]`}>
                    <p className={`text-accent text-[14px] md:text-[20px]`}>Active Scan</p>
                    <p className={`text-text text-[14px] md:text-[20px]`}>Completed</p>
                    <p className={`text-accent text-[14px] md:text-[20px]`}>127.0.0.1</p>
                    <p className={`text-text text-[14px] md:text-[20px]`}>24-01-2024</p>
                </div>

                <div className={`w-full flex gap-[10px] justify-between border-text border-[1px] px-[20px] py-[10px]`}>
                    <p className={`text-accent text-[14px] md:text-[20px]`}>Active Scan</p>
                    <p className={`text-text text-[14px] md:text-[20px]`}>Completed</p>
                    <p className={`text-accent text-[14px] md:text-[20px]`}>127.0.0.1</p>
                    <p className={`text-text text-[14px] md:text-[20px]`}>24-01-2024</p>
                </div>
            </div>
        </DashboardLayout>
    )
}