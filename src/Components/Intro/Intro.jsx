import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Facebook from "../../img/Facebook.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/rajedul.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Floating from "../Floating/Floating";
import { motion } from "framer-motion";

function Intro() {
    const transition = { duration: 2, type: "spring" };
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am</span>
                    <span>Razedul Islam</span>
                    <span>
                        Frontend Developer with high level of experience in with designing
                        <br />
                        and development, producing the quality work
                    </span>
                </div>
                <a href="mailto:your@email.com">
                    <button className="button i-button">Hire Me</button>
                </a>

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
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />

                <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-24%" }} transition={transition} src={Glassesimoji} alt="" className="floatingDiv" />
                <motion.div initial={{ top: "4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} style={{ top: "-4%", left: "68%" }} className="floatingDiv">
                    <Floating image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>
                <motion.div initial={{ top: "18rem", left: "9rem" }} whileInView={{ left: "8rem" }} transition={transition} style={{ top: "18rem", left: "0rem" }}>
                    <Floating image={Thumbup} txt1="Good" txt2="Programmer" />
                </motion.div>
                {/* blur color */}
                <div className="blur" style={{ background: "rgb(288,210,255" }}></div>
                <div className="blur" style={{ background: " #C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
            </div>
        </div>
    );
}

export default Intro;
