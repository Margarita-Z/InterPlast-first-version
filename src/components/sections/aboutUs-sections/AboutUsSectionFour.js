import React from "react";
import { useTranslation } from "react-i18next";

function AboutUsSectionFour() {
  const { t } = useTranslation();
  return (
    <div className="about_test_section">
      <div className="container">
        <div className="row about-test_row">
          <div className="col">
            <div className="about_test-text-wrapper">
              <div className="first-block">
                <div className="one-div">
                  <i className="fa-solid fa-user-group"></i>
                  <h3>{t("aboutUsSec4BlokOneT")}</h3>
                  <p>{t("aboutUsSec4BlokOneP")}</p>
                </div>
                <div className="two-div">
                  {" "}
                  <i className="fa-solid fa-handshake"></i>
                  <h3>{t("homeSec3Heading3")}</h3>
                  <p>{t("aboutUsSec4BlokTwoP")}</p>
                </div>
              </div>
              <div className="secand-blok">
                {" "}
                <div className="one-div">
                  <i className="fa-solid fa-scroll"></i>
                  <h3>{t("aboutUsSec4BlokThreeT")}</h3>
                  <p>{t("aboutUsSec4BlokThreeP")}</p>
                </div>
                <div className="two-div">
                  {" "}
                  <i className="fa-solid fa-medal"></i>
                  <h3>{t("homeSec3Heading1")}</h3>
                  <p>{t("aboutUsSec4BlokFourP")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about_test-text-wrapper">
              <div className="top-line">{t("aboutUsSec4Title")}</div>
              <h1 className="about-test-headline">
                {t("aboutUsSec4Subtitle")}
              </h1>
              <p className="about-test-subtitle">
                {t("aboutUsSec4Pharagraph")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSectionFour;
