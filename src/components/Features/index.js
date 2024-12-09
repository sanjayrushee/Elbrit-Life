import React from "react";
import "./style.css";
import { FaFlask } from "react-icons/fa";

const Features = () => {
  const features = [
    { title: "Clinically Studied", description: "All products that we offer have undergone lab and safety tests"},
    { title: "Vegetarian Friendly", description: "We have a wide selections of vegetrains products to meet your needs" },
    { title: "Made in India", description: "Shop local and explore health products made right here in india" },
    { title: "Free Shipping", description: "We deliver to your door with no shipping costs on your order" },
    { title: "No Risk", description: "We ensure that all products are safe and within theri user by date." },
    { title: "GMO Free", description: "Natural no modified products and derivations for those whi need it." },
  ];

  return (
    <section className="feature-container">
      <div className="features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="flaskImage">
                     <FaFlask />
                </div>
                <h3 className="title">{feature.title}</h3>
                <p className="description">{feature.description}</p>
              </div>
            ))}
       </div>
    </section>
  );
};

export default Features;
