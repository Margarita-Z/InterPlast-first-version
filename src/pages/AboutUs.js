import React from 'react';
import '../assets/css/about-us.css';
import SectionThree from '../components/sections/abou-us/SectionThree';
import SectionOne from '../components/sections/abou-us/SectionOne';
import Gallery from '../components/sections/abou-us/SectionTwo';
import Test from '../components/sections/abou-us/Test';


function AboutUs() {
  return (
    <div>
      
        <SectionOne />
        <Test />
        <Gallery />
        <SectionThree />
    </div>
  )
}

export default AboutUs