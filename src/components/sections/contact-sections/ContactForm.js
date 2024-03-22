import React from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className="contact-form-section">
      <div className="container">
        <div className="row contact-form-row">
          <div className="col">
            <div className="map-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.115201580171!2d22.449901575891765!3d41.63164127126994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1355fb41e43d228f%3A0x9243b845d4c07a87!2sInterplast!5e0!3m2!1smk!2ssi!4v1711014222252!5m2!1smk!2ssi"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col">
            <div className="info-company">
              <div>
                <div>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>
                  {t("contactInfoName")}
                  <br />
                  {t("constactInfoAdress")}
                  <br />
                  {t("contactInfoCountry")}
                </span>
              </div>
              <div>
                <div>
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <span>{t("contactInfoTel")}</span>
              </div>
              <div>
                <div>
                  <i className="fa-sharp fa-solid fa-fax"></i>{" "}
                </div>
                <span>{t("contactInfoFax")}</span>
              </div>
              <div>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>
                  {t("contactInfoMail")}:{" "}
                  <a href="mailto:info@example.com">Contact@Interplast.mk</a>
                </span>
              </div>
              <div>
                <div>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <span>
                  {t("workTime")} <br />
                  {t("workTime1")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
