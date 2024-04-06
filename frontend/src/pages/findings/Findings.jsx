import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Result from "./components/Result";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { getScanResult } from "../../utils/apiRoutes";

export default function Findings(){
    const location = useLocation()
    const scan_id = location.pathname.split('/')[3] //gives us the scan id
    const res = location.state
    const [result , setResult] = useState()
    const [scanResult, setScanResult] = useState()
    const [scanStatus, setScanStatus] = useState(0)
    
    const handleScanComplete = (value) => {
        localStorage.setItem('scan-status', value)
    };

    if(scan_id){
        useEffect(() => {
            const getResult = async () => {
                try{
                    const {data} = await axios.get(getScanResult + scan_id)
                    if (data.status === 'pending') {
                        setScanStatus(1);
                        setTimeout(getResult, 10000); // Check again after 10 seconds
                    } else {
                        setScanStatus(0);
                        setResult(prev => data);
                    }
                }catch(error){
                    console.log(error.message)
                }
            }
            getResult()
        }, [])
    }    

    handleScanComplete(scanStatus)


    const extractIntFromRes = (str) => {
        const regex = /^\d+/;
        const match = str.match(regex);
        const firstInteger = match ? parseInt(match[0]) : null;
        return firstInteger;
    }
    useEffect(() => {
        const scan_data = {
            labels : ['Ports', 'Users','Theme vulnerabilities', 'Plugin vulnerabilities'],
            datasets: [
                {
                    data: [0, 0, 0, 0],
                    backgroundColor: ['#498FF8', '#EB4646', '#F4E23F', '#1AF215'],
                }
            ],
        };
        if(result){
            if(result.nmap){
                scan_data.datasets[0].data[0] = extractIntFromRes(result.nmap.res)
            }
            if(result.users){
                scan_data.datasets[0].data[1] = extractIntFromRes(result.users.res)
            }
            if(result.themes){
                scan_data.datasets[0].data[2] = extractIntFromRes(result.themes.res)
            }
            if(result.vulnerabilities){
                scan_data.datasets[0].data[3] = extractIntFromRes(result.vulnerabilities.res)
            }
            localStorage.setItem("scan-data", JSON.stringify(scan_data))
        }
    }, [result, setResult])

    useEffect(() => {
        const existingObject = {
            id: 1,
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
            {scanStatus==0 ?
                scanResult && 
                    scanResult.map((result) => (
                        <Result
                            key={result.id}
                            response={result.response}
                            data={res}
                        />
                    ))
            :
                <div className="flex flex-col justify-center items-center h-[80vh]">
                    <div className="spinner w-32 h-32 rounded-full mb-6"></div>
                    <h1 className="text-gray-400 font-medium text-3xl">
                        Your scan is running
                    </h1>
                </div>
            }
        </DashboardLayout>
    )
}
