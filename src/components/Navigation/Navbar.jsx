import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const onHandleClick = () => setClick(!click);
  return (
    <header>
      <div className="logo">
        <Link>
          <h3>Logo</h3>
        </Link>
      </div>
      <nav className="navbar">
        <ul className={click ? ["nav-menu", "active"].join(" ") : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="humbers" onClick={onHandleClick}>
        {click ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;
