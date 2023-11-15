import React from "react";
import Mission from "../../elements/Mission";
import Vision from "../../elements/Vision";

function SectionFirst() {
  return (
    <div className="home_hero_section">
      <div className="container">
        <div className="row home-hero_row">
          <div className="col">
            <div className="home_hero-text-wrapper">
              <div className="top-line">За нашата компанија</div>
              <h1 className="heading">Предности на нашите производи</h1>
              <hr />
              <p className="home_hero-subtitle">
                Компанијата „Интерпласт“ е иновативна фирма, каде постојано се
                зголемува растот, односно нивото на фирмата. Стремежот кон
                иновативноста и задоволувањето на вашите потреби
                продолжува.Предности на нашите производи:
              </p>
              <div>
                <div className="container-list">
                  <div className="box">
                    <div className="content">
                      <div className="icon">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="text">
                        <h3>Економични</h3>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <div className="icon">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="text">
                        <h3>Лесно монтанжни</h3>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <div className="icon">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="text">
                        <h3>Мала тежина</h3>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <div className="icon">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="text">
                        <h3>Нетоксични</h3>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <div className="icon">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="text">
                        <h3>Отпорност на абразија</h3>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="content">
                      <div className="icon">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                      <div className="text">
                        <h3>Ниска топлинска спроводливост</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="home_hero-img-wrapper">
              <div className="home__hero-img">
                <div className="mision-vision">
                    <div className="mision">
                        <Mission />
                    </div>
                    <div className="mision">
                        <Vision />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFirst;
