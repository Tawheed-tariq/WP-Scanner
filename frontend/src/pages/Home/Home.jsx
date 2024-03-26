import { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Working from "./components/Working";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()
    //if user already present in local storage then navigates to chat section
    useEffect(() =>{
        if(localStorage.getItem("wp-scan-user"))
        navigate('/dashboard')
    }, [])
    return(
        <div className={`w-[100vw] h-[100vh] bg-background`}>
            <NavBar/>
            <Hero/>
            <Working/>
            <About/>
            <Footer/>
        </div>
    )
}
