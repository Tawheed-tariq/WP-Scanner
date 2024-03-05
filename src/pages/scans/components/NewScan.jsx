import DashboardLayout from "../../../components/DashboardLayout";

export default function NewScan(){
    return(
       <DashboardLayout title={`Scans/${`Active Scan`}`}>
            <div className={`flex justify-between flex-wrap px-[20px] py-[10px]`}>
                <div className={`flex-1`}>
                    <form className={`flex flex-col gap-[10px]`}>
                        <div className={`flex flex-col gap-[5px] p-[5px]`}>
                            <label className={`font-medium text-text`} htmlFor="name">Name</label>
                            <input className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 placeholder:text-[18px] focus:outline-none`} type="text" name="name" placeholder="Name of scan" />
                        </div>

                        <div className={`flex flex-col gap-[5px]`}>
                            <label className={`font-medium text-text`} htmlFor="target">Target</label>
                            <input className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 placeholder:text-[18px] focus:outline-none`} type="text" name="target" placeholder="Example : 127.0.0.1" />
                        </div>

                        <div className={`flex flex-col gap-[5px]`}>
                            <label className={`font-medium text-text`} htmlFor="description">Description</label>
                            <textarea className={`bg-secondary px-[20px] max-w-[400px] py-[10px] rounded-xl placeholder:text-text-80 placeholder:text-[18px] focus:outline-none`} name="description" placeholder="Description of your scan" cols="30" rows="10"></textarea>
                        </div>

                        <button className={`bg-accent mt-[10px] text-[20px] text-txt font-medium max-w-[120px] px-[10px] py-[10px] rounded-xl`} type="submit">
                            Start Scan
                        </button>
                    </form>
                </div>
                <div className={`flex-1`}>
                    <h1 className="text-[30px] text-accent font-medium ">
                        Active Scan
                    </h1>
                    <p>
                        
                    </p>
                </div>
            </div>
       </DashboardLayout>
    )
}