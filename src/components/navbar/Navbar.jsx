import React from 'react'
import ReactDOM from 'react-dom'
import "./navbar.scss";
import { useState } from 'react';

function Navbar() {
    const [clicked, isClicked] = useState(false); 
    // const user = true;

    return (
        <div className="navbar">
            <div className="left"><h2><a href=""> <span>Clin</span>Tech</a></h2></div>
            <div className="right">
                <a href="#homePage">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="menu">
                <a class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><img src="./menu.png" alt="" /></a>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div class="offcanvas-header">
                      <h2 class="offcanvas-title" id="offcanvasWithBackdropLabel"><span>Clin</span>Tech</h2>
                      <button type="button" class="btn-close text-reset"  data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <div class="offcanvas-body menu-links">
                        <a href="#homePage" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Home</a>
                        <a href="#about" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>About</a>
                        <a href="#projects" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Projects</a>
                        <a href="#contact" data-bs-dismiss="offcanvas" onClick={(e) => {e.stopPropagation()}}>Contact</a>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Navbar;