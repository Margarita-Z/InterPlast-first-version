import React from "react";

function SectionOne() {
  return (
    <div className="home-section-one">
      <div className="container">
        <div className="row home-section-row">
          <div className="col">
            <div
              className="home-text-wrapper"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <div className="home-top-line">
                {" "}
                <span style={{ "--i": "1" }}>И</span>
                <span style={{ "--i": "2" }}>Н</span>
                <span style={{ "--i": "3" }}>Т</span>
                <span style={{ "--i": "4" }}>Е</span>
                <span style={{ "--i": "5" }}>Р</span>
                <span style={{ "--i": "6" }}>П</span>
                <span style={{ "--i": "7" }}>Л</span>
                <span style={{ "--i": "8" }}>А</span>
                <span style={{ "--i": "9" }}>С</span>
                <span style={{ "--i": "10" }}>Т</span>
              </div>
              <h1 className="home-section-one-heading">
                Водоводни и канализациони системи број 1 во Македонија
              </h1>
              <hr />
              <p className="home-section-one-subtitle">
                <b>ИНТЕРПЛАСТ</b> нуди широк асортиман на високо квалитетни
                канализациони цевки и ПЕ црева.Ние произведуваме производи по
                европски стандарди, докажувајќи го своето лидерство преку
                приватни и јавни проекти каде што се користат нашите различни
                производи.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
