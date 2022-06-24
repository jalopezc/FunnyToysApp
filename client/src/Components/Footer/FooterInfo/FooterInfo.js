import React from "react";
import "./FooterInfo.css"


const FooteInfo = ({title,info1, info2, info3}) => (
    <div className="footerInfo">
        <a href="">{title}</a>
        <h5>{info1}</h5>
        <h5>{info2}</h5>
        <h5> {info3}</h5>
     
    </div>
);
export default FooteInfo;