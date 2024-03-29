export default function Notfound(){
    return(
        <div className={`w-[100vw] h-[100vh] bg-white flex flex-col justify-center items-center`}>
            <h1 className="text-gray-400 font-extrabold text-9xl py-14 leading-10 overflow-hidden">
                404
            </h1>
            <h1 className="text-gray-400 font-medium text-3xl">
                The page you have entered does not exist
            </h1>
        </div>
    )
}