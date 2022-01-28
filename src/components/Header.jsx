import React from "react";
import "./Header.css"
import HeaderImage from "../images/header-image.jpg"


const Header = () => {

    function scrollSmooth() {
        document.documentElement.style.scrollBehavior = "smooth";
    }

    return (
        <header>
            <div className="header-content">
               <h1>Find the purr-fect partner for your home</h1>
               <p>
                   <span>Adorable, curious, and loyal - </span>
                    cats can make amazing lifelong companions for you and your family.
                </p>
               <p>Get your new furry friend <span>today!</span></p>
               
               <a href="#cats" onclick={scrollSmooth()}>
                   <button>Explore</button>
               </a>
               
            </div>
            <div>
                <div className="header-image-box">
                <img src={HeaderImage} alt="header-image" />
            </div>
            </div>
        </header>
    )
}

export default Header;