import React from 'react';

import SendIcon from '@mui/icons-material/Send';

const Footer=()=>{
  return(
    <footer>
      <div className="container">
      <div className="foot_boxs">
          <div className="contact">
            <h4>Contact Us</h4>
            <img src="https://1.bp.blogspot.com/-k0_XTgjBD6E/W7jn1coVpaI/AAAAAAAAAFg/oO4Tc0RsZa4xou2MKH0nmykcdFZsqpkSgCK4BGAYYCw/s150/logo-1.png" alt="ezsol4vu" />
            <span><b>Email Us: </b>ezsol4vu@gmail.com</span>
            <span><b>Address: </b>Virtual University LHR</span>
          </div>
          <div className="subscribe">
            <h4>Follow Us for Notifications</h4>
            <form action="">
              <label for="email">Enter Your Email</label>
              <div className="input_group">
                <input type="email" name="email" id="email" placeholder="John@gmail.com"/>
                <button><SendIcon/></button>
              </div>  
            </form>
          </div>
          <div className="shortcode">
            <h4>Subject Code</h4>
            <div className="codes">
              <a href="#">CS101</a>
              <a href="#">CS201</a>
              <a href="#">CS301</a>
              <a href="#">CS302</a>
              <a href="#">CS304</a>
              <a href="#">CS305</a>
              <a href="#">CS402</a>
              <a href="#">CS403</a>
              <a href="#">CS201</a>
              <a href="#">CS301</a>
              <a href="#">CS302</a>
              <a href="#">CS304</a>
            </div>
          </div>
          <div className="implinks">
            <h4>Important Links</h4>
            <div className="links">
              <a href="#">CGPA Calculator</a>
              <a href="#">My Study Scheme</a>
              <a href="#">VU Datesheet</a>
              <a href="#">Course Selection</a>
              <a href="#">Jobs at VU</a>
              <a href="#">All Virutal University Handouts</a>
            </div>
          </div>
        </div>
        <div className="rights">
          <p>Developed by Saif Ullah | EZSol4VU - Virtual University © 2017 - 2021. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;