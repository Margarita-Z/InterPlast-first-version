import React from "react";
import quality from "../../../assets/images/quality.png";
import trust from "../../../assets/images/trust.png";
import innovation from "../../../assets/images/innovation.png";

function Advantages() {
  return (
    <div className="advantage">
      <div className="services">
        <div
          className="card-advantage"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="advantage-icon">
            <img src={quality} alt="" />
          </div>
          <h2>Квалитет</h2>
          <p>
            Ние сме стабилни во исполнувањето на стандардите за репер и
            конзистентни нивоа на квалитет во текот на нашиот производствен
            процес.
          </p>
        </div>
        <div
          className="card-advantage"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="advantage-icon">
            <img src={innovation} alt="" />
          </div>
          <h2>Иновации</h2>
          <p>
            Ја водиме индустријата со технолошки напредок и оперативен пробив.
          </p>
        </div>
        <div
          className="card-advantage"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="advantage-icon">
            <img src={trust} alt="" />
          </div>
          <h2>Доверба</h2>
          <p>
            Работиме со силно чувство за интегритет и сериозно ја сфаќаме нашата
            посветеност на етичките, чесните и доверливи деловни практики.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
