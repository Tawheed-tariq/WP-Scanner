import DashboardLayout from "../../../components/DashboardLayout";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function ScanHome(){
    const headings = ["Name", "schedule", "Last Scanned"]

    const rows = [
        {
            name : "1st scan",
            schedule : "on demand",
            status : "running",
            time : "today 12:00pm"
        },
        {
            name : "2nd scan",
            schedule : "on demand",
            status : "saved",
            time : "tommorow 12:00pm"
        }
    ]
    return(
        <DashboardLayout title={`Scans`}>
            {/* New Scan  */}
            <div className={` py-[20px] md:py-[50px] px-[10px] flex justify-end`}>
                <Link className={`bg-secondary boxShadow rounded-xl`} to={`/scans/scan-templates`}>
                    <button className={`px-[20px] flex gap-[10px] items-center text-[18px] md:text-[22px] py-[10px]`}>
                        <TbActivityHeartbeat color={`#226F78`} size={`30`}/>
                        New Scan
                    </button>
                </Link>
            </div>

            {/* Scan results table*/}
            <table className={`w-full border-collapse Table text-text border-text table-auto tab border-[1px]`}>
                <thead className="bg-primary">
                    <tr>
                        {
                            headings.map((ele, eleIndex) => (
                                <td key={eleIndex}>{ele}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

        </DashboardLayout>
    )
}