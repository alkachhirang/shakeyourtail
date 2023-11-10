import './App.css';
import Customerexperience from './components/Customerexperience';
import Downloadapp from './components/Downloadapp';
import Header from "./components/Header";
import Mainfeatures from "./components/Mainfeatures";
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Mainfeatures />
      <Customerexperience />
      <Pricing/>
      <Downloadapp/>
      <Testimonials />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
