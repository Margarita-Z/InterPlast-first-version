import React from "react";
import { useTranslation } from "react-i18next";

function AboutUsSectionTwo() {
  const { t } = useTranslation();

  return (
    <div className="about_hero_section">
      <div className="container">
        <div className="row home-hero_row">
          <div className="about_hero-text-wrapper">
            <p className="about_hero-subtitle">
              {t("company")} {""}
              <b
                style={{
                  color: "#CE2027",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                }}
              >
                „{t("interplast")}“
              </b>{" "}
              {t("aboutUsSec2SubtiteP1")}
              <br /> {t("aboutUsSec2SubtiteP2")} <br />
              {t("aboutUsSec2SubtiteP3")}
              <br />
              {t("aboutUsSec2SubtiteP4")} <br />
              {t("aboutUsSec2SubtiteP5")} <br />
              {t("aboutUsSec2SubtiteP6")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSectionTwo;
