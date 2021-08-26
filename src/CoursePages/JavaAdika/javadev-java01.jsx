import React from 'react';
import PageTemplate from '../coursePage';
import video from '../../resources/video.mp4';
import Book1 from './HTML CSS JavaScript by ARB.pdf';

const Java01 = () => {
  return (
    <div>
      <div>
        <PageTemplate
          CourseName='Java Complete Course'
          Section1=' Introduction to Java Programming '
          Section2=' Data Types in Java '
          Section3='Exception Handling in Java '
          Section4=' OOPS in Java '
          video={video}
          Book1={Book1}
          Book1Name='Java Cheat Sheet'
          Author1=' Adika Karnataki'
          Book1Desc='This cheat sheet contains all necessary material to start practising Java'
          Book1={Book1}
          Book2Name='Java Handwitten Notes'
          Author2=' Atharva Bhagat'
          Book2Desc='This book contains handwritten notes of Java'
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

export default Java01;
