import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { resultToSend } from "../../constants/finding";
import Result from "./components/Result";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import {host} from '../../utils/apiRoutes'
export default function Findings(){
    const location = useLocation()
    const scan_id = location.pathname.split('/')[2]
    const [result , setResult] = useState()
    if(scan_id){
        useEffect(() => {
            const getResult = async () => {
                try{
                    const {data} = await axios.get(`${host}${location.pathname}`)
                    setResult(data)
                }catch(error){
                    console.log(error.message)
                }
            }
            getResult()
        }, [])
    }    
    console.log(result)
    return(
        <DashboardLayout title={`Findings`}>
            {
                resultToSend.map((result) => (
                    <Result
                        key={result.id}
                        title={result.title}
                        img={result.img}
                        target={result.target}
                        response={result.response}
                    />
                ))
            }
        </DashboardLayout>
    )
}
