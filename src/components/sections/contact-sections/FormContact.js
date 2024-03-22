import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function FormContact() {
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
    <div className="form-contact-section">
      <div className="container">
        <div className="row form-contact-row">
          <div className="col">
            <div className="form-col">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder={t("contactFormName")}
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <p>{formErrors.name}</p>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder={t("contactInfoMail")}
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p>{formErrors.email}</p>
                </div>
                <textarea
                  name="msg"
                  rows="6"
                  placeholder={t("contactFormMsg")}
                  className="form-control"
                  value={formValues.msg}
                  onChange={handleChange}
                ></textarea>
                <p>{formErrors.msg}</p>
                <button className="btn-send ">{t("button")}</button>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className=" message-success">
                    <i className="fa-solid fa-check"></i>Message sent
                    successfully
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
