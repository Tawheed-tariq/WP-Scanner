import DashboardLayout from "@components/DashboardLayout";
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
import ReactApexChart from 'react-apexcharts';

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


    const [chartData] = useState({
        series: [
          {
            name: 'Series 1',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'Series 2',
            data: [21, 43, 50, 67, 18,112, 132]
          }
        ],
        options: {
            chart: {
                height: 450,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
              },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            grid: {
                strokeDashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            }
        }
      });

    

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
            <div >
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

                <div className={`sm:flex-1 w-full sm:w-auto bg-white sm:min-w-[450px]`}>
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="area"
                        height={360}
                    />
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
                            <p className={`text-text text-sm md:text-lg`}>Templates</p>
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