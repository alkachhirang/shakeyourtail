import './App.css';
import Customerexperience from './components/Customerexperience';
import Downloadapp from './components/Downloadapp';
import Header from "./components/Header";
import Mainfeatures from "./components/Mainfeatures";
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Howitworks from './components/Howitworks';


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
  return (
    <div>
      <Header />
      <Mainfeatures />
      <Customerexperience />
      <Howitworks/>
      <Pricing/>
      <Downloadapp/>
      <Testimonials />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
