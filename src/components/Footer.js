import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

        <a href="https://www.instagram.com/v_jordao00/" target="blank"><InstagramIcon /></a>
        <a href="https://www.facebook.com/victor.jordao.735" target="blank"><FacebookIcon/></a>
        <a href="https://www.linkedin.com/in/victor-jordão-b53a68244/" target="blank"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2025 Victorjota-Web.com</p>
    </div>
  );
}

export default Footer;
