import React from "react";
import Slidebar from "../../elements/Slidebar";
import CardsProducts from "../../elements/CardsProducts";


function SectionOne() {
  return (
    <div className="product_hero_section">
      <div className="container">
        <div className="row product-hero_row">
          <div className="col1">
            <div className="product_hero-img-wrapper">
             <Slidebar />
            </div>
          </div>
          <div className="col2">
            <div className="product_hero-img-wrapper">
              <CardsProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
