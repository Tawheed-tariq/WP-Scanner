import { elements } from "../../../constants"
export default function Working(){
    return(
        <div id="work" className={`w-full working px-[20px] md:px-[100px] lg:px-[200px] flex flex-col items-center justify-center md:pt-[100px]`}>
            <h1 className="text-[34px] sm:text-[44px] md:text-[58px] text-txt mx-auto font-extrabold">How does the Website Vulnerability scanner work</h1>

            <div className={`w-full flex flex-wrap justify-center gap-[30px] py-[50px]`}>
                {
                    elements.map((ele) => (
                        <Item 
                            key={ele.id}
                            title={ele.title}
                            url={ele.url}
                            desc={ele.desc}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const Item = ({title, url, desc}) => {
    return(
        <div className={`py-[20px] scan border-l-[5px] border-t-[5px] border-[#FEFD45] px-[30px] rounded-3xl bg-home-secondary max-w-[600px] text-[#F8FCFB]`}>
            <div className="flex items-center gap-[10px] md:gap-[30px] mb-[10px] md:mb-[20px]">
                <img className={`w-[30px] h-[30px] md:w-[100px] md:h-[100px]`} src={url} alt="" />
                <h1 className="text-[24px] md:text-[40px] font-bold ">{title}</h1>
            </div>
            <p className={`text-[12px] md:text-[16px]`}>
                {desc}
            </p>
        </div>
    )
}