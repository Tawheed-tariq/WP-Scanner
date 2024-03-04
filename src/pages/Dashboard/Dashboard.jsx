import DashboardLayout from "../../components/DashboardLayout";
import { HiCheckBadge } from "react-icons/hi2";
import { BsFillLightningChargeFill } from "react-icons/bs";
import {RecommendedTools} from '../../constants/index'
import { AiFillPieChart } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Dashboard(){
    
    return(
        <DashboardLayout title={`Dashboard`}>

            {/* recommended Tools */}
            <div className={`py-[5px] px-[10px]`}>
                <div className={`flex gap-[15px] items-center`}>
                    <HiCheckBadge color={`#226F78`} size={`25`}/>
                    <p className={`text-text font-medium text-[22px]`}>Recommended Tools</p>
                </div>

                <div className={`w-full py-[15px] px-[40px] flex gap-[25px] flex-wrap`}>
                    {
                        RecommendedTools.map((item) => (
                            <Icon 
                                title={item.title}
                                key={item.id}
                                url={item.url}
                            />
                        ))
                    }
                </div>
            </div>

            {/* attack surface summary + vulnerability summary  */}
            <div className={`py-[5px] mt-[30px] px-[10px] flex items-center gap-[25px]`}>

                <div className={`flex-1`}>
                    <div className={`flex  gap-[15px] items-center `}>
                        <AiFillPieChart color={`#226F78`} size={`25`}/>
                        <p className={`text-text font-medium text-[22px]`}>Attack Surface Summary</p>
                    </div>
                    <div className={`border-text flex items-center justify-center h-[300px] border-[1px] my-[10px]`}>
                        <div className={`flex flex-col items-center justify-center gap-[10px]`}>
                            <p>You don't have any scans yet</p>
                            <Link to={`/scans/scan-templates`}>
                                <button className={`px-[20px] bg-secondary rounded-xl text-[20px] py-[10px]`}>
                                    Start a Scan
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`flex-1 `}>
                    <div className={`flex  gap-[15px] items-center `}>
                        <AiFillSignal color={`#226F78`} size={`25`}/>
                        <p className={`text-text font-medium text-[22px]`}>Vulnerability Summary</p>
                    </div>
                    <div className={`border-text flex items-center justify-center h-[300px] border-[1px] my-[10px]`}>
                        <p>You don't have any scans yet</p>
                    </div>
                </div>
            </div>

            {/* scan activity */}
            <div className={`py-[5px] px-[10px] mt-[20px]`}>
                <div className={`flex gap-[15px] items-center`}>
                    <TbActivityHeartbeat color={`#226F78`} size={`25`}/>
                    <p className={`text-text font-medium text-[22px]`}>Scan Activity</p>
                </div>

            </div>
        </DashboardLayout>
    )
}


const Icon = ({title, url}) => {
    return(
        <Link to={url} className={`border-text boxShadow border-[1px] rounded-3xl`}>
            <div className={`flex items-center gap-[10px] py-[20px] px-[40px]`}>
                <BsFillLightningChargeFill color={`#226F78`} size={`25`}/>
                <p className={`text-text text-[24px]`}>{title}</p>
            </div>
        </Link>
    )
}