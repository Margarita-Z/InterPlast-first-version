import React, { useState } from "react";
import logo from "../../assets/images/logoInterplast.png";
import "../../assets/css/header.css";

function Header() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={header ? "header active" : "header"}>
      <nav className="navbar">
        <div className="branding">
          <h2>
            <a href="/" className="branding-logo">
              <img src={logo} alt="" />
            </a>
          </h2>
        </div>

        <input type="checkbox" name="" id="check" />
        <ul className="menu">
          <li>
            <a href="/" className="menu-link">
              Почетна
            </a>
          </li>
          <li>
            <a href="/about-us" className="menu-link">
              За нас
            </a>
          </li>
          <li className="has-dropdown">
            <a href="#" className="menu-link">
              Производна програма
              <span className="arrow"></span>
            </a>
            <ul className="submenu">
              <li className="has-dropdown">
                <a href="#" className="menu-link">
                  Канализација <span className="arrow"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/product/sewage1" className="menu-link">
                      ПВЦ Канализациони цефки и фитинг SN 2
                    </a>
                  </li>
                  <li>
                    <a href="/product/sewage2" className="menu-link">
                      ПВЦ Канализациони цефки и фитинг SN 4 / SN 8
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#" className="menu-link">
                  Водовод <span className="arrow"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/product/plumbing1" className="menu-link">
                      ХДПЕ Црева
                    </a>
                  </li>
                  <li>
                    <a href="/product/plumbing2" className="menu-link">
                      ЛДПЕ Црева
                    </a>
                  </li>
                  <li>
                    <a href="/product/plumbing3" className="menu-link">
                      ПЕ Механички споен материјал за црева
                    </a>
                  </li>
                  <li>
                    <a href="/product/plumbing4" className="menu-link">
                      ПП-Р Цевки и фитинг
                    </a>
                  </li>
                  <li>
                    <a href="/product/plumbing5" className="menu-link">
                      КМ Цевки под притисок
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#" className="menu-link">
                  Капка систем <span className="arrow"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/products/drip-system1" className="menu-link">
                      ПЕ Црева за наводнување
                    </a>
                  </li>
                  <li>
                    <a href="/products/drip-system2" className="menu-link">
                      ПЕ Фитинг
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/well-pipes" className="menu-link">
                  Бунарски цевки
                </a>
              </li>
              <li>
                <a href="/pe-Hose" className="menu-link">
                  ПЕ Црево за оптички кабел
                </a>
              </li>
              <li>
                <a href="/tehnical-plastic" className="menu-link">
                  Tехничка пластика
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact" className="menu-link">
              Контакт
            </a>
          </li>
          <div className="lang-menu">
            <div className="selected-lang">MK</div>
            <ul>
              <li>
                <a href="" className="en">
                  EN
                </a>
              </li>
              <li>
                <a href="" className="mk">
                  MK
                </a>
              </li>
            </ul>
          </div>
        </ul>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
