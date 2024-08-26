import { Route, Routes } from "react-router-dom";
import ScanHome from "./components/ScanHome";
import NewScan from "./components/NewScan";
import Notfound from "../../components/Notfound";
import Findings from "../findings/Findings";

export default function Scans({scanStatus, setScanStatus}){
    return(
        <Routes >
            <Route path="/" element={<ScanHome/>} />
            <Route path="/new-scan" element={<NewScan />} />
            <Route path="/scan-results/:scan_id" element={<Findings />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}