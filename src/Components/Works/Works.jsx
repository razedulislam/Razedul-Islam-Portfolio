import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
function Works() {
    return (
        <div className="works">
            <div className="works-awesome">
                <span> Work All Theses </span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit, nam recusandae in corrupti!
                    <br />
                    Lorem ipsum dolor Vero, voluptas.nam recusandae
                    <br />
                    Lorem ipsum dolor Vero, voluptas.
                    <br />
                </span>
                <a href="mailto:your@email.com">
                    <button className="button hire-btn">
                        <span>Hire Me</span>
                    </button>
                </a>

                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side  */}
            <div className="w-right">
                <div className="blur" style={{ top: "6rem", left: "12rem" }}></div>
                <motion.div initial={{ rotate: 65 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 6, type: "spring" }} className="w-mainCircle">
                    <div className="w-seecircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="w-seecircle">
                        <img src={Fiver} alt="" />
                    </div>
                    <div className="w-seecircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-seecircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-seecircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* backgroung-circle  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
}

export default Works;
