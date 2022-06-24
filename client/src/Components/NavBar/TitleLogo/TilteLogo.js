import React from "react";
import "./TitleLogo.css"
import Logo from "./Logo/Logo"
import Title from "./Title/Title";

const TitleLogo = () =>(
    <div className="titleLogo">
        <Logo/>
        <Title/>
    </div>
);

export default TitleLogo;