import React from "react";
import "./CircleCard.css";
import sport from "./../sport.webp"

const CircleCard = ({imgC,title}) => (
    <div className="circleCard">
        <img src={imgC}/>
        <h3>{title}</h3>

    </div>
);
export default CircleCard;