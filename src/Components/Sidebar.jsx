import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Facebook, Twitter, YouTube, Instagram} from '@mui/icons-material';

const Sidebar=()=>{
  return(
    <div className="sidebar">
    <div className="boxs">
      <div className="ads">
        ads
      </div>
      <div className="search">
        <form action="">
          <label htmlFor="query">Search with Keyword</label>

          <div className="input_group">
            <input type="text" name="query" id="query" placeholder="Category or Label"/>
            <button><SearchIcon sx={{fontSize: 16, color: "#fff"}} /></button>
          </div>
        </form>
      </div>
      <div className="social_icons">
        <h4>Social Media Handles</h4>
        <div className="social_container">
          <div className="box">
            <a href="#"><Facebook sx={{fontSize: 24}}/></a>
          </div>
          <div className="box">
            <a href="#"><Twitter sx={{fontSize: 24}}/></a>
          </div>
          <div className="box">
            <a href="#"><YouTube sx={{fontSize: 24}}/></a>
          </div>
          <div className="box">
            <a href="#"><Instagram sx={{fontSize: 24}}/></a>
          </div>
        </div>
      </div>

      <div className="label">
        <h4>Important Tags</h4>
        <div className="tags">
          <span className="tag">
            <a href="">Updates</a>
          </span>
          <span className="tag">
            <a href="">Assignments</a>
          </span>
          <span className="tag">
            <a href="">Quizzes</a>
          </span>
          <span className="tag">
            <a href="">GDB's</a>
          </span>
          <span className="tag">
            <a href="">Anouncements</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Sidebar;
