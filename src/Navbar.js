import React from "react"
import ReactLogo from "./images/react-logo.png"

export default function Navbar(){
    return  <nav>
                <img src={ReactLogo} alt="react logo" className="logo" />
                <h3 className="nav-logo-text">ReactFacts</h3>
                <h4 className="nav-text">React Course - Project 1</h4>
            </nav>
}