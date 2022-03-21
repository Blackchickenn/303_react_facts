import React from "react"
import Navbar from "./Navbar"
import MainContent from "./MainContent"

export default function App(){
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode(){
        console.log("click")
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <MainContent darkMode={darkMode}/>
        </div>
    )
}