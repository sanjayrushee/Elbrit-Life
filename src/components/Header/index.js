import React from "react";
import Bottle from './bottle.png'
import Logo from './logo.png'
import Vitamin from './vitamin.png'
import Functional from './functionalFood.png'
import Weightloss from './weightLoss.png'
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="header-container">
        <h1 className="main-heading">Essential Vitamins</h1>
        <div className="main-container">
          <div className="firstSection">
            <p className="p1">Online Medical Supplies. </p>
            <p className="p2">Get Your Vitamins & Minerals</p>
            <button className="button">Explore</button>
          </div>
          <div className="image-container">
          <img src={Bottle} alt="img" className="image"/> 
          </div>
          <div className="info-cards">
            <div className="card-container">
              <img src={Vitamin} alt="vitamin" className="vitamin-image"/>
              <div>
                <h2>Vitamins</h2>
                <p>Incresed Vitamins and minerals in your diet</p>
              </div>
            </div>
            <div className="card-container">
              <img src={Functional} alt="vitamin" className="vitamin-image"/>
              <div>
                <h2>Weight Loss</h2>
                <p>Weight Loss <br/> Find scientifically proven solutions</p>
              </div>
            </div>
            <div className="card-container">
              <img src={Weightloss} alt="vitamin" className="vitamin-image"/>
              <div>
                <h2>Functional Foods</h2>
                <p>Functional foods <br/> From protein powers to baby forumla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
