import React, { useState } from 'react';
import logo from '../../resources/codiGo.png';
import './section1.css';
import video from '../../resources/video.mp4';
import { Link } from 'react-router-dom';
import userIcon from '../../resources/userIcon.png';
import string from '../../resources/string.gif';

const Section1 = () => {
  const authenticated = localStorage.getItem('LoggedIn');
  let [signdash, setsigndash] = useState(authenticated);
  return (
    <div className='Section1'>
      <div id='nav'>
        <img src={logo}></img>

        <Link to='/login'>
          <button id='SignupDashBoardIndicator'>
            {' '}
            <img src={userIcon} id='stringGif'></img> {!authenticated ? 'Sign In' : ' Dashboard'}
          </button>
        </Link>
      </div>
      <div id='Content'>
        <div id='Text'>
          <h1>Learn in the simplest way with códiGo tutors and add value to your career.</h1>

          <Link to={authenticated ? '/dashboard' : '/login'}><button>Start Your Journey &gt;</button></Link>

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
