import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Homes/Home';
import Price from './components/Pricing/Pricing';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Price />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
