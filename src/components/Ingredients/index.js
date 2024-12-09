import React from "react";
import "./style.css";
// import { GiLiquidSoap } from "react-icons/gi";
import Magnesium from './magnesium.png'

const Ingredients = () => {
  const ingredients = [
    { name: "Vitamin C", description: "Boost immunity.", img: "image3.jpg" },
    { name: "Vitamin B3", description: "Healthy growth.", img: "image3.jpg" },
    { name: "Magnesium", description: "Support muscles.", img: "image3.jpg" },
    { name: "Hyaluronic Acid", description: "Skin health.", img: "image3.jpg" },
    { name: "Lactobacillus", description: "Gut health.", img: "image3.jpg" },
  ];

  return (
    <section className="ingredients">
      <div className="ingredients-grid">
        <div className="section2">
          <h2>Better Ingredients</h2>
          <p>Only the best when you choose and support muscle function</p>
        </div>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-card">
            <div className="ingredient-content-conttainer">
              <h3>{ingredient.name}</h3>
              <p>{ingredient.description}</p>
              <button className="seeMore">SEE MORE</button>
            </div>
            <div className="image-container2">
              <img src={Magnesium} alt={ingredients.name} className="liquid-image" />
            </div>


          </div>
        ))}
      </div>
    </section>
  );
};

export default Ingredients;
