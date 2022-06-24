import React from "react";
import "./Categories.css";
import CircleCard from "./CircleCard/CircleCard";

import Sports from "./sport.webp";
import Car from "./car.jpg"
import Lego from "./logoLego.png"
import Barbie from "./logoBarbie.jpg"



const Categories = () => (
    
    <div className="categories">
        <CircleCard  imgC={Sports}  title="SPORTS" />
        <CircleCard  imgC={Car} title="CARS"/>
        <CircleCard  imgC={Lego} title="LEGOS"/>
        <CircleCard  imgC={Barbie} title="DOLLS"/>        
    </div>
);

export default Categories;