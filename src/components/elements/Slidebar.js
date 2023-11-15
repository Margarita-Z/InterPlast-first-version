import React from "react";
import "../../assets/css/slidebar.css";
import SubMenu from "./SubMenu";
import { SlidebarData } from './SlidebarData';

function Slidebar() {


  return (
    <nav className="slidebar-nav" >
      <div className="slidebar-wrap">
        {SlidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />
        })}
      </div>
    </nav>
  );
}

export default Slidebar;
