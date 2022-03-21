import React from "react"
import ReactLogo from "./images/react-logo.png"

export default function Navbar(props){

    return  <nav className={props.darkMode ? "dark" : ""}>
                <img src={ReactLogo} alt="react logo" className="logo" />
                <h3 className="nav--logo--text">ReactFacts</h3>
                <div className="toggle">
                    <p className="toggle--light">Light</p>
                    <div className="toggle--slider" onClick={props.toggleDarkMode}>
                        <div className="toggle--slider--circle"></div>
                    </div>
                    <p className="toggle--dark">Dark</p>
                </div>
            </nav>
}