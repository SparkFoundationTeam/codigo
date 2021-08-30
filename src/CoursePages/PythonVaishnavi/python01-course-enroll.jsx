import React from 'react';
import Template from '../course-enroll-template';
import video from '../../resources/video.mp4';

import tutorImg from '../../resources/bhavesh.jpg';

const EnrollPage = () => {
  return (
    <div>
      <Template
        CourseName='Python Complete Course'
        CourseID='pydev-python01'
        SeriesName='códiGo : Python Development Series'
        CourseDesc='Complete Python Course loaded with various interesting Concepts'
        CourseDuration='2 Hour'
        CourseStructure='4 Sections with Practise Quizes and a Certificate Exam'
        TutorImg={tutorImg}
        TutorName='Vaishnavi Korgaonkar'
        TutorDesc='Full Stack Developer who loves Python | 10+ Personal Projects'
        resumeUrl='url'
        githubUrl='url de ikde athya'
        instaUrl='https://instagram.com/ath.ar.va'
        linkedUrl='https://linkedin.com/in/atharva-bhagat-2108'
        mailUrl='mailto:vaishnavikorgaonkar@gmail.com?subject=I have a query for Python Course&body=Hey Vaishnavi !!'
        Section1='Section 1 : Introduction to Web Development '
        Section2='Section 2 : Basic Html Tags '
        Section3='Section 3 : Html Forms, Tables, Multimedia, Lists '
        Section4='Section 4 : HTML Semantics and Embeddings '
        Section5='Section 5 : Intoduction to basic CSS '
        video={video}
      ></Template>
    </div>
  );
};

export default EnrollPage;
