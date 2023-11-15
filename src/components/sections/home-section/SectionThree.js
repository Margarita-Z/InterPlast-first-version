import React from "react";
import quality from "../../../assets/images/quality.png";
import trust from "../../../assets/images/trust.png";
import innovation from "../../../assets/images/innovation.png";

function SectionThree() {
  return (
    <div className="pricing__section">
      <div className="pricing__wrapper">
        <div className="pricing__container">
          <div
            className="pricing__container-card"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img src={quality} alt="" style={{ width: "60px" }} />
              </div>
              <h3>Квалитет</h3>
              <p>
                Ние сме стабилни во исполнувањето на стандардите за репер и
                конзистентни нивоа на квалитет во текот на нашиот производствен
                процес.
              </p>
            </div>
          </div>
          <div
            className="pricing__container-card"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img src={innovation} alt="" style={{ width: "60px" }} />
              </div>
              <h3>Иновации</h3>
              <p>
                Ја водиме индустријата со технолошки напредок и оперативен
                пробив.
              </p>
            </div>
          </div>
          <div
            className="pricing__container-card"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <img src={trust} alt="" style={{ width: "60px" }} />
              </div>
              <h3>Доверба</h3>
              <p>
                Работиме со силно чувство за интегритет и сериозно ја сфаќаме
                нашата посветеност на етичките, чесните и доверливи деловни
                практики.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
