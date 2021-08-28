import React from 'react';
import logo from '../../resources/codiGo.png';
import './section1.css';
import video from '../../resources/video.mp4';
import { Link } from 'react-router-dom';
import userIcon from '../../resources/userIcon.png'
import string from '../../resources/string.gif';

const Section1 = () => {
  return (
    <div className='Section1'>
      <div id='nav'>
        <img src={logo}></img>
        

        <Link to='/login'>
          <button id='SignupDashBoardIndicator'> <img src={userIcon} id='stringGif'></img> SIGN IN </button>
        </Link>
      </div>
      <div id='Content'>
        <div id='Text'>
          <h1>Learn in the simplest way with códiGo tutors and add value to your career.</h1>

          <button>Start Your Journey &gt;</button>

          <h2>Learn. Code. Excel</h2>
        </div>
        
        <div>
          <video src={video} autoplay controls id='introVideo'></video>
        </div>
      </div>
    </div>
  );
};

export default Section1;
