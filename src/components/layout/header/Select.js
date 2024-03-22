import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Select() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("MK");

  const LANGUAGES = [
    { label: "MK", code: "mk" },
    { label: "EN", code: "en" }
  ];
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    localStorage.setItem("lng", lang_code);
    setIsActive(!isActive)
  };

  useEffect(() => {
    const code = localStorage.getItem('lng')
    const supportedLanguages = LANGUAGES.flatMap((item) => item.code)
    if (!code || !supportedLanguages.includes(code)) {
      i18n.changeLanguage('mk')
      return 
    }
    i18n.changeLanguage(code)
  }, [])
  return (
    <div className="select-dropdown">
      <div className="dropdown-btn" onClick={onChangeLang}  defaultValue={localStorage.getItem("lng")}
        >
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content"> 
          {LANGUAGES.map(({ code, label }) => (
            <div
              className="dropdown-item"
              onClick={(e) => {
                setSelected(label);
                setIsActive(false);
              }}
              key={code} value={code}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
