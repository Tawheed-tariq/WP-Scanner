import { useLocation } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import {descs} from '../../../constants/newScan'
export default function NewScan(){
    const location = useLocation()
    const recievedData = location.state.data
    const data = descs[recievedData-1]
    return(
       <DashboardLayout title={`Scans/${data.title}`}>
            <div className={`flex justify-between flex-wrap px-[20px] py-[10px]`}>

                {/* form for the scan  */}
                <div className={`flex-1`}>
                    <form className={`flex flex-col gap-[10px]`}>
                        <div className={`flex flex-col gap-[5px] p-[5px]`}>
                            <label className={`font-medium text-text`} htmlFor="name">Name</label>
                            <input className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 placeholder:text-[18px] focus:outline-none`} type="text" name="name" placeholder="Name of scan" />
                        </div>

                        <div className={`flex flex-col gap-[5px]`}>
                            <label className={`font-medium text-text`} htmlFor="target">Target</label>
                            <input className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 placeholder:text-[18px] focus:outline-none`} type="text" name="target" placeholder="Example : 127.0.0.1" />
                        </div>

                        <div className={`flex flex-col gap-[5px]`}>
                            <label className={`font-medium text-text`} htmlFor="description">Description</label>
                            <textarea className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 placeholder:text-[18px] focus:outline-none`} name="description" placeholder="Description of your scan" cols="30" rows="10"></textarea>
                        </div>

                        <button className={`bg-accent mt-[10px] text-[20px] text-txt font-medium max-w-[120px] px-[10px] py-[10px] rounded-xl`} type="submit">
                            Start Scan
                        </button>
                    </form>
                </div>

                {/* description about the scan  */}
                <div className={`flex-1`}>
                    <h1 className="text-[30px] text-accent font-semibold ">{data.title}</h1>
                    <p className={`text-text text-[18px] my-[10px]`}>{data.desc}</p>
                    <p className={`text-text text-[20px] font-semibold`}>Key Features :</p>

                    <ol className={`mt-[10px] text-text text-[18px]`}>
                        {
                            data.keyfeatures.map((feature) => (
                                <li key={feature.id} className={`my-[10px]`}>
                                    <span className={`text-text font-semibold text-[20px]`}>{feature.title} : </span>
                                    {feature.point}
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
       </DashboardLayout>
    )
}