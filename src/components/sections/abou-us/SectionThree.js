import React from "react";

import image from "../../../assets/images/our-mission.png";

function SectionThree() {
  return (
    <div className="home_hero_section">
      <div className="container">
        <div className="row home-hero_row">
          <div className="col">
            <div className="home_hero-img-wrapper">
              <div className="home__hero-img">
                <img src={image} alt="" className="home__hero-img" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="home_hero-text-wrapper">
              <div className="top-line">Мисија</div>
              <p className="home_hero-subtitle">
                ''Интерпласт – водечки производител на канализациони цевки и ПЕ
                црева. Нашата мисија е висококвалитетно производство и услоги по
                светски стандарди, со тоа што ќе останеме фокусирани и посветени
                само на задоволството на клиентите и да обезбедиме континуиран
                раст, профит и просперитет на сите засегнати страни,,
              </p>
              <div>
                <div className="top-line">Визија</div>
                <p className="home_hero-subtitle">
                 ''Да бидеме интегрирана компанија за производство на цевки со
                  висока конкурентност и одржлив раст,,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
