import React from "react";
import Template from "../course-enroll-template";
import video from "../../resources/video.mp4";

import tutorImg from "../../resources/vaishIcon.jpg";
import resume from "../../resources/Vaishnavi Korgaonkar.pdf";

const EnrollPage = () => {
  return (
    <div>
      <Template
        CourseName='Python Complete Course (Releasing Soon)'
        CourseID='pydev-python01'
        SeriesName='códiGo : Python Development Series'
        CourseDesc='Complete Python Course loaded with various interesting Concepts'
        CourseDuration='2 Hour'
        CourseStructure='4 Sections with Practise Quizes and a Certificate Exam'
        TutorImg={tutorImg}
        TutorName='Vaishnavi Korgaonkar'
        TutorDesc='Full Stack Developer who loves Python | 10+ Personal Projects'
        resumeUrl={resume}
        githubUrl='https://github.com/vaishnavi2512'
        instaUrl='https://instagram.com/vaishnavi2512'
        linkedUrl='https://www.linkedin.com/in/vaishnavi-korgaonkar-2a37b4216/'
        mailUrl='mailto:vaishnavikorgaonkar@gmail.com?subject=I have a query for Python Course&body=Hey Vaishnavi !!'
        Section1=' Introduction to Python'
        Section2=' Python Data Types '
        Section3=' Conditional Statements '
        Section4=' OOPS in Python '
        Section5='Python Libraries '
        video={video}></Template>
    </div>
  );
};

export default EnrollPage;
