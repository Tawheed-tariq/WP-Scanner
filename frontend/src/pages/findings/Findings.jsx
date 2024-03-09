import DashboardLayout from "../../components/DashboardLayout";
import { GiGalaxy } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { resultToSend } from "../../constants/finding";
export default function Findings(){
    return(
        <DashboardLayout title={`Findings`}>
            {
                resultToSend.map((result) => (
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

const Result = ({title, img, target, response}) => {
    return(
        <div className={`mx-[20px] my-[30px]`}>
            <div className={`flex gap-[10px] items-center`}>
                <img src={img} alt="" />
                <p className={`font-semibold text-[32px] text-accent`}>{title}</p>
            </div>
            {
                response.map((item, id) => (
                    <div key={id} className={`mt-[20px]`}>
                        <div className={`flex gap-[10px] items-center`}>
                            <GiGalaxy color={`#226F78`} size={`25`}/>
                            <p className={`font-medium text-[22px]`}>{item.res}</p>
                        </div>

                        {/* table start  */}
                        <div className={`mt-[10px]`}>
                            <div className="flex w-full items-center border-text border-[1px] border-b-0 py-[7px] px-[15px] gap-[10px] bg-primary ">
                                <HiComputerDesktop color={`#226F78`} size={`25`}/>
                                <p className={`font-medium text-[20px]`}>{target}</p>
                            </div>
                            <table className={`w-full border-collapse Table text-text border-text table-auto tab border-[1px]`}>
                                <thead className="bg-primary">
                                    <tr>
                                        {
                                            item.data.headings.map((ele) => (
                                                <td>{ele}</td>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item.data.dataRows.map((row) => (
                                            <tr>
                                                {
                                                    row.map((data, index) => (
                                                        typeof(data) == "string" || typeof(data) == "number" ? 
                                                            <td className={index== 0 ? 'font-semibold text-accent text-[22px]': ''}>{data}</td>
                                                        :
                                                        <td>
                                                            {
                                                                data.map((listItem,key) => (
                                                                    <li key={key} className={`my-[10px] text-[14px] sm:text-[18px]`}>
                                                                        <span className={`text-text font-semibold text-[18px] sm:text-[20px]`}>title : </span>
                                                                        {listItem.title} <br />
                                                                        <span className={`text-text font-semibold text-[18px] sm:text-[20px]`}>Version : </span>
                                                                        {listItem.Version} <br />
                                                                    </li>
                                                                ))
                                                            }
                                                        </td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>


                    </div>
                ))
            }
        </div>

    )
}