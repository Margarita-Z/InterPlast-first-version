import React from "react";
import Slider from "react-slick";

function Partners() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrow: false,
    dots: false,
    pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

  return (
    <div className="client-area">
      <div className="container">
        <h2>
          Наши <span>Партнери</span>
        </h2>
        <Slider {...settings} className="logo-area sliderP" >
          <div className="slideP">
            <img src="http://interplast.mk/images/logoUplast.png" alt="" />
          </div>
          <div className="slideP">
            <img src="http://interplast.mk/images/logoUplast.png" alt="" />
          </div>
          <div className="slideP">
            <img src="http://interplast.mk/images/logoUplast.png" alt="" />
          </div>
          <div className="slideP">
            <img src="http://interplast.mk/images/logoUplast.png" alt="" />
          </div>
          <div className="slideP">
            <img src="http://interplast.mk/images/logoUplast.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
