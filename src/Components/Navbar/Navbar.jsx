import React from "react";
import Toggles from "../Toggles/Toggles";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Razedul</div>

                <span>
                    <Toggles />
                </span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to="Experiences" smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to="Protfolia" smooth={true}>
                            <li>Protfolia</li>
                        </Link>
                        <Link spy={true} to="Testmonials" smooth={true}>
                            <li>Testmonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button nav-btn">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;
