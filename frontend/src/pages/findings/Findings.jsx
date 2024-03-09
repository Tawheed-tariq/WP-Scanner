import DashboardLayout from "../../components/DashboardLayout";
import { resultToSend } from "../../constants/finding";
import Result from "./components/Result";

export default function Findings(){
    return(
        <DashboardLayout title={`Findings`}>
            {
                resultToSend.map((result) => (
                    <Result
                        key={result.id}
                        title={result.title}
                        img={result.img}
                        target={result.target}
                        response={result.response}
                    />
                ))
            }
        </DashboardLayout>
    )
}
