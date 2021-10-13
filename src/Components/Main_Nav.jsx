import React from 'react';

// browser router
import { Link } from 'react-router-dom';

// icons 
import {Home} from '@mui/icons-material'; 

const Main_Nav = ()=>{
  return(
    <nav>  
      <ul>
        <li><Link to="/"><Home/>Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Main_Nav;