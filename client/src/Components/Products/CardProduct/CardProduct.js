import React from "react";
import "./CardProducts.css"
import Ball from "./bal.jpg";
import CardInfo from "./CardInfo/CardInfo";

const CardProducts = () => (
    <div className="cardProducts">
        <img src={Ball}></img>   
        <CardInfo/> 
    </div>
);
export default CardProducts;