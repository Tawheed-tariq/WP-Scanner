import DashboardLayout from "../../components/DashboardLayout";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function Scans(){
    return(
        <DashboardLayout title={`Scans`}>
            {/* New Scan  */}
            <div className={`py-[50px] px-[10px] flex justify-end`}>
                <button className={`px-[20px] flex gap-[10px] items-center bg-secondary rounded-xl text-[22px] py-[10px]`}>
                    <TbActivityHeartbeat color={`#226F78`} size={`30`}/>
                    New Scan
                </button>
            </div>

            {/* Scan results */}
            <div className={`w-full py-[5px] px-[15px]`}>
                <table className={`w-full`}>
                    <thead>
                        <tr className="flex justify-between">
                            <th>Scans</th>
                            <th>Status</th>
                            <th>Target Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </DashboardLayout>
    )
}