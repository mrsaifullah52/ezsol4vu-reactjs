import React from 'react';

// icons
import SearchIcon from '@mui/icons-material/Search';

// components
// import Header from '../Components/Header';

const Home=()=>{
  return(
    <section className="home">
      <div className="container">
        <div className="featured_posts">
          <div className="content">
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

        <hr />

        <div className="main">

          <div className="main_content">
            <div className="posts">
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
                    <button><SearchIcon sx={{fontSize: 16}} color="primary"/></button>
                  </div>
                </form>
              </div>
              <div className="social_icons">

              </div>
              <div className="label">

              </div>
            </div>
          </div>

        </div>
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