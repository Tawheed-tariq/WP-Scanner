import Table from './Table'
import { GiGalaxy } from "react-icons/gi";

export default function Result({response,data}){
    return(
        <div className={`my-[20px]`}>
            <div className={`flex gap-[10px] items-center`}>
                <p className={`font-semibold text-[32px] text-accent`}>{data.name}</p>
            </div>
            {
                response.map((item, id) => (
                    <span key={id}>
                        {item && item.data &&
                            <div  className={`mt-[20px]`}>
                                <div className={`flex gap-[10px] items-center`}>
                                    <GiGalaxy color={`#226F78`} size={`25`}/>
                                    <p className={`font-medium text-[22px]`}>{item.res}</p>
                                </div>

                                {/* table start  */}
                                <Table
                                    target={data.target}
                                    headings={item.data.headings}
                                    dataRows={item.data.dataRows}
                                />

                            </div>
                        }
                    </span>
                ))
            }
        </div>

    )
}
