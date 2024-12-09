import React from "react";
import "./style.css";
import Medicine from './medicine.jpeg'
import Hand from './hand.jpeg'

const Blog = () => {

  return (
    <section>
      <div className="blog">
      <h2>OUR BLOG</h2>
      <h1>Latest News</h1>
      <div className="blog-grid">
        <div className="cont1">
          <img src={Medicine} alt="medicine" className="medicine"/>
          <img src={Hand} alt="hand" className="hand"/>
        </div>
        <div className="cont1">
          <img src={Hand} alt="medicine" className="hand"/>
          <img src={Medicine} alt="hand" className="medicine"/>
        </div>
        <div className="cont1">
          <img src={Medicine} alt="medicine" className="medicine"/>
          <img src={Hand} alt="hand" className="hand"/>
        </div>
        <div className="cont1">
          <img src={Hand} alt="medicine" className="hand"/>
          <img src={Medicine} alt="hand" className="medicine"/>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Blog;
