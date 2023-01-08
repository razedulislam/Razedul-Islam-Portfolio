import React from "react";
import "./Footer.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Facebook from "../../img/Facebook.png";
//add @iconsscout/react-unicorns
function Footer() {
    return (
        <div>
            <div className="f-content">
                <div className="email">
                    <span>
                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Email</span> : razedulislam2017@gmail.com
                    </span>
                    <br />
                    <span>
                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Phone</span> : 01306-066630
                    </span>
                    <br />
                    <span>Dhaka,Bangladesh</span>
                </div>
                <div className="i-icons">
                    <a href="https://github.com/razedulislam" target="blank">
                        {" "}
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/razedul-islam-177873246/" target="blank">
                        {" "}
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.facebook.com/razedul.islam.75" target="blank">
                        {" "}
                        <img src={Facebook} alt="" />
                    </a>
                </div>
                <div className="copywrite">
                    <p>All rights reserved by | Razedul Islam @2022 | Built with ReactJS</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
