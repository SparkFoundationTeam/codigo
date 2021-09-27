import React, { useState } from 'react';
import logo from '../../resources/codiGo.png';
import './section1.css';
import video from '../../resources/video.mp4';
import { Link } from 'react-router-dom';
import userIcon from '../../resources/userIcon.png';
import string from '../../resources/string.gif';

const Section1 = () => {
  const authenticated = localStorage.getItem('LoggedIn');

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement('style');
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  };

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
        <div id='Text' data-aos='fade-right'>
          <h1>Learn in the simplest way with códiGo tutors and add value to your career.</h1>

          <Link to={authenticated ? '/dashboard' : '/login'}>
            <button>Start Your Journey &gt;</button>
          </Link>

          <h2
            onload={() => {
              window.location.reload();
            }}
          >
            códiGo makes
            <span class='txt-rotate' data-period='500' data-rotate='[ " your career excellent.", " you future ready.", " life buzzling !" ]'></span>
          </h2>
        </div>

        <div>
          <video src={video} autoplay controls id='introVideo' data-aos='fade-up' data-aos-offset='100'></video>
        </div>
      </div>
    </div>
  );
};

export default Section1;
