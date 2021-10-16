import React from 'react';

// icons
import SearchIcon from '@mui/icons-material/Search';
import {Facebook, Twitter, YouTube, Instagram} from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
// components
// import Header from '../Components/Header';

const Home=()=>{
  return(
    <section className="home">
      <div className="container">
        <div className="featured_posts">
          <div className="content">
            <div className="top">
              <h2>Featured Posts</h2>
              <a href="#">More</a>
            </div>
            <div className="posts">
              <div className="big">
                <Post
                      title="Rescheduling of Missed/Unplanned Paper | Virtual University"
                      description="A student may request for rescheduling of Missed/Unplanned papers by Thursday, September 23, 2021. No request will be entertained after the specified date. The rescheduling rules:A student may re..."
                      thumb="https://3.bp.blogspot.com/-Pcy9PU1i5h4/XCD5o9g8jVI/AAAAAAAAATI/lQQ7bxGV_tEr0Z7QbldwWrCNDXqarAxYwCLcBGAs/s1600/Capture.JPG" />
                
              </div>
              <div className="small">
                <Post
                    title="Course Selection - Virtual University"
                    description=" "
                    thumb="https://4.bp.blogspot.com/-d_4gJlES3EA/XI3nNObsYsI/AAAAAAAAAfY/JRKoHeLZyP4cm7BSqMOlu52gvfIJ18D-gCLcBGAs/s1600/Capture.PNG" />
                <Post
                    title="List of Merit Based Scholarship 2018"
                    description=" "
                    thumb="https://3.bp.blogspot.com/-I5seUidkZJs/XAfP158u4OI/AAAAAAAAARc/wPB1rUWIJTQoBYs_onTrp_BL0gCVYsWGQCLcBGAs/s1600/merit%2Blist.JPG" />
                
              </div>
            </div>
          </div>
        </div>

        <div className="main">

          <div className="main_content">

            <div className="posts">
              <div className="top">
                <h2>Recently Posted</h2>
                <a href="#">More</a>
              </div>
              <MainPost
                date="10/14/2021"
                author="Saif Ullah"
                title="Course Selection - Virtual University"
                description="Virtual University of PakistanList of Merit Based Scholarship (Continuing Students) Fall, 2018(As approved by Management Committee for Scholarships)Criteria for award of Merit Based Scholarship"
                thumb="https://4.bp.blogspot.com/-d_4gJlES3EA/XI3nNObsYsI/AAAAAAAAAfY/JRKoHeLZyP4cm7BSqMOlu52gvfIJ18D-gCLcBGAs/s1600/Capture.PNG" />
              <MainPost
                date="10/14/2021"
                author="Saif Ullah"
                title="List of Merit Based Scholarship 2018"
                description="Virtual University of PakistanList of Merit Based Scholarship (Continuing Students) Fall, 2018(As approved by Management Committee for Scholarships)Criteria for award of Merit Based Scholarship"
                thumb="https://3.bp.blogspot.com/-I5seUidkZJs/XAfP158u4OI/AAAAAAAAARc/wPB1rUWIJTQoBYs_onTrp_BL0gCVYsWGQCLcBGAs/s1600/merit%2Blist.JPG" />
              <MainPost
                date="10/14/2021"
                author="Saif Ullah"
                title="Rescheduling of Missed/Unplanned Paper | Virtual University"
                description="A student may request for rescheduling of Missed/Unplanned papers by Thursday, September 23, 2021. No request will be entertained after the specified date. The rescheduling rules:A student may re..."
                thumb="https://3.bp.blogspot.com/-Pcy9PU1i5h4/XCD5o9g8jVI/AAAAAAAAATI/lQQ7bxGV_tEr0Z7QbldwWrCNDXqarAxYwCLcBGAs/s1600/Capture.JPG" />
            
            </div>
          </div>
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

        </div>

        <footer>
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
            <div className="imglinks">
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
        </footer>

      </div>
    </section>
  );
}

// post card
const Post=(props)=>{
  return(
    <div className="post_item">
      <div className="thumbnail">
        <img src={props.thumb} alt={props.title} />
      </div>
      <div className="details">
        <div className="title">
          <a href="">{props.title}</a>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

const MainPost=(props)=>{
  return(
    <div className="post_item">
      <div className="thumbnail">
        <img src={props.thumb} alt={props.title} />
      </div>
      <div className="details">
        <div className="title">
          <a href="">{props.title}</a>
        </div>
        <div className="description">
          <p>
            <span><b>Author:</b> {props.author} </span>
            <span><b> Date:</b> {props.date}</span> 
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}


export default Home;