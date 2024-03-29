import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Result from "./components/Result";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import {host} from '../../utils/apiRoutes'
export default function Findings(){
    const location = useLocation()
    const scan_id = location.pathname.split('/')[3] //gives us the scan id
    const res = location.state
    const [result , setResult] = useState()
    const [scanStatus, setScanStatus] = useState('')
    const [scanResult, setScanResult] = useState()
    
    if(scan_id){
        useEffect(() => {
            const getResult = async () => {
                try{
                    const {data} = await axios.get(`${host}/scan-results/${scan_id}`)
                    if (data.status === 'pending') {
                        setScanStatus('Pending');
                        // setTimeout(getResult, 10000); // Check again after 5 seconds
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
        console.log(result)
        const raw_data = {
            ports : '0',
            theme_vulnerabilities : '0',
            plugin_vulnerabilities : '0',
            users : '0'
        }
        if(result){
            if(result.nmap){
                raw_data.ports = result.nmap.res
            }
            if(result.themes){
                raw_data.theme_vulnerabilities = result.themes.res
            }
            if(result.users){
                raw_data.users = result.users.res
            }
            if(result.vulnerabilities){
                raw_data.plugin_vulnerabilities = result.vulnerabilities.res
            }
        }
    })

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
            {scanResult && 
                scanResult.map((result) => (
                    <Result
                        key={result.id}
                        response={result.response}
                        data={res}
                    />
                ))
            }
        </DashboardLayout>
    )
}
