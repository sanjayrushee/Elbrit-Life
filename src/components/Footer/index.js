import React from "react";
import "./style.css";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Logo from './logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="contain">
          <GiRotaryPhone className="icon-image" />
          <p className="content">Phone Number <br /> +974 3316 1843</p>
        </div>
        <div className="contain">
          <MdAttachEmail className="icon-image" />
          <p className="content">Email Adress <br /> Elbritofficial@gmail.com</p>
        </div>
        <div className="contain">
          <IoLocationSharp className="icon-image" />
          <p className="content"> Office Location <br /> Ambassador Street, Zone 61</p>
        </div>
      </div>
      <div className="footer-last-container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <p className="footer-content">Your health, physical and emotional well-being is important <br /> to us. We are always by your side and hve made it even <br /> easier for you to find the necessary vitamins.</p>
      </div>
      <div className="location-container">
        <IoLocationSharp  className="location-icon"/>
        <p className="location-Nmae">Elbrit Life Science Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>


    </footer>
  );
};

export default Footer;
