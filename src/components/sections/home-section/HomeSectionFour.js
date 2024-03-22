import React from "react";
import peCrevo from "../../../assets/image/product/pe crevo.png";
import kanalizacija from "../../../assets/image/product/kanalizacija.png";
import vodovod from "../../../assets/image/product/vodovod.png";
import kapkaSistem from "../../../assets/image/product/kapka-sistem.png";
import bunarskiCefki from "../../../assets/image/product/bunarskiCefki.png";
import TP from "../../../assets/image/product/engineering-plastic.jpg";
import { useTranslation } from "react-i18next";

function HomeSectionFour() {
  const { t } = useTranslation();

  const cards = [
    {
      img: kanalizacija,
      title: t("navMenu.item1").toUpperCase(),
    },
    {
      img: vodovod,
      title: t("navMenu.item2").toUpperCase(),
    },
    {
      img: kapkaSistem,
      title: t("navMenu.item3").toUpperCase(),
    },
    {
      img: bunarskiCefki,
      title: t("navMenu.item4").toUpperCase(),
    },
    {
      img: peCrevo,
      title: t("navMenu.item5").toUpperCase(),
    },
    {
      img: TP,
      title: t("navMenu.item6").toUpperCase(),
    },
  ];

  return (
    <div className="section-cards">
      <div className="container-cards">
        <h1>
          {t("homeSec4-5TitleH1")} <span>{t("homeSec4TitleS")}</span>
        </h1>
        <div className="cards">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={card.img} alt="" />
              <span>{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSectionFour;
