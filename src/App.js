import React, { useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/js/script";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/layout/header/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Products from "./pages/Products";


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease" });
  });

  return (
    <div className="App">
      <Header/>
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
