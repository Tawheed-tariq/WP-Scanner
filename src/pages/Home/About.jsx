export default function About(){

    const properties = [
        {
            id : 1,
            title : 'No SetUp Required',
            desc : 'Being a cloud-based scanner, it just works out of the box. There’s no  need to install anything on your end to scan public-facing web  applications. Just create an account and start scanning.',
            img : 'Vector.png'
        },
        {
            id : 2,
            title : 'Scheduling',
            desc : 'It’s a really good idea to scan your web applications periodically since  new vulnerabilities appear every day. With WPScans, you can  schedule daily, weekly, monthly or quarterly scans against your web apps  and automatically get reports via email or other channels when risks  emerge.',
            img : 'Vector.png'
        }
    ]

    return(
        <>
            <div className={`bg-home-bg w-full px-[250px] text-txt`}>
                <h1 className="text-[58px] font-extrabold w-[1000px]">
                    It's really easy to scan your web application for vulnerabilities
                </h1>

                <div className={`w-full flex h-[100vh]`}>
                    <div>
                        <h1 className="text-[130px] mt-[400px] rotate-[270deg] -tracking-[-20px] font-extrabold">
                            WPScans
                        </h1>
                    </div>
                    <div className="w-[70%] mt-[60px]">
                        {
                            properties.map((item) => (
                                <div key={item.id} className={`flex items-center my-[30px] px-[60px] py-[30px] property gap-[20px] rounded-r-full `}>
                                    <div className={`w-[80%]`}>
                                        <h1 className="text-[40px] font-semibold mb-[20px]">
                                            {item.title}
                                        </h1>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="w-[150px] h-[140px]">
                                        <img className={`w-full h-full`} src={item.img} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </>
    )
}