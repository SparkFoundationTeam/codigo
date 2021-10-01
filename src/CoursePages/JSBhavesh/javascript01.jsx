import React from "react";

import PageTemplate from "../coursePage";
import Quiz from "../../Quiz/Quiz";
import Footer from "../../footer";
import FeedbackTemplate from "../../Feedback/feedback";
import JavascriptBackendCompiler from "../../Compilers/JavascriptBackendCompiler";

import Book1 from "./HTML CSS JavaScript by ARB.pdf";
import Book2 from "./HTML CSS JavaScript by ARB.pdf";
import Book3 from "./JavascriptCheatsheet.pdf";

const JS01 = () => {
  return (
    <div>
      <PageTemplate
        CourseName='Javascript Complete Course'
        CourseID='javascript01'
        Section1='Introduction to Javascript'
        Section2='Basic Programming Concepts '
        Section3='OOPS in Javascript '
        Section4='Javascript the wierd parts '
        video='https://www.youtube.com/embed/NlXfxSDGRrM'
        Book1={Book1}
        Book1Name='JS Cheat Sheet'
        Author1=' Bhavesh Mhadse'
        Book1Desc='This cheat sheet contains all necessarymaterial to start practising Javascript'
        Book1={Book2}
        Book2Name='HTML CSS JS Notes'
        Author2=' Atharva Bhagat'
        Book2Desc='This book contains handwritten notes of HTML , CSS and JavaScript'
        Book3={Book3}
        Book3Name='Java Cheat Sheet'
        Author3='Online Resource'
        Book3Desc='This cheat sheet contains all necessary material to start practising Java'></PageTemplate>

      <JavascriptBackendCompiler Language='js' Button1='Try Code' Button1Text="console.log('Hello World')" Button2='Do Some Quick testing' Button2Text='const add = (a, b) => a + b' Button3='OOP' Button3Text='class Person {   } ' />
      <Quiz name='Javascript Complete Course' tutorName='Bhavesh Mhadse' courseID='javascript01' />
      <FeedbackTemplate CourseName='Javascript Complete Course' TutorName='Bhavesh Mhadse' ratings='4.9' five='20' four='14' three='3' two='2' one='1' understandable='4.9' friendly='4.5' technical='4.9' />
      <Footer />
    </div>
  );
};

export default JS01;
