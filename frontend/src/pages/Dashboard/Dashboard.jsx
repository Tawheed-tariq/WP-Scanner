import DashboardLayout from "../../components/DashboardLayout";
import { HiCheckBadge } from "react-icons/hi2";
import { BsFillLightningChargeFill } from "react-icons/bs";
import {RecommendedTools} from '../../constants/index'
import { AiFillPieChart } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from "react-router-dom";
import { raw_data } from "../../constants/index";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


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
  

export const data = {
    labels : ['Ports', 'Plugin vulnerabilities', 'Theme vulnerabilities', 'Users'],
    datasets: [
        {
            data: [15, 7, 5, 2],
            backgroundColor: ['rgba(34, 111, 120, 1)', 'rgba(12, 211, 110, 1)', 'rgba(34, 111, 120, 0.5)', 'rgba(34, 110, 10, 1)'],
        }
    ],
};



export default function Dashboard(){
    const scanResults = useSelector((state) => state.scanResults);
    console.log(scanResults)
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
                    <div className={`border-text flex items-center justify-center h-[300px] border-[1px] my-[10px]`}>
                        <div className={`flex flex-col items-center justify-center gap-[10px]`}>
                            <p>You don't have any scans yet</p>
                            <Link to={`/scans/scan-templates`}>
                                <button className={`px-[20px] bg-secondary rounded-xl text-[16px] md:text-[20px] py-[10px]`}>
                                    Start a Scan
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`sm:flex-1 w-full sm:w-auto sm:min-w-[450px]`}>
                    <div className={`flex  gap-[15px] items-center `}>
                        <AiFillSignal color={`#226F78`} size={`25`}/>
                        <p className={`text-text font-medium text-[18px] md:text-[22px]`}>Vulnerability Summary</p>
                    </div>
                    <div className={`border-text flex items-center justify-center h-[300px] border-[1px] my-[10px] `}>
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>

            {/* scan activity */}
            <div className={`py-[5px] px-[10px] mt-[20px]`}>
                <div className={`flex gap-[15px] items-center`}>
                    <TbActivityHeartbeat color={`#226F78`} size={`25`}/>
                    <p className={`text-text font-medium text-[18px] md:text-[22px]`}>Scan Activity</p>
                </div>
                <div className={`py-6 flex gap-4 justify-around`}>
                    <div className="w-48 h-48">
                        <CircularProgressbarWithChildren  
                            value={1*100}
                            styles={{
                                path: {stroke: '#226F78'},
                                trail: {stroke: '#9AE2C7'}
                            }}
                        >
                            <p className={`text-accent font-semibold text-xl md:text-2xl`}>1/1</p>
                            <p className={`text-text text-sm md:text-lg`}>Running Scans</p>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="w-48 h-48">
                        <CircularProgressbarWithChildren 
                            value={4*100/10}
                            styles={{
                                path: {stroke: '#226F78'},
                                trail: {stroke: '#9AE2C7'}
                            }}
                        >
                            <p className={`text-accent font-semibold text-xl md:text-2xl`}>4/10</p>
                            <p className={`text-text text-sm md:text-lg`}>Waiting Scans</p>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="w-48 h-48">
                        <CircularProgressbarWithChildren 
                            value={7*100/10}
                            styles={{
                                path: {stroke: '#226F78'},
                                trail: {stroke: '#9AE2C7'}
                            }}
                        >
                            <p className={`text-accent font-semibold text-xl md:text-2xl`}>7/10</p>
                            <p className={`text-text text-sm md:text-lg`}>Waiting Scans</p>
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