import React from 'react';

// img
import logo from '../Res/logo.JPG';

// components
import Top_Nav from './Top_Nav';
import Main_Nav from './Main_Nav';

const Header=()=>{
  return(
    <header>
      <div className="container">
        <div className="topnav">
          <Top_Nav/>
        </div>

        <div className="header">
          
          <div className="logo">
            <img src={logo} alt="ezsol4vu" />
          </div>
          <div className="adsens">
            ads
          </div>
        </div>

        <Main_Nav/>
      </div>
    </header>
  );
}

export default Header;