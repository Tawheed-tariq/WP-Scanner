import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./Navbar";
import Working from "./Working";

export default function Home(){
    return(
        <div className={`w-[100vw] h-[100vh] bg-home-bg`}>
            <NavBar/>
            <Hero/>
            <Working/>
            <About/>
            <Footer/>
        </div>
    )
}
