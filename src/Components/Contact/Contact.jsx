import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";
//https://www.emailjs.com/docs/examples/reactjs/

//here I have used emailjs services to get message from cliend
function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_eyk8g4i", "template_f1hxnu4", form.current, "KPODFvBAJpaCoF8ER").then(
            (result) => {
                console.log(result.text);
                setDone(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="contact">
                    <h1 style={{ color: "var(--orange)", fontSize: "2rem" }}>Get in touch</h1>
                    <h1 style={{ fontSize: "2rem" }}>Contact me</h1>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className="user" name="user_name" id="" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" id="" />
                    <textarea name="message" className="user" placeholder="Message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send" className="button" />
                    <span>{done === true && "Send Successfully , Thanks for contact with me"}</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
