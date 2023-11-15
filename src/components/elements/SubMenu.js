import React, { useState } from 'react'

function SubMenu({ item }) {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <a href={item.path} onClick={item.subNav && showSubnav} className='slidebar-link'>
          <div>
            {item.icon}
            <span className='slidebar-label'>{item.title}</span>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </a>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <a className='dropdown-link' href={item.path} key={index}>
                {item.icon}
                <span className='slidebar-label'>{item.title}</span>
              </a>
            );
          })}
      </>
  )
}

export default SubMenu