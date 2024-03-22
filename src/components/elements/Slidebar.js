import React from "react";
import "../../assets/css/slidebar.css";
import SubMenu from "./SubMenu";
import { SlidebarData } from "./SlidebarData";

function Slidebar() {
  return (
    <nav className="slidebar-nav">
      <div className="slidebar-wrap">
        <div className="slider-top">
          <h4 className="m_2">Категории</h4>
        </div>
        <hr
          style={{ display: "block", background: "#CE2027", height: "0.25rem" }}
        />
        {SlidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </nav>
  );
}

export default Slidebar;
