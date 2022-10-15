import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>APTIVE</Link>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pricing' className='nav-link'>
              Pricing
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/faq' className='nav-link'>
              FAQ
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#ffffff' }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
