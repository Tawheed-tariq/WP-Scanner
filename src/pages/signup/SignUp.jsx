import { Link } from "react-router-dom";
import FormLayout from "../../components/FormLayout";
import InputIcon from '../../components/InputIcon'
import { signupInputs } from "../../constants";
export default function SignUp(){
    return(
        <>
            <FormLayout>
                <div className={`bg-background-50 flex flex-col w-[600px] items-center justify-center py-[30px] rounded-2xl`}>
                    <h1 className="text-[40px] text-text font-bold ">Sign Up</h1>

                    <form className="flex flex-col gap-[20px] my-[20px]">
                        {
                            signupInputs.map((item) => (
                                <InputIcon key={item.id} icon={item.icon} placeholder={item.placeholder}/>
                            ))
                        }
                    </form>
                    <button type="submit" className={`flex text-txt text-2xl font-medium items-center justify-center w-[450px] bg-accent h-[60px] rounded-full`}>
                        Submit
                    </button>

                    <p className={`mt-[20px] text-text font-medium text-[20px]`}>Already have an account <Link to={`/login`} className={`text-accent`}>Login</Link> </p>
                </div>
            </FormLayout>
        </>
    )
}

