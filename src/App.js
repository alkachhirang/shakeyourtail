import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
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
import { Preloader } from './components/Iconimg';
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
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <>
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
              <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "position_fix" : "d-none"} />
            </div>
          </>
        </BrowserRouter>
      )}

    </div>
  );
}

export default App;
