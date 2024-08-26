import { Link, useNavigate } from "react-router-dom";
import FormLayout from "../../components/FormLayout";
import InputIcon from '../../components/InputIcon'
import { signupInputs } from "../../constants";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {registerRoute} from '../../utils/apiRoutes'
// export default 
function SignUp(){
    const navigate = useNavigate()

    const [values , setValues] = useState({
        username : "",
        email: "",
        password: "",
        confirmPassword: ""
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
        const {username , email , password , confirmPassword} = values
        if(password != confirmPassword){
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false
        }
        if(username.length < 3){
            toast.error(
                "length of username must be greater than 3",
                toastOptions
            )
            return false
        }
        if (password.length < 8) {
            toast.error(
              "Password should be equal or greater than 8 characters.",
              toastOptions
            );
            return false;
        }
        if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }
        return true;
    }
    
    const handleSubmit = async (event) => {
        try{
            event.preventDefault()
            if(handleValidation()){
                const {username , email, password } = values
                const {data} = await axios.post(registerRoute, {
                    username,
                    email,
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
                    <h1 className="text-[20px] sm:text-[30px] md:text-[40px] text-text font-bold ">Sign Up</h1>

                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-[20px] my-[20px]">
                        {
                            signupInputs.map((item) => (
                                <InputIcon 
                                    key={item.id}
                                    name={item.name} 
                                    handleChange={handleChange} 
                                    icon={item.icon} 
                                    placeholder={item.placeholder}
                                    type={item.type}
                                />
                            ))
                        }
                        <button type="submit" className={`flex text-background sm:text-xl md:text-2xl font-medium items-center justify-center w-[250px] sm:w-[300px] md:w-[450px] bg-accent h-[40px] md:h-[60px] rounded-full`}>
                            Submit
                        </button>
                    </form>
                    
                    <p className={` mt-[5px] md:mt-[20px] text-text font-medium text-[12px] sm:text-[16px] md:text-[20px]`}>Already have an account <Link to={`/login`} className={`text-accent`}>Login</Link> </p>
                </div>
            </FormLayout>
            <ToastContainer/>
        </>
    )
}

