import FormLayout from "../../components/FormLayout";
import InputIcon from '../../components/InputIcon'
export default function SignUp(){

    const signupInputs = [
        {
            id: 1,
            icon : 'user.png',
            placeholder : 'Username'
        },
        {
            id: 2,
            icon : 'mail.png',
            placeholder : 'Email'
        },
        {
            id: 1,
            icon : 'paasword.png',
            placeholder : 'Password'
        },
        {
            id: 1,
            icon : 'paasword.png',
            placeholder : 'Confirm Password'
        }
    ]

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
                </div>
            </FormLayout>
        </>
    )
}

