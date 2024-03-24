import { Link, useNavigate } from "react-router-dom";
import FormLayout from "../../components/FormLayout";
import InputIcon from '../../components/InputIcon'
import { loginInputs } from "../../constants";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {loginRoute} from '../../utils/apiRoutes'
import axios from 'axios'
export default function Login(){
    const navigate = useNavigate()
    const [values , setValues] = useState({
        username : "",
        password: "",
    })

    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
    };

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }
    const handleValidation = () => {
        const {username , password } = values
        if(username === ""){
            toast.error(
                "Username and password is required",
                toastOptions
            )
            return false
        }
        if (password === "") {
            toast.error(
                "Username and password is required",
              toastOptions
            );
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        try{
            event.preventDefault()
            if(handleValidation()){
                const {username , password } = values
                const {data} = await axios.post(loginRoute, {
                    username,
                    password,
                })
                if(data.status === false){
                    toast.error(data.message, toastOptions)
                }
                else{
                    localStorage.setItem("wp-scan-user", JSON.stringify(data.username))
                    navigate('/dashboard')
                }
            }
        }
        catch(error){
            console.log(error.message)
        }
    }

    //if user already present in local storage then navigates to chat section
    useEffect(() =>{
        if(localStorage.getItem("wp-scan-user"))
        navigate('/dashboard')
    }, [])
    return(
        <>
            <FormLayout>
                <div className={`bg-background-50 flex flex-col px-[20px] sm:px-[40px] md:px-[70px] items-center justify-center py-[30px] rounded-2xl`}>
                    <h1 className="text-[20px] sm:text-[30px] md:text-[40px] text-text font-bold ">Sign In</h1>

                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-[20px] my-[20px]">
                        {
                            loginInputs.map((item) => (
                                <InputIcon 
                                    key={item.id} 
                                    icon={item.icon} 
                                    handleChange={handleChange}
                                    placeholder={item.placeholder}
                                    type={item.type}
                                    name={item.name}
                                />
                            ))
                        }
                        <button type="submit" className={`flex text-txt sm:text-xl md:text-2xl font-medium items-center justify-center w-[250px] sm:w-[300px] md:w-[450px] bg-accent h-[40px] md:h-[60px] rounded-full`}>
                            Sign In
                        </button>
                    </form>
                    

                    <p className={`mt-[5px] md:mt-[20px] text-text font-medium text-[12px] sm:text-[16px] md:text-[20px]`}>Don't have an account <Link to={`/signup`} className={`text-accent`}>Create One</Link> </p>
                </div>
            </FormLayout>
            <ToastContainer/>
        </>
    )
}

