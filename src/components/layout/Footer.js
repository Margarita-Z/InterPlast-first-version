import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li>
            <NavLink to="https://www.facebook.com/profile.php?id=100057457568573" target="_blank" >
              <i className="fa-brands fa-facebook"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="tel:+389 32 634 460">
              <i className="fa-brands fa-viber"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="mailto:info@example.com">
              <i className="fa-solid fa-envelope"></i>
            </NavLink>
          </li>
        </ul>
        {/*<ul className="menu-footer">
          <li>
            <NavLink to="/"> {t("home")}</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">{t("aboutUs")}</NavLink>
          </li>
          <li>
            <NavLink to="#"> {t("ProductionProgram")}</NavLink>
          </li>

          <li>
            <NavLink to="/contact">{t("contact")}</NavLink>
          </li>
  </ul>*/}
        <p>
          ©2024 - <span>{t("interplast")}</span>. {t("footer")}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
