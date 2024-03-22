import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import mk from "./lng/mk.json";
import en from "./lng/en.json";

//use the initReactI18next plugin with i18next to make it easier for
//internationalization of react app easier
i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    lng: localStorage.getItem('lng') || 'mk', //default language
    fallbackLng: "mk", //lang that will be loaded in case the translations the user is looking for are not available
    interpolation: {
      escapeValue: false, //used to escape the values and avoid XSS attacks, we will set it to false, because React already does it by default
    },
    resources: {
      //an object with the translations to be used in the application
      mk: {
        translation: mk,
      },
      en: {
        translation: en,
      },
    },
  });

export default i18n;
