import React from 'react';
import PageTemplate from '../coursePage';
import video from '../../resources/video.mp4';
import Book1 from './JavaNotes.pdf';
import Book2 from './JavaBook.pdf';

import Book3 from './JavaCheatSheet.pdf';

import Quiz from '../../Quiz/Quiz';
import WebDevCompiler from '../../Compilers/WebDevCompiler';
import Footer from '../../footer';
import FeedbackTemplate from '../../Feedback/feedback';

const Java01 = () => {
  return (
    <div>
      <PageTemplate CourseName='Java Complete Course (Releasing Soon)' 
      Section1=' Introduction to Java Programming ' 
      Section2=' Data Types in Java ' 
      Section3='Exception Handling in Java 
      ' Section4=' OOPS in Java ' video="" 
      Book3={Book3} 
      Book3Name='Java Cheat Sheet' 
      Author3='Online Resource' 
      Book3Desc='This cheat sheet contains all necessary material to start practising Java' 
      Book1={Book1} 
      Book1Name='Java Handwitten Notes' 
      Author1=' Adika Karnataki' 
      Book1Desc='This book contains handwritten notes of Java' 
      Book2={Book2} 
      Book2Name='Java Book' 
      Author2='Atharva Bhagat' 
      Book2Desc='This book contains theoritical notes of Java'/>

      {/* <Quiz name='Java Complete Course' tutorName='Adika Karnataki' courseID='java01' /> */}
      {/* <FeedbackTemplate CourseName='Java Complete Course' TutorName='Adika Karnataki' ratings='4.9' five='20' four='14' three='3' two='2' one='1' understandable='4.9' friendly='4.8' technical='4.7' /> */}

      <Footer />
    </div>
  );
};

export default Java01;
