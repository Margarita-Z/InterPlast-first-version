import React from "react";
import "../../../assets/css/changeAboutUs.css";
import image2 from "../../../assets/image/inter-plast.jpg";
import { useTranslation } from "react-i18next";

function ChangeAboutUs() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container bottomContainer">
          <div
            className="ultimateImg"
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <img className="mainImg" src={image2} alt="" />
            <div className="purpleBox">
              <p className="purpleText">
                <span>{t("interplast")}</span>
                <br />
                {t("expirience")}
              </p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div
            className="allText bottomText"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="text-blk headingText">{t("aboutUs")}</p>
            <p className="text-blk subHeadingText">{t("homeSec2Heading")}</p>
            <p className="text-blk description">{t("homeSec2Subtite")}</p>
            <a href="/about-us" className="explore">
              {t("btn")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeAboutUs;
