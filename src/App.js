import './App.css';

import Customerexperience from './components/Customerexperience';
import Downloadapp from './components/Downloadapp';
import Header from "./components/Header";
import Mainfeatures from "./components/Mainfeatures";
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Howitworks from './components/Howitworks';
import BackToTop from './assets/images/png/BackToTop.png';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <Mainfeatures />
      <Customerexperience />
      <Howitworks />
      <Pricing />
      <Downloadapp />
      <Testimonials />
      <Faq />
      <Footer />
      <div>
        <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "position_fix" :"d-none"} />
      </div>
    </div>
  );
}

export default App;
