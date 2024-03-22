import React from "react";
import image1 from "../../../assets/image/AboutUs1.jpg";
import image2 from "../../../assets/image/inter-plast.jpg";
import image3 from "../../../assets/image/gallery/banner2.jpg";
import image4 from "../../../assets/image/IMG_4371.jpg";
import { useTranslation } from "react-i18next";

function HomeSectionTwo() {
  const { t } = useTranslation();

  return (
    <div className="home_section-two">
      <div className="container">
        <div className="row home-hero_row">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="home_hero-img-wrapper">
              <div className="image-gallery">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
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
              <div className="top-line">{t("aboutUs")}</div>
              <h1 className="heading">{t("homeSec2Heading")}</h1>
              <hr />
              <p className="home_hero-subtitle">{t("homeSec2Subtite")}</p>
              <a href="/about-us" className="btn ">
                <span>{t("btn")}</span>
                <span>{t("btn")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionTwo;
