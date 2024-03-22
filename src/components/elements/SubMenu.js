import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function SubMenu({ item }) {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <NavLink to={item.path} onClick={item.subMenu && showSubnav} className='slidebar-link'>
          <div>
            {item.icon}
            <span className='slidebar-label'>{item.title}</span>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subMenu
              ? item.iconClosed
              : null}
          </div>
        </NavLink>
        {subnav &&
          item.subMenu.map((item, index) => {
            return (
              <NavLink className='dropdown-link' to={"/product/" + item.id} key={index}>
                {item.icon}
                <span className='slidebar-label'>{item.title}</span>
              </NavLink>
            );
          })}
      </>
  )
}

export default SubMenu
