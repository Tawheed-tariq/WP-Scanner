import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Working from "./components/Working";

export default function Home(){
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
