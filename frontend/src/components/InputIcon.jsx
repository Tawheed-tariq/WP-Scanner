export default function InputIcon({icon, placeholder, handleChange, type, name}){
    return(
        <div className={`flex items-center gap-[10px] pl-[20px] md:pl-[30px] w-[220px] sm:w-[300px] md:w-[450px] bg-primary h-[40px] md:h-[60px] rounded-full`}>
            <img className={`aspect-auto`} src={icon} alt="" />
            <input name={name} onChange={(e)=> handleChange(e)} className={`w-full h-full text-text rounded-full text-[12px] sm:text-[14px] md:text-[20px] placeholder:text-text-80 focus:outline-none px-[10px] bg-primary`} type={type} placeholder={placeholder} />
        </div>
)
}