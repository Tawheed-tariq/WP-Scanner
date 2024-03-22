import { HiComputerDesktop } from "react-icons/hi2";

export default function Table({target, headings, dataRows}){
    return (
        <div className={`mt-[10px]`}>
            <div className="flex w-full items-center border-text border-[1px] border-b-0 py-[7px] px-[15px] gap-[10px] bg-primary ">
                <HiComputerDesktop color={`#226F78`} size={`25`}/>
                <p className={`font-medium text-[20px]`}>{target}</p>
            </div>
            <table className={`w-full border-collapse Table-bordered Table text-text border-text table-auto tab border-[1px]`}>
                <thead className="bg-primary">
                    <tr>
                        {
                            headings.map((ele, eleIndex) => (
                                <td key={eleIndex}>{ele}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataRows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {
                                    row.map((data, index) => (
                                        typeof(data) == "string" || typeof(data) == "number" ? 
                                            <td key={index} className={index== 0 ? 'font-semibold text-accent text-[22px]': ''}>{data}</td>
                                        :
                                        <td key={index}>
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

    )
}