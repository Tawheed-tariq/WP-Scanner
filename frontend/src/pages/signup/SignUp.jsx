import { Link } from "react-router-dom";
import FormLayout from "../../components/FormLayout";
import InputIcon from '../../components/InputIcon'
import { signupInputs } from "../../constants";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp(){
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
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(handleValidation()){
            console.log(values)
        }
    }
    return(
        <>
            <FormLayout>
                <div className={`bg-background-50 flex flex-col w-[600px] items-center justify-center py-[30px] rounded-2xl`}>
                    <h1 className="text-[40px] text-text font-bold ">Sign Up</h1>

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
                        <button type="submit" className={`flex text-txt text-2xl font-medium items-center justify-center w-[450px] bg-accent h-[60px] rounded-full`}>
                            Submit
                        </button>
                    </form>
                    
                    <p className={`mt-[20px] text-text font-medium text-[20px]`}>Already have an account <Link to={`/login`} className={`text-accent`}>Login</Link> </p>
                </div>
            </FormLayout>
            <ToastContainer/>
        </>
    )
}

