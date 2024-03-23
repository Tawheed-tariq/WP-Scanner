import { Route, Routes } from "react-router-dom";
import ScanHome from "./components/ScanHome";
import ScanTemplates from "./components/ScanTemplates";
import NewScan from "./components/NewScan";
import Notfound from "../../components/Notfound";

export default function Scans(){
    return(
        <Routes >
            <Route path="/" element={<ScanHome/>} />
            <Route path="/scan-templates" element={<ScanTemplates/>} />
            <Route path="/new-scan" element={<NewScan/>} />
            <Route path="/*" element={<Notfound />} />
        </Routes>
    )
}