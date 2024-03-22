import React from "react";
import { useTranslation } from "react-i18next";

function HomeSectionThree() {
  const { t } = useTranslation();

  return (
    <div className="home-section-three">
      <div className="three">
        <div className="drop" data-aos="fade-down-right">
          <div className="content-drop">
            <h2>
              <i className="fa-solid fa-medal"></i>
            </h2>
            <h3>{t("homeSec3Heading1")}</h3>
            <p>{t("homeSec3Subtite1")}</p>
          </div>
        </div>
        <div className="drop" data-aos="zoom-in-down">
          <div className="content-drop">
            <h2>
              <i className="fa-solid fa-lightbulb"></i>
            </h2>
            <h3>{t("homeSec3Heading2")}</h3>
            <p>{t("homeSec3Subtite2")}</p>
          </div>
        </div>
        <div className="drop" data-aos="fade-down-left">
          <div className="content-drop">
            <h2>
              <i className="fa-solid fa-handshake"></i>
            </h2>
            <h3>{t("homeSec3Heading3")}</h3>
            <p>{t("homeSec3Subtite3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionThree;
