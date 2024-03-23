import DashboardLayout from "../../../components/DashboardLayout";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaArrowsRotate} from "react-icons/fa6";
import { GiSave } from "react-icons/gi";
import { MdOutlineDownloadDone} from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { headings, rows } from "../../../constants/scanTable";



export default function ScanHome(){
    
    const getStatusIcon = (status) => {
        switch (status) {
          case "running":
            return <RotatingIcon icon={<FaArrowsRotate size={20} color="#0BB226"/>} />;
          case "saved":
            return <GiSave size={20} color="#226F78"/>;
          case "completed":
            return <MdOutlineDownloadDone size={25} color="#226F78"/>;
          default:
            return null;
        }
    };

    const RotatingIcon = ({ icon }) => {
        const [rotation, setRotation] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 15);
          }, 100);
          return () => clearInterval(interval);
        }, []);
      
        return (
          <div className="rotating-icon" style={{ transform: `rotate(${rotation}deg)` }}>
            {icon}
          </div>
        );
      };
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
            {/* search bar  */}
            <div className={`w-full flex py-[20px]`}>
                <div className="flex items-center px-[20px] gap-[20px] border-text border-[1px]">
                    <input className={` bg-transparent focus:outline-none py-[5px]`} type="text" placeholder="Search Scans"/>
                    <IoMdSearch color="#040807" size={25}/>
                </div>
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
                                <td className="flex items-center justify-between mr-[20px]">
                                    <div className="flex gap-[15px] items-center">
                                        {getStatusIcon(row.status)}
                                        {row.time}
                                    </div>
                                    <div className="flex gap-[40px] items-center">
                                        {row.status == "saved" ? <RiArrowRightSFill className="rotate-infinit" color="#226F78" size={35}/> : ''}
                                        <ImCross color="#F90000"/>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </DashboardLayout>
    )
}