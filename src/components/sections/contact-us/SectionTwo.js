import React from "react";

function SectionTwo() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contactInfo">
          <div>
            <h2>Информации за компанијата</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>
                  ИНТЕРПЛАСТ ДОО
                  <br />
                  Ул. Св. Спасо Радовишки бб
                  <br />
                  2420 Радовиш, Македонија
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <span>Тел: +389 32 634 460</span>
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-fax"></i>
                </span>
                <span>Факс: +389 32 522 460</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span>Емаил: <a href="mailto:info@example.com">Contact@Interplast.mk</a></span>
              </li>
              <li><span><i class="fa-solid fa-clock"></i></span><span>Работно време: <br/>Пон-Саб 	08:00 – 16:00</span></li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href='#'><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href='#'><i className="fa-brands fa-square-instagram"></i></a></li>
            <li><a href='#'><i className="fa-brands fa-viber"></i></a></li>
          </ul>
        </div>
        <div className="contactForm">
            <div className="formBox">
                <div className='inputBox w50'>
                    <input type="text" required />
                    <span>Име</span>
                </div>
                <div className='inputBox w50'>
                    <input type="text" required />
                    <span>Презиме</span>
                </div>
                <div className='inputBox w50'>
                    <input type="email" required />
                    <span>Е-Маил</span>
                </div>
                <div className='inputBox w50'>
                    <input type="" required />
                    <span>Телефон</span>
                </div>
                <div className='inputBox w100'>
                    <textarea required></textarea>
                    <span>Порака</span>
                </div>
                <div className='inputBox w100'>
                    <input type="submit" value='Прати' />
                </div>
                <p className="about-section-one-subtitle">
                Ние сме тука да помогнеме и да одговориме на секое прашање што
                може да го имате.Контактирајтене, пишете ни или посететене во нашиот холдинг.Ние ве очекуваме!
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
