import React from "react";
import Navbar from "./navbar/Navbar";
import HomePage from "./homePage/HomePage";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";



function MainHome() {
    return(
        <div>
            <Navbar />
            <HomePage />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
};

export default MainHome;