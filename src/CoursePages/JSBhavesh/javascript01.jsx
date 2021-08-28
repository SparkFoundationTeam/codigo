import React, { useState } from 'react';
import PageTemplate from '../coursePage';
import video from '../../resources/video.mp4';
import Book1 from './HTML CSS JavaScript by ARB.pdf';
import Quiz from '../../Quiz/Quiz';
import WebDevCompiler from '../../Compilers/WebDevCompiler';

const JS01 = () => {
  return (
    <div>
      <div>
        <PageTemplate
          CourseName='Javascript Complete Course'
          Section1='Introduction to Javascript'
          Section2='Basic Programming Concepts '
          Section3='OOPS in Javascript '
          Section4='Javascript the wierd parts '
          video={video}
          Book1={Book1}
          Book1Name='JS Cheat Sheet'
          Author1=' Bhavesh Mhadse'
          Book1Desc='This cheat sheet contains all necessarymaterial to start practising Javascript'
          Book1={Book1}
          Book2Name='HTML CSS JS Notes'
          Author2=' Atharva Bhagat'
          Book2Desc='This book contains handwritten notes of HTML , CSS and JavaScript'
        ></PageTemplate>
      </div>
      <div>
        <WebDevCompiler
          Language='js'
          Button1='Basic Style Tags'
          Button1Text="
          alert('Hello Kodeo')"
          Button2='Try'
          Button2Text='
          '
        />
      </div>
      <div>
        <Quiz name='JAVASCRIPT COMPLETE COURSE' />
      </div>
    </div>
  );
};

export default JS01;
