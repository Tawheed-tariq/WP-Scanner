import DashboardLayout from "../../../components/DashboardLayout";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowsRotate} from "react-icons/fa6";
import { GiSave } from "react-icons/gi";
import { MdOutlineDownloadDone} from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { headings } from "../../../constants/scanTable";
import axios from 'axios'
import {getAllScansRoute} from '../../../utils/apiRoutes'

export default function ScanHome(){
    
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [scanToDelete, setScanToDelete] = useState(null);
    const [popupText, setPopupText] = useState("")
    const [scans, setScans] = useState([])

    const navigate = useNavigate()
    
    const handleDeleteScan = (scan) => {
        setShowDeletePopup(true);
        setScanToDelete(scan);
    };

    const handleClosePopup = () => {
        setShowDeletePopup(false);
        setScanToDelete(null);
    };

    const getStatusIcon = (status) => {
        switch (status) {
          case "pending":
            return <RotatingIcon icon={<FaArrowsRotate size={20} color="#0BB226"/>} />;
          case "saved":
            return <GiSave size={20} color="#226F78"/>;
          case "completed":
            return <MdOutlineDownloadDone size={25} color="#226F78"/>;
          default:
            return null;
        }
    };

    // rotating the running icon infinitely until it becomes completed
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

    
    // using search bar to filter the table based on names
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleClick = (row) => {
        const data = {
            name : row.name,
            target : row.target
        }
        navigate(`/scans/scan-results/${row._id}`, {state : data})
    }

    useEffect(() => {
        const get_all_scans = async () => {
            try {
                const all_scans = await axios.get(getAllScansRoute)
                setScans(all_scans.data)
            } catch (error) {
                console.log("error in getting scans " + error.message)
            }
        }
        get_all_scans()
    }, [])
    
    const filteredRows = scans.filter(row => row.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const totalScans = scans.length
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
            <div className={`w-full flex items-center py-[20px]`}>
                <div className="flex items-center px-[20px] gap-[20px] border-text border-[1px]">
                    <input 
                        className={` bg-transparent focus:outline-none py-[5px]`} 
                        type="text" 
                        placeholder="Search Scans"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <IoMdSearch color="#040807" size={25}/>
                </div>
                <div className="px-[20px] text-sm text-gray-500">
                    Total Scans : {filteredRows.length} of {totalScans}
                </div>
            </div>

            {/* Scan results table*/}
            {totalScans > 0 ?
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
                            filteredRows.reverse().map((row) => (
                                <tr className="hover:bg-secondary-50" key={row._id}>
                                    <td 
                                        className="cursor-pointer font-semibold text-accent text-xl" 
                                        onClick={() => handleClick(row)}
                                    >
                                        {row.name}
                                    </td>

                                    <td 
                                        onClick={() => handleClick(row)}
                                        className="cursor-pointer"
                                    >
                                        {row.target}
                                    </td>

                                    <td className="flex items-center justify-between mr-[20px]">
                                        <div className="flex gap-[15px] items-center">
                                            {getStatusIcon(row.status)}
                                            {row.time}
                                        </div>
                                        <div className="flex gap-[40px] items-center">
                                            {row.status === 'completed' &&
                                                <ImCross 
                                                    className="cursor-pointer" 
                                                    color="#F90000"
                                                    onClick={() => handleDeleteScan(row)}
                                                />
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            :
                <></>
            }

            {/* Delete popup */}
            {showDeletePopup && (
                <div className="fixed inset-0 flex z-[999] items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg">
                        <p className="text-lg font-semibold mb-4">Do you want to delete the scan?</p>
                        <div className="flex justify-end">
                            <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded" onClick={handleClosePopup}>
                                Cancel
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleClosePopup}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}