import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import {descs} from '../../../constants/newScan'
import { useState } from "react";
import axios from 'axios'
import {host, saveScanRoute} from '../../../utils/apiRoutes' 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function NewScan(){
    const location = useLocation()
    const recievedData = location.state.data /*recieves data from the template clicked in scan tempaltes*/
    const index = recievedData.id - 1
    const data = descs[index]
    const navigate = useNavigate()

    const [values , setValues] = useState({
        name : '',
        target : '',
        description : ''
    })

    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleValidation = () => {
        const {name, target} = values
        if(name === ''){
            toast.error(
                "Name of scan cannot be empty",
                toastOptions
            )
            return false
        }
        if (target === '') {
            toast.error(
              "Please specify the target",
              toastOptions
            );
            return false;
        }
        return true;
    }

    const currTime = () => {
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; // Months are zero-based
        let year = currentDate.getFullYear();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();

        // Add leading zero if needed
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return day + '-' + month + '-' + year + ' ' + hours + ':' + minutes;
    }

    const handleScanStart = (value) => {
        localStorage.setItem('scan-status', value)
    };

    const handleSubmit = async (e) => {
       try {
            e.preventDefault()
            if(handleValidation()){
                const {name, target} = values
                const {data} = await axios.post(`${host}/start-active-scan`, {
                    target
                })
                const {scan_id, status} = data;
                if(scan_id){
                    const Time = currTime()
                    const result = await axios.post(saveScanRoute, {
                        name,
                        target,
                        scan_id,
                        status,
                        Time,
                    })

                    toast.success("Scan Started Successfully", toastOptions)
                    handleScanStart(1)
                    setTimeout(() => { 
                        navigate('/scans')
                    }, 3000);
                }
            }
       } catch (error) {
            console.log("error in scan section " +error.message)
       }
    }
    return(
       <DashboardLayout title={`Scans/${data.title}`}>
            <div className={`flex justify-between gap-[30px] md:gap-0 flex-wrap px-[20px] py-[10px]`}>

                {/* form for the scan  */}
                {recievedData.isReady ?
                    <div className={`md:flex-1 ss:min-w-[400px] sm:min-w-[450px]`}>
                        <form className={`flex flex-col gap-[10px]`}>
                            <div className={`flex flex-col gap-[5px] p-[5px]`}>
                                <label className={`font-medium text-text text-[14px] sm:text-[20px]`} htmlFor="name">Name</label>
                                <input autoComplete="off" onChange={(e) => handleChange(e)} className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 sm:placeholder:text-[18px] focus:outline-none`} type="text" name="name" placeholder="Name of scan" />
                            </div>

                            <div className={`flex flex-col gap-[5px]`}>
                                <label className={`font-medium text-text text-[14px] sm:text-[20px]`} htmlFor="target">Target</label>
                                <input autoComplete="off" onChange={(e) => handleChange(e)} className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 sm:placeholder:text-[18px] focus:outline-none`} type="text" name="target" placeholder="Example : 127.0.0.1" />
                            </div>

                            <div className={`flex flex-col gap-[5px]`}>
                                <label className={`font-medium text-text text-[14px] sm:text-[20px]`} htmlFor="description">Description</label>
                                <textarea onChange={(e) => handleChange(e)} className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 sm:placeholder:text-[18px] focus:outline-none`} name="description" placeholder="Description of your scan" cols="30" rows="5"></textarea>
                            </div>

                            <button onClick={ (e) => handleSubmit(e)} className={`bg-accent boxShadow mt-[10px] sm:text-[20px] text-background font-medium max-w-[120px] px-[10px] py-[10px] rounded-xl`} type="submit">
                                Start Scan
                            </button>
                        </form>
                    </div>
                :
                    <div className={`md:flex-1 ss:min-w-[400px] sm:min-w-[450px]`}>
                        <h1 className={`text-5xl h-full text-accent font-bold`}>
                            Comming Soon .......
                        </h1>
                    </div>
                }

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
            <ToastContainer/>
       </DashboardLayout>
    )
}