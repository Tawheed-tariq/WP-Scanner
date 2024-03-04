import { Link } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import { RiScan2Line } from "react-icons/ri";
export default function ScanTemplates(){
    const templates = [
        {
            id : 1,
            title : 'Active Scan',
            desc : 'Detect issues in WP websites: plugin & theme vulns, user enumeration, config backups, etc.',
            img : <RiScan2Line color={`#226F78`} size={`25`}/>,
            url : '/scans/new-scan'
        },
        {
            id : 2,
            title : 'Subdomain Finder',
            desc : 'Discover all the subdomains of your target and thoroughly map its attack surface.',
            img :<RiScan2Line color={`#226F78`} size={`25`}/>,
            url : '/scans/new-scan'
        },
        {
            id : 3,
            title : 'Vulnerability Scan',
            desc : 'Detect issues in WP websites: plugin & theme vulns, user enumeration, config backups, etc.',
            img : <RiScan2Line color={`#226F78`} size={`25`}/>,
            url : '/scans/new-scan'
        },
        {
            id : 4,
            title : 'Password Auditor',
            desc : 'Uncover weak or default credentials in network services or web pages that require auth.',
            img : <RiScan2Line color={`#226F78`} size={`25`}/>,
            url : '/scans/new-scan'
        },
        {
            id : 5,
            title : "Way-back url's",
            desc : 'Detect issues in WP websites: plugin & theme vulns, user enumeration, config backups, etc.',
            img : <RiScan2Line color={`#226F78`} size={`25`}/>,
            url : '/scans/new-scan'
        },
    ]
    return(
        <DashboardLayout title={`Scan Templates`}>
            <div className={`py-[5px] flex flex-wrap gap-[25px] px-[10px]`}>
                {
                    templates.map((template) => (
                        <Link>
                            <div key={template.id} className={`px-[30px] text-text cursor-pointer border-text border-[2px] rounded-2xl boxShadow py-[15px]`}>
                                <div className={`flex items-center gap-[15px]`}>
                                    {template.img}
                                    <p className={`font-medium text-[24px]`}>{template.title}</p>
                                </div>
                                <div className={`max-w-[350px]`}>
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