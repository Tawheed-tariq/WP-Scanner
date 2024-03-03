import { properties } from "../../../constants"

export default function About(){
    return(
        <div id="about" className={`bg-home-bg w-full px-[250px] text-txt`}>
            <h1 className="text-[58px] font-extrabold w-[1000px]">
                It's really easy to scan your web application for vulnerabilities
            </h1>

            <div className={`w-full flex justify-between min-h-[100vh]`}>
                <div className={`w-[30%]`}>
                    <h1 className="text-[130px] mt-[30px] rotate-180 rotated-text font-extrabold">
                        WPScans
                    </h1>
                </div>
                <div className="w-[60%] mt-[60px]">
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
        <div className={`flex items-center my-[30px] px-[60px] py-[30px] property gap-[20px] rounded-r-full `}>
            <div className={`w-[80%]`}>
                <h1 className="text-[40px] font-semibold mb-[20px]">
                    {title}
                </h1>
                <p>
                    {desc}
                </p>
            </div>
            <div className="w-[150px] h-[140px]">
                <img className={`w-full h-full`} src={img} />
            </div>
        </div>
    )
} 