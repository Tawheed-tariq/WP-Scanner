import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import {descs} from '../../../constants/newScan'
import { useState } from "react";
import axios from 'axios'
import {host} from '../../../utils/apiRoutes'
export default function NewScan(){
    const location = useLocation()
    const recievedData = location.state.data /*recieves data from the template clicked in scan tempaltes*/
    const data = descs[recievedData-1]
    const navigate = useNavigate()
    const [values , setValues] = useState({
        name : '',
        target : '',
        description : ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
       try {
            e.preventDefault()
            const {name, target, description} = values
            const {data} = await axios.post(`${host}/start-active-scan`, {
                name,
                target,
                description
            })
            if(data.scan_id){
                navigate(`/scan-results/${data.scan_id}`)
            }
       } catch (error) {
            console.log(error.message)
       }
    }
    return(
       <DashboardLayout title={`Scans/${data.title}`}>
            <div className={`flex justify-between gap-[30px] md:gap-0 flex-wrap px-[20px] py-[10px]`}>

                {/* form for the scan  */}
                <div className={`md:flex-1 ss:min-w-[400px] sm:min-w-[450px]`}>
                    <form className={`flex flex-col gap-[10px]`}>
                        <div className={`flex flex-col gap-[5px] p-[5px]`}>
                            <label className={`font-medium text-text text-[14px] sm:text-[20px]`} htmlFor="name">Name</label>
                            <input onChange={(e) => handleChange(e)} className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 sm:placeholder:text-[18px] focus:outline-none`} type="text" name="name" placeholder="Name of scan" />
                        </div>

                        <div className={`flex flex-col gap-[5px]`}>
                            <label className={`font-medium text-text text-[14px] sm:text-[20px]`} htmlFor="target">Target</label>
                            <input onChange={(e) => handleChange(e)} className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 sm:placeholder:text-[18px] focus:outline-none`} type="text" name="target" placeholder="Example : 127.0.0.1" />
                        </div>

                        <div className={`flex flex-col gap-[5px]`}>
                            <label className={`font-medium text-text text-[14px] sm:text-[20px]`} htmlFor="description">Description</label>
                            <textarea onChange={(e) => handleChange(e)} className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 sm:placeholder:text-[18px] focus:outline-none`} name="description" placeholder="Description of your scan" cols="30" rows="5"></textarea>
                        </div>

                        <button onClick={ (e) => handleSubmit(e)} className={`bg-accent boxShadow mt-[10px] sm:text-[20px] text-txt font-medium max-w-[120px] px-[10px] py-[10px] rounded-xl`} type="submit">
                            Start Scan
                        </button>
                    </form>
                </div>

                {/* description about the scan  */}
                <div className={`md:flex-1 ss:min-w-[400px] sm:min-w-[450px]`}>
                    <h1 className="text-[24px] sm:text-[30px] text-accent font-semibold ">{data.title}</h1>
                    <p className={`text-text text-[14px] sm:text-[18px] my-[10px]`}>{data.desc}</p>
                    <p className={`text-text text-[18px] sm:text-[20px] font-semibold`}>Key Features :</p>

                    <ol className={`mt-[10px] text-text text-[18px]`}>
                        {
                            data.keyfeatures.map((feature) => (
                                <li key={feature.id} className={`my-[10px] text-[14px] sm:text-[18px]`}>
                                    <span className={`text-text font-semibold text-[18px] sm:text-[20px]`}>{feature.title} : </span>
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