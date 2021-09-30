import React from 'react';
import Template from '../course-enroll-template';
import video from '../../resources/video.mp4';

import tutorImg from '../../resources/adikaIcon.jpg';
import resume from '../../resources/Adika Karnataki.pdf'

const EnrollPage = () => {
  return (
    <div>
      <Template
        CourseName='Java Complete Course (Releasing Soon)'
        CourseID='javadev-java01'
        SeriesName='códiGo : Java Programming Series'
        CourseDesc='Java Programming explained thorougly to enter beautiful world of Java'
        CourseDuration='2 Hour'
        CourseStructure='4 Sections with Practise Quizes and a Certificate Exam'
        TutorImg={tutorImg}
        TutorName='Adika Karnataki'
        TutorDesc='Enthusiast Programmer who loves Java Programming | 10+ Personal Projects'
        resumeUrl={resume}
        githubUrl='https://github.com/adika2321'
        instaUrl= 'https://instagram.com/adikakarnataki'
    linkedUrl= 'https://linkedin.com/in/adika-karnataki'
        mailUrl='mailto:adikakarnataki@gmail.com?subject=I have a query for Java Course&body=Hey Adika !!'
        Section1='Section 1 : Introduction to Java Development '
        Section2='Section 2 : Data Types in Java '
        Section3='Section 3 : Exception handling in Java '
        Section4='Section 4 : OOPS in Java '
        video={video}
      ></Template>
    </div>
  );
};

export default EnrollPage;
