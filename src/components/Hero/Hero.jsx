import React from "react";
import {
  FaAccusoft,
  FaAsterisk,
  FaDatabase,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              provident dolorem veniam ullam ex a possimus. Fuga aspernatur
              cumque laudantium?
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase style={{ marginRight: "5px" }} />
                  Staxx
                </i>
                <i>
                  <FaAsterisk style={{ marginRight: "5px" }} /> Star AI
                </i>
                <i>
                  <FaAccusoft style={{ marginRight: "5px" }} /> Accusoft
                </i>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Sign in with </p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={20} />
                  </i>
                  <i>
                    <FaTwitter size={20} />
                  </i>
                  <i>
                    <FaGithub size={20} />
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="name" />
                  <input type="email" placeholder="email" />
                  <input type="password" placeholder="password" />
                  <button>Create your account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>By signing up, you agree to our</p>
                <span className="primary-color">Terms, Data Policy</span>
                and
                <span className="primary-color">Cookies Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
