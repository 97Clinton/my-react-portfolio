import React from "react";
import Navbar from "./navbar/Navbar";
import HomePage from "./homePage/HomePage";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProjectSinglePage from "./projects/projectSinglePage/ProjectSinglePage";
import MainHome from "./MainHome";


function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/projects" element={<ProjectSinglePage />}/>
                <Route path="/" element={<MainHome />}/>
            </Routes>
        </Router>    
    )
};

export default App;