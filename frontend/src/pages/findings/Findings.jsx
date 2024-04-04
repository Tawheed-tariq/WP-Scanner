import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Result from "./components/Result";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import {host} from '../../utils/apiRoutes'
import { useDispatch } from 'react-redux';
import { updateScanResults } from '../../constants/actions';


export default function Findings(){
    const location = useLocation()
    const dispatch = useDispatch();
    const scan_id = location.pathname.split('/')[3] //gives us the scan id
    const res = location.state
    const [result , setResult] = useState()
    const [scanStatus, setScanStatus] = useState('')
    const [scanResult, setScanResult] = useState()
    
    const handleScanComplete = (results) => {
        dispatch(updateScanResults(results));
        console.log("updated")
    };

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
                        handleScanComplete(data)
                    }
                }catch(error){
                    console.log(error.message)
                }
            }
            getResult()
        }, [])
    }    


    useEffect(() => {
        const raw_data = {
            ports : ['0', '#fffff'],
            theme_vulnerabilities : ['0', '#fffff'],
            plugin_vulnerabilities : ['0', '#fffff'],
            users : ['0', '#fffff']
        }
        if(result){
            if(result.nmap){
                raw_data.ports[0] = result.nmap.res
            }
            if(result.themes){
                raw_data.theme_vulnerabilities[0] = result.themes.res
            }
            if(result.users){
                raw_data.users[0] = result.users.res
            }
            if(result.vulnerabilities){
                raw_data.plugin_vulnerabilities[0] = result.vulnerabilities.res
            }
        }
        localStorage.setItem("raw-data", JSON.stringify(raw_data))
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
