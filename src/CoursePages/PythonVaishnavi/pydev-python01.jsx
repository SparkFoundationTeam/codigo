import React from "react";
import PageTemplate from "../coursePage";
import video from "../../resources/video.mp4";
import Book1 from "./PythonCheatSheet.pdf";
import Book2 from "./PythonBook.pdf";

import Book3 from "./PythonCheatSheet.pdf";

import Quiz from "../../Quiz/Quiz";
import WebDevCompiler from "../../Compilers/WebDevCompiler";
import Footer from "../../footer";
import FeedbackTemplate from "../../Feedback/feedback";

const Html01 = () => {
  return (
    <div>
      <PageTemplate
        CourseName='Python Complete Course (Releasing Soon)'
        Section1=' Introduction to Python'
        Section2=' Python Data Types '
        Section3=' Conditional Statements '
        Section4=' OOPS in Python '
        Section5='Python Libraries '
        video=""
        Book3={Book3}
        Book3Name='Python Cheat Sheet'
        Author3='Online Resource'
        Book3Desc='This cheat sheet contains all necessary tags and material to start practising HTML'
        Book1={Book1}
        Book1Name='Python Notes'
        Author1='Vaishnavi Korgaonkar'
        Book1Desc='This book contains handwritten notes of Python'
        Book2={Book2}
        Book2Name='Python Book'
        Author2='Atharva Bhagat'
        Book2Desc='This book contains theoritical notes and summary of Python'
      />

      {/* <Quiz name='Python Complete Course' tutorName='Vaishnavi Korgaonkar' courseID='python01'/> */}
      {/* <FeedbackTemplate CourseName='Python Complete Course' TutorName='Vaishnavi Korgaonkar' ratings='4.9' five='20' four='14' three='3' two='2' one='1' understandable='4.9' friendly='4.8' technical='4.7' /> */}

      <Footer />
    </div>
  );
};

export default Html01;
