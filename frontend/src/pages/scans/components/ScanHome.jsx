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
            time : "11-12-2003 1:09pm"
        },
        {
            name : "3rd scan",
            schedule : "on demand",
            status : "completed",
            time : "12-02-2024 8:57pm"
        },
        {
            name : "4th scan",
            schedule : "on demand",
            status : "completed",
            time : "12-02-2024 2:03pm"
        }
    ]
    return(
        <DashboardLayout title={`Scans`}>
            {/* New Scan  */}
            <div className={` py-[20px] border-b-2 border-accent md:py-[40px] px-[10px] flex justify-end mb-[20px]`}>
                <Link className={`bg-secondary boxShadow rounded-xl`} to={`/scans/scan-templates`}>
                    <button className={`px-[20px] flex gap-[10px] items-center text-[18px] md:text-[22px] py-[10px]`}>
                        <TbActivityHeartbeat color={`#226F78`} size={`30`}/>
                        New Scan
                    </button>
                </Link>
            </div>

            <div className={`w-full  py-[20px]`}>
                <input className={`px-[10px] bg-transparent border-text border-[1px] focus:outline-none py-[5px]`} type="text" placeholder="Search Scans"/>
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
                    {
                        rows.map((row,index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.schedule}</td>
                                <td>
                                    {row.time}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </DashboardLayout>
    )
}