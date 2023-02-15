import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
// import FlagEng from '../../assets/images/f2.png';

function Header() {

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-4">
              <div className="logo">
                <a href="/">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-8">
              
              <div className="navigation">
                <div className="support-block">1</div>
                <nav>
                  <ul>
                    <li className="language"><a href="example.com" lang="en">English</a></li>
                    <li className="language"><a href="example.com" lang="fr">Français</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
    
  );
}

export default Header;