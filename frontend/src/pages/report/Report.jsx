import DashboardLayout from "../../components/DashboardLayout";
import axios from 'axios'
import {getAllPdfsRoute, getPdfRoute} from '../../utils/apiRoutes'
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
export default function Report(){
    const [pdfs,  setPdfs] = useState([])
    const [pdfUrl, setPdfUrl] = useState('')
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const get_all_pdfs = async () => {
            try {
                const all_pdfs = await axios.get(getAllPdfsRoute)
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

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPdfs = pdfs.filter(pdf => pdf.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return(
        <DashboardLayout title={`Report`}>
            <div className={`w-full flex items-center justify-end py-[20px]`}>
                <div className="flex items-center px-[20px] md:mr-10 gap-[20px] border-text border-[1px]">
                    <input 
                        className={` bg-transparent focus:outline-none py-[5px]`} 
                        type="text" 
                        placeholder="Search Scans"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <IoMdSearch color="#040807" size={25}/>
                </div>
            </div>
            {filteredPdfs.length> 0?
                <div className="flex gap-7 flex-wrap">
                    {
                        filteredPdfs.reverse().map((pdf) => (
                            <div onClick={() => handleClick(pdf.scan_id)} key={pdf.scan_id} className="flex gap-4 border-[1px] rounded-2xl border-text p-2 pr-6 cursor-pointer">
                                <img className="w-20 h-20" src="pdf.png" alt="" />
                                <div>
                                    <p className={`font-semibold text-3xl text-text`}>{pdf.name}</p>
                                    <p className="text-accent">{pdf.target}</p>
                                </div>
                            </div>
                        ))
                }
                </div>
            :
                <div className={`w-full h-[80vh] flex  justify-center items-center`}>
                    <p className="text-gray-400 overflow-hidden font-bold text-5xl">
                        No Scans To show
                    </p>
                </div>
            }
        </DashboardLayout>
    )
}