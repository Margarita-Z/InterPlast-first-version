import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/image/logoInterplast.png";
import "../../../assets/css/header.css";
import  SubMenuHeader  from "./SubMenuHeader";
import { useTranslation } from "react-i18next";


function Header() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const hendleClick = () => setClick(!click);
  
  const { i18n, t } = useTranslation();
 
  const LANGUAGES = [
    { label: "MK", code: "mk" },
    { label: "EN", code: "en" },
  ];

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    localStorage.setItem("lng", lang_code);
  };

  useEffect(() => {
    const code = localStorage.getItem("lng");
    const supportedLanguages = LANGUAGES.flatMap((item) => item.code);
    if (!code || !supportedLanguages.includes(code)) {
      i18n.changeLanguage("mk")
      return
    }
    i18n.changeLanguage(code)
   
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
      <div className="menu-icon" onClick={hendleClick}>
          {click ? (
            <i className="fa-solid fa-xmark" />
          ) : (
            <i className="fa-solid fa-bars" />
          )}
          </div>
        <div className="branding">
          <NavLink to="/" className="branding-logo">
            <img src={logo} alt="" />
          </NavLink>
        </div>

        {/*<input type="checkbox" name="" id="check" />*/}
        <ul className={click ? "menu active" : "menu"}>
          <li>
            <NavLink to="/" className="menu-link" onClick={closeMobileMenu}>
           {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="menu-link" onClick={closeMobileMenu}>
            {t("aboutUs")}
            </NavLink>
          </li>
          <li className="has-dropdown">
            <NavLink to="#" className="menu-link">
              {t("ProductionProgram")}
              <span className="arrow"></span>
            </NavLink>
            <SubMenuHeader closeMobileMenu={closeMobileMenu} />
            {/* <ul className="submenu">
              {menuItems.map((menu, i) => (
                <li key={i} className="has-dropdown">
                  <NavLink to={"/product/" + menu.id} className="menu-link">
                    {menu.title}
                    {menu.subMenu && <span className="arrow"></span>}
                  </NavLink>

                  {menu.subMenu && (
                    <ul className="submenu">
                      {menu.subMenu.map((sub, i) => (
                        <li key={i}>
                          {sub.subMenu && <span className="arrow"></span>}
                          <NavLink
                            to={"/product/" + sub.id}
                            className="menu-link"
                          >
                            {sub.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul> */}
          </li>
          <li>
            <NavLink to="/contact" className="menu-link" onClick={closeMobileMenu}>
              {t("contact")}
            </NavLink>
          </li>
          <div className="custom-select">
            <div className="icon-lang">
              <i className="fa-solid fa-globe"></i>
            </div>
            <select
              defaultValue={localStorage.getItem("lng")}
              onChange={onChangeLang}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code} className="option">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </ul>

       {/* <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
              </div>*/}
      </nav>
    </header>
  );
}

export default Header;
