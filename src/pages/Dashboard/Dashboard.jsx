import DashboardLayout from "../../components/DashboardLayout";
import { HiCheckBadge } from "react-icons/hi2";
import { BsFillLightningChargeFill } from "react-icons/bs";
import {RecommendedTools} from '../../constants/index'
import { AiFillPieChart } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
export default function Dashboard(){
    
    return(
        <DashboardLayout>

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
                                key={item.id}
                                title={item.title}
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
                    <div className={`border-text flex items-center justify-center h-[250px] border-[1px] my-[10px]`}>
                        <div className={`flex flex-col items-center justify-center gap-[10px]`}>
                            <p>You don't have any scans yet</p>
                            <button className={`px-[20px] bg-secondary rounded-xl text-[20px] py-[10px]`}>
                                Start a Scan
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`flex-1 `}>
                    <div className={`flex  gap-[15px] items-center `}>
                        <AiFillSignal color={`#226F78`} size={`25`}/>
                        <p className={`text-text font-medium text-[22px]`}>Vulnerability Summary</p>
                    </div>
                    <div className={`border-text flex items-center justify-center h-[250px] border-[1px] my-[10px]`}>
                        <p>You don't have any scans yet</p>
                    </div>
                </div>
            </div>

            {/* scan activity */}
        </DashboardLayout>
    )
}


const Icon = ({title}) => {
    return(
        <div className={`border-text flex items-center boxShadow gap-[10px] border-[1px] rounded-3xl py-[20px] px-[40px]`}>
            <BsFillLightningChargeFill color={`#226F78`} size={`25`}/>
            <p className={`text-text text-[24px]`}>{title}</p>
        </div>
    )
}