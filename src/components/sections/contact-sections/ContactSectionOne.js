import React from "react";
import { useTranslation } from "react-i18next";

function ContactSectionOne() {
  const { t } = useTranslation();

  return (
    <div className="contact-section-one">
      <div className="container">
        <div className="row about-section-row">
          <div className="col">
            <div className="about-text-wrapper">
              <h1 className="about-section-one-heading">{t("contact")}</h1>
              <p className="about-section-one-subtitle">
                {t("contactFormSubtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSectionOne;
