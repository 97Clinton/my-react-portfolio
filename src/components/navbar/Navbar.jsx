import React from 'react';
import "./navbar.scss";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectSinglePage from '../projects/projectSinglePage/ProjectSinglePage';

const navContainerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    }
}

const navChildrenVariants = {
    hidden: {
        // y: "90vh",
        x: "-100vw",
        opacity: 0
    },
    visible: {
        // y: 0,
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
        }
    }
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <div className="navbar">
            <div className="left"><h2 className='header-h2'><a href=""> <span>Clin</span>Tech</a></h2></div>
            <div className="right">
                <a href="/">Home</a>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/experience"}>Experience</Link>
                <Link to={"/certifications"}>Certification</Link>
                <a href="#contact">Contact</a>
            </div>
            <div className="menu">
                <a class="btn btn-primary" onClick={() => setIsOpen(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><img src="./menu.png" alt="" /></a>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div class="offcanvas-header">
                      <h2 class="offcanvas-title" id="offcanvasWithBackdropLabel"><span>Clin</span>Tech</h2>
                      <button type="button" class="btn-close text-reset"  data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <motion.div 
                        variants={navContainerVariants}
                        animate={ isOpen ? "visible" : "hidden"}
                        class="offcanvas-body menu-links">
                        <motion.a 
                            variants={navChildrenVariants}
                            href="/" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Home
                        </motion.a>
                        
                        <motion.a variants={navChildrenVariants} 
                            href="/projects" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Projects</motion.a>
                        <motion.a variants={navChildrenVariants} 
                            href="/experience" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Experience</motion.a>
                        <motion.a variants={navChildrenVariants} 
                            href="/certifications" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Certification</motion.a>
                        <motion.a variants={navChildrenVariants} 
                            href="/#contact" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Contact</motion.a>
                    </motion.div>
                </div>

                
            </div>
        </div>
    )
}

export default Navbar;