import React from "react";
import { useTranslation } from "react-i18next";
import p1 from "../../../assets/image/partners/Headerlogo_20190801114104356pcwgpvqvlp.png";

import p3 from "../../../assets/image/partners/huzur-logo.png";
import p4 from "../../../assets/image/partners/logo-white.png";
import p5 from "../../../assets/image/partners/logoUplast.png";
import p6 from "../../../assets/image/partners/senkron.png";

function OurPartners() {
  const { t } = useTranslation();
  return (
    <div className="brands-section">
      <h2>
        {t("homeSec4-5TitleH1")} <span>{t("homeSecPartner")}</span>
      </h2>

      <div className="slider-clients">
        <div className="slide-track-clients">
          <div className="slide-clients">
            <img src={p4} alt="" />
          </div>
          <div className="slide-clients">
            <img src={p6} alt="" />
          </div>
          <div className="slide-clients">
            <img src={p3} alt="" />
          </div>
          <div className="slide-clients">
            <img
              src="https://staph.blob.core.windows.net/images-layout/logo.svg"
              alt=""
            />
          </div>
          <div className="slide-clients">
            <img src={p1} alt="" />
          </div>
          <div className="slide-clients">
            <img src={p5} alt="" />
          </div>

          <div className="slide-clients">
            <img src={p4} alt="" />
          </div>
          <div className="slide-clients">
            <img src={p6} alt="" />
          </div>
          <div className="slide-clients">
            <img src={p3} alt="" />
          </div>
          <div className="slide-clients">
            <img
              src="https://staph.blob.core.windows.net/images-layout/logo.svg"
              alt=""
            />
          </div>
          <div className="slide-clients">
            <img src={p1} alt="" />
          </div>
          <div className="slide-clients">
            <img src={p5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
