import { properties } from "../../../constants"

export default function About(){
    return(
        <div id="about" className={`bg-home-bg w-full px-[20px] md:px-[100px] lg:px-[200px] text-txt`}>
            <h1 className="text-[34px] sm:text-[44px] md:text-[58px] font-extrabold md:w-[1000px]">
                It's really easy to scan your web application for vulnerabilities
            </h1>

            <div className={`w-full flex justify-between md:min-h-[100vh]`}>
                <div className={`w-[30%] hidden md:block`}>
                    <h1 className="text-[130px] mt-[30px] rotate-180 rotated-text font-extrabold">
                        WPScans
                    </h1>
                </div>
                <div className="md:w-[60%] mt-[10px] md:mt-[60px]">
                    {
                        properties.map((item) => (
                            <Property 
                                key={item.id}
                                title={item.title}
                                img={item.img}
                                desc={item.desc}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Property = ({title, desc, img}) => {
    return(
        <div className={`flex items-center my-[30px] px-[20px] md:px-[60px] py-[10px] md:py-[30px] property gap-[20px] rounded-r-full `}>
            <div className={`w-[80%]`}>
                <h1 className="text-[20px] sm:text-[24px] md:text-[40px] font-semibold mb-[10px] md:mb-[20px]">
                    {title}
                </h1>
                <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                    {desc}
                </p>
            </div>
            <div className="w-[70px] h-[70px] md:w-[150px] md:h-[140px]">
                <img className={`w-full h-full`} src={img} />
            </div>
        </div>
    )
} 