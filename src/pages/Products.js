import React from "react";
import "../assets/css/product.css";
import Sidebar from "../components/elements/Sidebar";
import CardProducts from "../components/elements/CardProducts";

function Products() {
  return (
    <div className="product_hero_section">
      <div className="container">
        <div className="row product-hero_row">
          <div className="col1">
            <div className="product_hero-img-wrapper">
              <Sidebar />
            </div>
          </div>
          <div className="col2">
            <div className="product_hero-img-wrapper">
            <CardProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
