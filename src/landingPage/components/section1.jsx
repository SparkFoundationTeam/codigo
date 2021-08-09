import React from 'react';

import './section1.css';

import logo from './res/codiGo.png';
import video from './res/video.mp4';

const Section1 = () => {
  return (
    <div className='Section1'>
      <div id='nav'>
        <img src={logo}></img>
        <button>SIGN IN</button>
      </div>
      <div id='Content'>
        <div id='Text'>
          <h1>Learn in the simplest way with códiGo tutors and add value to your career.</h1>

          <button>Start Your Journey &gt;</button>

          <h2>Learn. Code. Excel</h2>
        </div>
        <div id='introVideo'>
          <video src={video} autoplay controls></video>
        </div>
      </div>
    </div>
  );
};

export default Section1;
