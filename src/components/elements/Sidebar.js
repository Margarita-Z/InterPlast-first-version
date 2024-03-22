import React from 'react';
// import { menuItems } from '../layout/header/dataNavbar';
import SubMenu from './SubMenu';
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();
  
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
    <nav className="slidebar-nav">
    <div className="slidebar-wrap">
      <div className="slider-top">
        <h4 className="m_2">{t("category")}</h4>
      </div>
      <hr
        style={{ display: "block", background: "#CE2027", height: "0.25rem" }}
      />
      {menuItems.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })} 
    </div>
  </nav>
  )
}

export default Sidebar
