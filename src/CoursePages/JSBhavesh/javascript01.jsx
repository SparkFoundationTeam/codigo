import React from 'react';
import PageTemplate from '../coursePage';
import video from '../../resources/video.mp4';
import Book1 from './HTML CSS JavaScript by ARB.pdf';

const Html01 = () => {
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
          Button1='Basic Style Tags'
          Button1Text='
          <h1>Hello Kodeo</h1>
          <h2>Hello Kodeo</h2>
          <p>Hello Kodeo -- Paragraph</p>'
          Button2='Try'
          Button2Text='
          <h1>Hello World</h1>
          <h2>Hello World</h2>'
        />
      </div>
    </div>
  );
};

export default Html01;
