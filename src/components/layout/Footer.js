import React from "react";
import "../../assets/css/footer.css";

function Footer() {
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
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-viber"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <ul className="menu-footer">
          <li>
            <a href="/">Почетна</a>
          </li>
          <li>
            <a href="/about-us">За нас</a>
          </li>
          <li>
            <a href="#">Производна програма</a>
          </li>

          <li>
            <a href="/contact">Контакт</a>
          </li>
        </ul>
        <p>
          ©2023 - <span>Интерпласт</span>. Сите права задржани
        </p>
      </footer>
    </div>
  );
}

export default Footer;
