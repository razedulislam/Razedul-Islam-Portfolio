import React from "react";
import "./Card.css";
function Card({ emoji, heading, details }) {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span className="c-heading">{heading}</span>
            <span className="c-details">{details}</span>
            <button className="c-button">Learn More</button>
        </div>
    );
}

export default Card;
