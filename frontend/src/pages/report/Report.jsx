import DashboardLayout from "../../components/DashboardLayout";
import axios from 'axios'
import {getAllPdfsRoute, getPdfRoute} from '../../utils/apiRoutes'
import { useEffect, useState } from "react";
export default function Report(){

    const [pdfs,  setPdfs] = useState([])
    const [pdfUrl, setPdfUrl] = useState('')
    useEffect(() => {
        const get_all_pdfs = async () => {
            try {
                const all_pdfs = await axios.get(getAllPdfsRoute)
                console.log(all_pdfs.data)
                setPdfs(prev => all_pdfs.data)
            } catch (error) {
                console.log("error in getting scans " + error.message)
            }
        }
        get_all_pdfs()
    }, [])

    const handleClick = async (pdf) => {
        try {
            const response = await axios.get(getPdfRoute+pdf, {
                responseType: 'blob'
            });
            const url = URL.createObjectURL(response.data);
            setPdfUrl(url);
        
            // Open the PDF in a new tab with full size
            const newWindow = window.open('', '_blank');
            if (newWindow) {
                newWindow.document.write(`<embed src="${url}" type="application/pdf" width="100%" height="100%" />`);
            } else {
                console.error('Failed to open new window.');
            }
            } catch (error) {
            console.error('Error fetching PDF:', error);
        }
    };

    return(
        <DashboardLayout title={`Report`}>
            {
                pdfs.map((pdf) => (
                    <div key={pdf.scan_id} className="cursor-pointer">
                        <h1 className={`font-semibold text-3xl text-accent`} onClick={() => handleClick(pdf.scan_id)} >
                            {pdf.name}
                        </h1>
                        <p>{pdf.target}</p>
                    </div>
                ))
            }
        </DashboardLayout>
    )
}