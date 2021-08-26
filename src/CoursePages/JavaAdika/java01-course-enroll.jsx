import React from 'react';
import Template from '../course-enroll-template';
import video from '../../resources/video.mp4';

import tutorImg from '../../resources/bhavesh.jpg';

const EnrollPage = () => {
  return (
    <div>
      <Template
        CourseName='Java Complete Course'
        CourseID='javadev-java01'
        SeriesName='códiGo : Java Programming Series'
        CourseDesc='Java Programming explained thorougly to enter beautiful world of Java'
        CourseDuration='2 Hour'
        CourseStructure='4 Sections with Practise Quizes and a Certificate Exam'
        TutorImg = {tutorImg}
        TutorName='Adika Karnataki'
        TutorDesc='Enthusiast Programmer who loves Java Programming | 10+ Personal Projects'
        resumeUrl='url'
        githubUrl= 'url de ikde athya'
        instaUrl= 'https://instagram.com/ath.ar.va'
        linkedUrl= 'https://linkedin.com/in/atharva-bhagat-2108'
        mailUrl='mailto:atharvabhagat@ieee.org?subject=I have a query for HTML Course&body=Hey Atharva !!'
        Section1= 'Section 1 : Introduction to Java Development '
        Section2= 'Section 2 : Data Types in Java '
        Section3= 'Section 3 : Exception handling in Java '
        Section4= 'Section 4 : OOPS in Java '
        video={video}
      ></Template>
    </div>
  );
};

export default EnrollPage;
