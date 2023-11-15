import React from "react";
import image from "../../../assets/images/about us.png";

function SectionTwo() {
  return (
    <div className="home_hero_section">
      <div className="container">
        <div className="row home-hero_row">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="home_hero-img-wrapper">
              <div className="home__hero-img">
                <img src={image} alt="" className="home__hero-img" />
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <div className="home_hero-text-wrapper">
              <div className="top-line">За нас</div>
              <h1 className="heading">
                Интерпласт има решение за сите ваши проблеми со управување на
                водните системи.
              </h1>
              <hr />
              <p className="home_hero-subtitle">
                Нашиот асортиман на производи е широк и разновиден, затоа
                Брендот Интерпласт и неговите производи се едни од најбараните
                на Македонскиот пазар , поради нивниот извонреден квалитет,
                квалитет споредлив со европските производи на пазарот.
              </p>
              <a href="/about-us" className="btn ">
                Повеќе
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
