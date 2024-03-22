import React from 'react';
import { NavLink } from "react-router-dom";

import { withTranslation } from 'react-i18next';

class SubMenuHeader extends React.Component {
  render() {
    const { t } = this.props; // Access the t function via props
    const {closeMobileMenu} =this.props;
    const menuItems = [
  
      {
        title: t('navMenu.item1'),
        iconClosed: <i className="fa-solid fa-caret-down"></i>,
        iconOpened: <i className="fa-solid fa-caret-up"></i>,
        subMenu: [
          {
            title: t('sub1'),
            id: 1,
          },
          {
            title: t('sub2'),
            id: 2,
          },
        ],
      },
      {
        title: t('navMenu.item2'),
        iconClosed: <i className="fa-solid fa-caret-down"></i>,
        iconOpened: <i className="fa-solid fa-caret-up"></i>,
        subMenu: [
          {
            title: t('sub3'),
            id: 3,
          },
          {
            title: t('sub4'),
            id: 4,
          },
          {
            title: t('sub5'),
            id: 5,
          },
          {
            title: t('sub6'),
            id: 6,
          },
          {
            title: t('sub7'),
            id: 7,
          },
        ],
      },
      {
        title: t('navMenu.item3'),
        iconClosed: <i className="fa-solid fa-caret-down"></i>,
        iconOpened: <i className="fa-solid fa-caret-up"></i>,
        subMenu: [
          {
            title: t('sub8'),
            id: 8,
          },
          {
            title: t('sub9'),
            id: 9,
          },
        ],
      },
      {
        title: t('navMenu.item4'),
        id: 10,
      },
      {
        title: t('navMenu.item5'),
        id: 11,
      },
      {
        title: t('navMenu.item6'),
        id: 12,
      },
    ];

    return (
      <ul className="submenu">
        {menuItems.map((menu, i) => (
          <li key={i} className="has-dropdown">
            <NavLink to={"/product/" + menu.id} className="menu-link" onClick={()=> closeMobileMenu(true)}  >
              {menu.title}
              {menu.subMenu && <span className="arrow"></span>}
            </NavLink>

            {menu.subMenu && (
              <ul className="submenu">
                {menu.subMenu.map((sub, i) => (
                  <li key={i}>
                    {sub.subMenu && <span className="arrow"></span>}
                    <NavLink to={"/product/" + sub.id} className="menu-link" onClick={closeMobileMenu}>
                      {sub.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default withTranslation()(SubMenuHeader);


