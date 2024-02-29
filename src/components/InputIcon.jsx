export default function InputIcon({icon, placeholder}){
    return(
        <div className={`flex items-center gap-[10px] pl-[30px] w-[450px] bg-primary h-[60px] rounded-full`}>
            <img src={icon} alt="" />
            <input className={`w-full h-full text-text rounded-full text-[20px] placeholder:text-text-80 focus:outline-none px-[10px] bg-primary`} type="text" placeholder={placeholder} />
        </div>
)
}