import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/assets/js/script';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Aos from "aos";
import "aos/dist/aos.css";
import Products from './pages/Products';



function App() {
  

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease" });
  });

  return (
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path='/products' element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
