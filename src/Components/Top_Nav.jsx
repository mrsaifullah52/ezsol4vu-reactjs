import React from 'react';

import {Link} from 'react-router-dom';

const Top_Nav=()=>{
  return(
    <ul>
      <li><span>October 13, 2021 | 09:06:15 PM</span></li>
      <li><Link to="/privacy">Privacy Policy</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/sitemap">Sitemap</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
}

export default Top_Nav;