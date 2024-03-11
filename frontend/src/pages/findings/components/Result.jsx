import Table from './Table'
import { GiGalaxy } from "react-icons/gi";

export default function Result({title, img, target, response}){
    return(
        <div className={`my-[20px]`}>
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
                        <Table
                            target={target}
                            headings={item.data.headings}
                            dataRows={item.data.dataRows}
                        />

                    </div>
                ))
            }
        </div>

    )
}
