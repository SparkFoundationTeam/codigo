import React from 'react';
import PageTemplate from '../coursePage';
import video from '../../resources/video.mp4';
import Book1 from './HTML CSS JavaScript by ARB.pdf';

import Quiz from '../../Quiz/Quiz';
import WebDevCompiler from '../../Compilers/WebDevCompiler';
import Footer from '../../footer';
const Html01 = () => {
  return (
    <div>
      <PageTemplate
        CourseName='Python Complete Course'
        Section1=' Introduction to Web Development '
        Section2=' Basic Html Tags '
        Section3=' Html Forms, Tables, Multimedia, Lists '
        Section4=' HTML Semantics and Embeddings '
        Section5='Intoduction to basic CSS '
        video={video}
        Book1={Book1}
        Book1Name='Python Cheat Sheet'
        Author1='Vaishnavi Korgaonkar'
        Book1Desc='This cheat sheet contains all necessary tags and material to start practising HTML'
        Book1={Book1}
        Book2Name='Python Notes'
        Author2='Vaishnavi Korgaonkar'
        Book2Desc='This book contains handwritten notes of Python'
      />

      <Quiz name='PYTHON COMPLETE COURSE' />

      <Footer />
    </div>
  );
};

export default Html01;
