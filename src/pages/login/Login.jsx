import { Link } from "react-router-dom";
import FormLayout from "../../components/FormLayout";
import InputIcon from '../../components/InputIcon'
import { loginInputs } from "../../constants";
import { useState } from "react";

export default function Login(){
    const [values , setValues] = useState({
        username : "",
        password: "",
    })

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values)
        return false
    }
    return(
        <>
            <FormLayout>
                <div className={`bg-background-50 flex flex-col w-[600px] items-center justify-center py-[30px] rounded-2xl`}>
                    <h1 className="text-[40px] text-text font-bold ">Sign In</h1>

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
                        <button type="submit" className={`flex text-txt text-2xl font-medium items-center justify-center w-[450px] bg-accent h-[60px] rounded-full`}>
                            Sign In
                        </button>
                    </form>
                    

                    <p className={`mt-[20px] text-text font-medium text-[20px]`}>Don't have an account <Link to={`/signup`} className={`text-accent`}>Create One</Link> </p>
                </div>
            </FormLayout>
        </>
    )
}

