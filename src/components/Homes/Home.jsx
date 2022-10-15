import React from 'react';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navigation/Navbar';
import Price from '../Pricing/Pricing';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Price />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
