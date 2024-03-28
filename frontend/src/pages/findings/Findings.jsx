import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Result from "./components/Result";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import {host} from '../../utils/apiRoutes'
export default function Findings(){
    const location = useLocation()
    const scan_id = location.pathname.split('/')[3] //gives us the scan id
    const [result , setResult] = useState()
    const [scanStatus, setScanStatus] = useState('')
    const [scanResult, setScanResult] = useState()
    
    if(scan_id){
        useEffect(() => {
            const getResult = async () => {
                console.log(location.pathname)
                try{
                    const {data} = await axios.get(`${host}/scan-results/${scan_id}`)
                    if (data.status === 'pending') {
                        setScanStatus('Pending');
                        setTimeout(getResult, 10000); // Check again after 5 seconds
                    } else {
                        setScanStatus('Completed');
                        setResult(prev => data);
                    }
                }catch(error){
                    console.log(error.message)
                }
            }
            getResult()
        }, [])
    }    

    useEffect(() => {
        const existingObject = {
            id: 1,
            title: 'Active Scan Results',
            img: 'active.svg',
            target: 'http://casetcollege.in',
        };
        const response = [];
        for (const key in result) {
            if (result.hasOwnProperty(key)) {
            response.push(result[key]);
            }
        }
        
        // Adding response array as a key-value pair to existingObject
        existingObject.response = response;

        setScanResult(prev => [existingObject])
    },[result])
    return(
        <DashboardLayout title={`Scan Results`}>
            {scanResult && 
                scanResult.map((result) => (
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
