import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App