import React, { useState} from 'react';
import peCrevo from "../../../assets/images/product/pe crevo.png";
import kanalizacija from '../../../assets/images/product/kanalizacija.png';
import vodovod from '../../../assets/images/product/vodovod.png';
import kapkaSistem from '../../../assets/images/product/kapka-sistem.png';
import bunarskiCefki from '../../../assets/images/product/bunarskiCefki.png';
import TP from '../../../assets/images/product/engineering-plastic.jpg';


function Products() {
 
    const [cards] = useState([
        {
          url: "",
          img: kanalizacija,
          title: "КАНАЛИЗАЦИЈА",
        },
        {
          url: "",
          img: vodovod,
          title: "ВОДОВОД",
        },
        {
          url: "",
          img: kapkaSistem,
          title: "КАПКА СИСТЕМ",
        },
        {
          url: "",
          img: bunarskiCefki,
          title: "БУНАРСКИ ЦЕВКИ",
        },
        {
          url: "",
          img: peCrevo,
          title: "ПЕ ЦРЕВО ЗА ОПТИЧКИ КАБЕЛ",
        },
        {
          url: "",
          img: TP,
          title: "ТЕХНИЧКА ПЛАСТИКА",
        },
      ]);
      return (
        <div>
          <div className="section-cards">
            <div className="container-cards">
              <h1>Наши <span>Производи</span></h1>
              <div className="cards">
                {cards.map((card, i) => (
                  <div key={i} className="card" data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
                     <a href={card.url}>
                    <img src={card.img} alt="" />
                   <span>{card.title}</span>
                   </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Products