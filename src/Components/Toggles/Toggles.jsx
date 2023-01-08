import React from "react";
import "./Toggles.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
//https://www.npmjs.com/package/@iconscout/react-unicons
function Toggles() {
    const darkMood = () => {
        document.body.style.backgroundColor = "#EFFFDF";
    };
    return (
        <div className="toggle">
            <Sun />
            <Moon />
            <div onClick={darkMood} className="t-button" title="Change Background"></div>
        </div>
    );
}

export default Toggles;
