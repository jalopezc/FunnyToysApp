import React from "react";
import "./Footer.css"
import FooterInfo from "./FooterInfo/FooterInfo"


const Footer = () => (
    <div className="footer">
        <FooterInfo title="Contact Us" info1="funnyToy@toyWorld.com" info2="Tel: 830 787 4567" info3=" FAQ"/>
        <FooterInfo title="About Us" info1="History" info2="People" info3="Brands"/>
        <FooterInfo title="Social Media" info1="Instagran" info2="Twitter" info3="Facebook"/>
    </div>
);
export default Footer;