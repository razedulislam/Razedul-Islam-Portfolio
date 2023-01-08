import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
function Services() {
    return (
        <div className="services" id="Services">
            {/* left side  */}
            <div className="awesome">
                <span> My Awesome </span>
                <span>Services</span>
                <span>
                    Proficient with: Javascript (ES6), React, React Router, React Bootstrap,
                    <br />
                    Bootstrap 5, HTML, and CSS, Flexbox and grid layout.
                </span>
                <span>
                    <a href="razedul.pdf" download>
                        <button className="button s-button">Download CV</button>
                    </a>
                </span>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side  */}
            <div className="cards">
                <div style={{ left: "14rem" }}>
                    <Card emoji={Heartemoji} heading={"Skills"} details={"C++, Javascript, HTML5, CSS3"} />
                </div>
                <div className="blur s-blur1"></div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card emoji={Heartemoji} heading={"Framework"} details={"Bootstrap, Tailwind, ReactJs"} />
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card emoji={Heartemoji} heading={"Other Skills"} details={"Git, Chrome DevTools , Restful API"} />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    );
}

export default Services;
