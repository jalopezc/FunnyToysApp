import React from "react";
import TitleLogo from "./TitleLogo/TilteLogo";
import UserTools from "./UserTools/UserTools";
import Options from "./Options/Options"
import "./NavBar.css"



 const NavBar = () =>(
        <div className="navBar">
        <TitleLogo/>
        <Options/>
        <UserTools/>

        </div>
 )

export default NavBar