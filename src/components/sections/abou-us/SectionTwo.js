import React from "react";
import slika1 from '../../../assets/images/gallery/viber_image_2023-11-09_16-47-04-506.jpg';
import slika2 from '../../../assets/images/gallery/viber_image_2023-11-09_16-47-04-535.jpg';
import slika3 from '../../../assets/images/gallery/viber_image_2023-11-09_16-47-04-575.jpg';
import slika4 from '../../../assets/images/gallery/viber_image_2023-11-09_16-47-04-614.jpg';
import slika5 from '../../../assets/images/gallery/viber_image_2023-11-09_16-47-04-664.jpg';
import slika6 from '../../../assets/images/gallery/viber_image_2023-11-09_16-47-04-687.jpg';
import slika7 from '../../../assets/images/gallery/banner2.jpg';

function Gallery() {
  

  return (
   <div className="slider">
    <div className="slide-track">
      <div className="slide"><img src={slika1} alt='' /></div>
      <div className="slide"><img src={slika2} alt='' /></div>
      <div className="slide"><img src={slika3} alt='' /></div>
      <div className="slide"><img src={slika4} alt='' /></div>
      <div className="slide"><img src={slika5} alt='' /></div>
      <div className="slide"><img src={slika6} alt='' /></div>
      <div className="slide"><img src={slika7} alt='' /></div>

      <div className="slide"><img src={slika1} alt='' /></div>
      <div className="slide"><img src={slika2} alt='' /></div>
      <div className="slide"><img src={slika3} alt='' /></div>
      <div className="slide"><img src={slika4} alt='' /></div>
      <div className="slide"><img src={slika5} alt='' /></div>
      <div className="slide"><img src={slika6} alt='' /></div>
      <div className="slide"><img src={slika7} alt='' /></div>
    </div>
   </div>
  );
}

export default Gallery;
