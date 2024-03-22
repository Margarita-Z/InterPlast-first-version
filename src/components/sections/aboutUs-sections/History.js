import React from "react";
import { useTranslation } from "react-i18next";

function History() {
  const { t } = useTranslation();
  return (
    <div className="history-section">
      <div className="container">
        <div className="top-line">{t("companyTitle")}</div>
        <h1 className="history-test-headline">{t("company")}</h1>
        <div className="circleImage"></div>

        <div className="history_hero-text-wrapper">
          <p className="history_hero-subtitle">
            {t("aboutUsSec2SubtiteP1")}
            <br /> {t("aboutUsSec2SubtiteP2")} <br />
            {t("aboutUsSec2SubtiteP3")}
            <br />
            {t("aboutUsSec2SubtiteP4")} <br />
            {t("aboutUsSec2SubtiteP5")} <br />
            {t("aboutUsSec2SubtiteP6")}
            {t("aboutUsSec2Subtitle7")}
            <br />
            {t("aboutUsSec2Sumtitle8")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
