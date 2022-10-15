import React from 'react';
import './price.css';

const Price = () => {
  return (
    <div className='pricing'>
      <div className='container'>
        <div className='top-content'>
          <div>
            <h2>
              Everything you need for <span>$99 a month</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque totam atque, commodi iste aperiam maxime?
            </p>
          </div>
          <div className='btn-div'>
            <button>Get started today</button>
          </div>
        </div>
        <div className='bottom-content'>
          <div className='card'>
            <p>
              <span>Everything you neeed</span>
            </p>
            <h3>All-in-one-platform</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nemo provident consequatur adipisci eius atque, explicabo est
              natus optio accusantium repellat maxime, quae aperiam rem enim,
              aut repudiandae dolores odit.
            </p>
          </div>
          <div className='card'>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
          </div>
          <div className='card'>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
