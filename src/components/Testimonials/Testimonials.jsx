import React from 'react';

import { FaDatabase } from 'react-icons/fa';

import './testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonial'>
      <div className='container'>
        <div className='outline'>
          <div className='content'>
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className='body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ipsum cum ab beatae aliquid earum atque voluptate vitae suscipit
              laborum.
            </p>
            <div className='name'>
              <p>Marie Jane</p>
              <span>CEO, Staxx</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
