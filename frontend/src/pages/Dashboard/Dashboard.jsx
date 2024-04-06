import DashboardLayout from "../../components/DashboardLayout";
import { HiCheckBadge } from "react-icons/hi2";
import { BsFillLightningChargeFill } from "react-icons/bs";
import {RecommendedTools} from '../../constants/index'
import { AiFillPieChart } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);
  
export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'last scan results',
        },
    },
};

export default function Dashboard(){
    const [scanData, setScanData] = useState(null)
    const [scanStatus, setScanStatus] = useState(0)

    useEffect(() => {
        const getScanData = async () => {
            const val =  localStorage.getItem('scan-status')
            const scan_data = await JSON.parse(localStorage.getItem('scan-data'))
            if(scan_data)
                setScanStatus(prev => val)
            if(val)
                setScanData(prev => scan_data)
        }
        getScanData()
    }, [])


    return(
        <DashboardLayout title={`Dashboard`}>

            {/* recommended Tools */}
            <div className={`py-[5px] px-[10px]`}>
                <div className={`flex gap-[7px] md:gap-[15px] items-center`}>
                    <HiCheckBadge color={`#226F78`} size={`25`}/>
                    <p className={`text-text font-medium text-[18px] md:text-[22px]`}>Recommended Tools</p>
                </div>

                <div className={`w-full py-[15px] px-[20px] md:px-[40px] flex gap-[15px] md:gap-[25px] flex-wrap`}>
                    {
                        RecommendedTools.map((item) => (
                            <Icon 
                                title={item.title}
                                key={item.id}
                                url={item.url}
                                id={item.id}
                                isReady={item.isReady}
                            />
                        ))
                    }
                </div>
            </div>

            {/* attack surface summary + vulnerability summary  */}
            <div className={`py-[5px] mt-[30px] px-[10px] flex flex-wrap items-center gap-[25px]`}>

                <div className={`sm:flex-1 w-full sm:w-auto sm:min-w-[450px]`}>
                    <div className={`flex gap-[15px] items-center `}>
                        <AiFillPieChart color={`#226F78`} size={`25`}/>
                        <p className={`text-text font-medium text-[18px] md:text-[22px]`}>Attack Surface Summary</p>
                    </div>
                    <div className={`border-text flex ${!scanData ? 'justify-center items-center' : ''} h-[300px] border-[1px] my-[10px]`}>
                        
                            {scanData ?
                                <>
                                    <div className="p-4 flex flex-col gap-4 w-full">
                                        <h3 className="text-accent text-center text-2xl font-semibold">Last Scan Results</h3>
                                        {scanData.labels.map((label, index) => (
                                            <div key={index} className="flex gap-3 items-center">
                                                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: scanData.datasets[0].backgroundColor[index] }}></div>
                                                <p className="text-xl">{scanData.datasets[0].data[index]} {label} found</p>
                                            </div>
                                        ))}
                                    </div> 
                                </>
                            :
                                <div className={`flex flex-col items-center justify-center gap-[10px]`}>
                                    <p>You don't have any scans yet</p>
                                    <Link to={`/scans/scan-templates`}>
                                        <button className={`px-[20px] bg-secondary rounded-xl text-[16px] md:text-[20px] py-[10px]`}>
                                            Start a Scan
                                        </button>
                                    </Link>
                                </div>
                            }
                    </div>
                </div>

                <div className={`sm:flex-1 w-full sm:w-auto sm:min-w-[450px]`}>
                    <div className={`flex  gap-[15px] items-center `}>
                        <AiFillSignal color={`#226F78`} size={`25`}/>
                        <p className={`text-text font-medium text-[18px] md:text-[22px]`}>Vulnerability Summary</p>
                    </div>
                    <div className={`border-text flex items-center justify-center h-[300px] border-[1px] my-[10px] `}>
                        {scanData ?
                            <Bar data={scanData} options={options} />
                        :
                            <p>You don't have any scans yet</p>
                        }
                    </div>
                </div>
            </div>

            {/* scan activity */}
            <div className={`py-[5px] px-[10px] mt-[20px]`}>
                <div className={`flex gap-[15px] items-center`}>
                    <TbActivityHeartbeat color={`#226F78`} size={`25`}/>
                    <p className={`text-text font-medium text-[18px] md:text-[22px]`}>Scan Activity</p>
                </div>
                <div className={`py-6 flex gap-4  justify-around`}>
                    <div className="w-48 h-48">
                        <CircularProgressbarWithChildren  
                            value={scanStatus*100}
                            styles={{
                                path: {stroke: '#226F78'},
                                trail: {stroke: '#9AE2C7'}
                            }}
                        >
                            <p className={`text-accent font-semibold text-xl md:text-2xl`}>{scanStatus}/1</p>
                            <p className={`text-text text-sm md:text-lg`}>Running Scans</p>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="w-48 h-48">
                        <CircularProgressbarWithChildren 
                            value={0}
                            styles={{
                                path: {stroke: '#226F78'},
                                trail: {stroke: '#9AE2C7'}
                            }}
                        >
                            <p className={`text-accent font-semibold text-xl md:text-2xl`}>0/10</p>
                            <p className={`text-text text-sm md:text-lg`}>Waiting Scans</p>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="w-48 h-48">
                        <CircularProgressbarWithChildren 
                            value={scanStatus*100/5}
                            styles={{
                                path: {stroke: '#226F78'},
                                trail: {stroke: '#9AE2C7'}
                            }}
                        >
                            <p className={`text-accent font-semibold text-xl md:text-2xl`}>{scanStatus}/5</p>
                            <p className={`text-text text-sm md:text-lg`}>Template</p>
                        </CircularProgressbarWithChildren>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}


const Icon = ({title, url, id, isReady}) => {
    return(
        <Link to={url} state={{data : {id: id, isReady: isReady}}} className={`border-text boxShadow border-[1px] rounded-md md:rounded-xl`}>
            <div className={`flex items-center gap-[10px] py-[15px] px-[30px]`}>
                <BsFillLightningChargeFill color={`#226F78`} size={`20`}/>
                <p className={`text-text text-lg sm:text-xl md:text-2xl`}>{title}</p>
            </div>
            
        </Link>
    )
}