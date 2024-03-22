import React from "react";
import { useTranslation } from "react-i18next";

function AboutUsSectionOne() {
  const { t } = useTranslation();

  return (
    <div className="about-section-one">
      <div className="container">
        <div className="row about-section-row">
          <div className="col">
            <div className="about-text-wrapper">
              <h1 className="about-section-one-heading">{t("aboutUs")}</h1>
              <p className="about-section-one-subtitle">{t("aboutUsTitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSectionOne;
