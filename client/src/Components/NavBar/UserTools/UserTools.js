import React from "react";
import Car from "./Car/Car";
import Search from "./Search/Search";
import User from "./User/User";
import "./UserTools.css"



const UserTools = () => (
    <div className="userTools">
        <Search/>
        <User/>
        <Car/>
        
    </div>
);

export default UserTools;