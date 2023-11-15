import React from "react";
import Slidebar from "../../elements/Slidebar";

function SectionOne() {
  return (
    <div className="product_hero_section">
    <div className="container">
      <div className="row product-hero_row">
        <div
          className="col1"
        >
          <div className="product_hero-img-wrapper">
            <div className="product__hero-img">
              <Slidebar />
            </div>
          </div>
        </div>
        <div
          className="col2"
        >
          <div className="home_hero-text-wrapper">
            <div className="top-line"></div>
            <h1 className="heading">
             
            </h1>
           
            <p className="home_hero-subtitle">
              
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SectionOne;
