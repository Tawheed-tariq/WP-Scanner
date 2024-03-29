import { Link } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import { RiScan2Line } from "react-icons/ri";
import { FaBug } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { TbPasswordUser } from "react-icons/tb";
import { GiTentacurl } from "react-icons/gi";
export default function ScanTemplates(){
    const templates = [
        {
            id : 1,
            title : 'Active Scan',
            desc : 'Detect issues in WP websites: plugin & theme vulns, user enumeration, config backups, etc.',
            img : <RiScan2Line color={`#226F78`} size={`20`}/>,
            url : '/scans/new-scan',
            isReady : true
        },
        {
            id : 2,
            title : 'Subdomain Finder',
            desc : 'Discover all the subdomains of your target and thoroughly map its attack surface.',
            img :<TbWorld color={`#226F78`} size={`20`}/>,
            url : '/scans/new-scan',
            isReady : false
        },
        {
            id : 3,
            title : 'Vulnerability Scan',
            desc : 'Detect issues in WP websites: plugin & theme vulns, user enumeration, config backups, etc.',
            img : <FaBug color={`#226F78`} size={`20`}/>,
            url : '/scans/new-scan',
            isReady : false
        },
        {
            id : 4,
            title : 'Password Auditor',
            desc : 'Uncover weak or default credentials in network services or web pages that require auth.',
            img : <TbPasswordUser color={`#226F78`} size={`20`}/>,
            url : '/scans/new-scan',
            isReady : false
        },
        {
            id : 5,
            title : "Way-back url's",
            desc : 'Detect issues in WP websites: plugin & theme vulns, user enumeration, config backups, etc.',
            img : <GiTentacurl color={`#226F78`} size={`20`}/>,
            url : '/scans/new-scan',
            isReady : false
        },
    ]
    return(
        <DashboardLayout title={`Scan Templates`}>
            <div className={`py-[15px] flex flex-wrap gap-[10px] md:gap-[25px]`}>
                {
                    templates.map((template) => (
                        <Link to={template.url} state={{data : {id:template.id, isReady: template.isReady}}} key={template.id} className={`boxShadow border-text border-[2px] rounded-2xl`}>
                            <div  className={`px-[20px] text-text cursor-pointer  py-[15px]`}>
                                <div className={`flex items-center gap-[10px] md:gap-[15px]`}>
                                    {template.img}
                                    <p className={`font-medium text-[18px] md:text-[20px]`}>{template.title}</p>
                                </div>
                                <div className={`max-w-[300px] text-[12px] md:text-[16px] mt-[10px]`}>
                                    <p>{template.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </DashboardLayout>
    )
}