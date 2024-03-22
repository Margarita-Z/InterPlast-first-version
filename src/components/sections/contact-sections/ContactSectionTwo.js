import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function ContactSectionTwo() {
  const { t } = useTranslation();
  const initialValues = { name: "", email: "", msg: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmite] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmite(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.name) {
      errors.name = "Is required!";
    }
    if (!values.email) {
      errors.email = "Is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter valid Е-Маил!";
    }
    if (!values.msg) {
      errors.msg = "Is required!";
    }
    return errors;
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contactInfo">
          <div>
            <h2>{t("contactInfo")}</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>
                  {t("contactInfoName")}
                  <br />
                  {t("constactInfoAdress")}
                  <br />
                  {t("contactInfoCountry")}
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <span>{t("contactInfoTel")}</span>
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-fax"></i>
                </span>
                <span>{t("contactInfoFax")}</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span>
                  {t("contactInfoMail")}:{" "}
                  <a href="mailto:info@example.com">Contact@Interplast.mk</a>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-clock"></i>
                </span>
                <span>
                  {t("workTime")} <br />
                  {t("workTime1")}
                </span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100057457568573"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-viber"></i>
              </a>
            </li>
          </ul>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formBox">
            <div className="inputBox w50">
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />

              <span>{t("contactFormName")}</span>
              <p>{formErrors.name}</p>
            </div>

            <div className="inputBox w50">
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <span>{t("contactInfoMail")}</span>
              <p>{formErrors.email}</p>
            </div>

            <div className="inputBox w100">
              <textarea
                name="msg"
                value={formValues.msg}
                onChange={handleChange}
              ></textarea>
              <span>{t("contactFormMsg")}</span>
              <p>{formErrors.msg}</p>
            </div>
            <div className="inputBox w100">
              <button className="btn-send ">{t("button")}</button>
            </div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className=" message-success">
                <i class="fa-solid fa-check"></i>Message sent successfully
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSectionTwo;
