import React from "react";
import { useTranslation } from "react-i18next";

function HomeSectionOne() {
  const { t } = useTranslation();

  return (
    <div className="home-section-one">
      <div className="container">
        <div className="row home-section-row">
          <div className="col">
            <div
              className="home-text-wrapper"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <div className="home-top-line">
                {" "}
                <span style={{ "--i": "1" }}>{t("i")}</span>
                <span style={{ "--i": "2" }}>{t("n")}</span>
                <span style={{ "--i": "3" }}>{t("t")}</span>
                <span style={{ "--i": "4" }}>{t("e")}</span>
                <span style={{ "--i": "5" }}>{t("r")}</span>
                <span style={{ "--i": "6" }}>{t("p")}</span>
                <span style={{ "--i": "7" }}>{t("l")}</span>
                <span style={{ "--i": "8" }}>{t("a")}</span>
                <span style={{ "--i": "9" }}>{t("s")}</span>
                <span style={{ "--i": "10" }}>{t("t")}</span>
              </div>
              <h1 className="home-section-one-heading">
                {t("homeSec1Heading")}
              </h1>
              <hr />
              <p className="home-section-one-subtitle">
                <b>{t("interplast")}</b> {t("homeSec1Subtite")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionOne;
