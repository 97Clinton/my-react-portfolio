import React from 'react'
import ReactDOM from 'react-dom'
import "./navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left"><h2><a href=""> <span>Clin</span>Tech</a></h2></div>
            <div className="right">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
            <div className="menu">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><img src="./menu.png" alt="" /></button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div class="offcanvas-header">
                      <h2 class="offcanvas-title" id="offcanvasWithBackdropLabel"><span>Clin</span>Tech</h2>
                      <button type="button" class="btn-close text-reset"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body menu-links">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Projects</a>
                        <a href="">Contact</a>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Navbar;