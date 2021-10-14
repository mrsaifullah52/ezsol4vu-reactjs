import React from 'react';

// browser router
import { NavLink } from 'react-router-dom';

// icons 
import Home from '@mui/icons-material/Home'; 

const Main_Nav = ()=>{
  return(
    <nav>  
      <ul>  
        <li><NavLink to="/"><Home sx={{fontSize: 26}}/></NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Main_Nav;