import React from "react";
import image1 from "../../../assets/image/gallery/viber_image_2023-11-09_16-47-04-614.jpg";
import image2 from "../../../assets/image/gallery/viber_image_2023-11-09_16-47-04-535.jpg";
import image3 from "../../../assets/image/gallery/IMG_9491.jpg";
import image4 from "../../../assets/image/gallery/IMG_8814.jpg";
import image5 from "../../../assets/image/gallery/viber_image_2023-11-09_16-47-04-687.jpg";
import image6 from "../../../assets/image/gallery/viber_image_2023-11-09_16-47-04-506.jpg";
import image7 from "../../../assets/image/gallery/IMG_8347.jpg";
import image8 from "../../../assets/image/gallery/IMG_8812.jpg";
import image9 from "../../../assets/image/gallery/ABFB9E48-6087-42D8-85C7-20826AE2FB80.JPG";

function AboutUsGallery() {
  return (
    <div className="about-us-galery">
      <div className="scroll-container">
        <img src={image1} alt="" width={600} height={400} />
        <img src={image2} alt="" width={600} height={400} />
        <img src={image3} alt="" width={600} height={400} />
        <img src={image4} alt="" width={600} height={400} />
        <img src={image5} alt="" width={600} height={400} />
        <img src={image6} alt="" width={600} height={400} />
        <img src={image7} alt="" width={600} height={400} />
        <img src={image8} alt="" width={600} height={400} />
        <img src={image9} alt="" width={600} height={400} />
      </div>
    </div>
  );
}

export default AboutUsGallery;
