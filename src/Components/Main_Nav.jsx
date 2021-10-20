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
        <li><NavLink to="/solutions">Solutions</NavLink></li>
        <li><NavLink to="/handouts">Handouts</NavLink></li>
        <li><NavLink to="/papers">Papers</NavLink></li>
        <li><NavLink to="/onlinecourses">Online Courses</NavLink></li>
        <li><NavLink to="/softwares">Softwares</NavLink></li>
        <li><NavLink to="/more">More</NavLink></li>
      </ul>
    </nav>
  );
}

export default Main_Nav;