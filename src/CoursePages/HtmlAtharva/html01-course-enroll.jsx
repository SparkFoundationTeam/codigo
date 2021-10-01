import React from "react";
import Template from "../course-enroll-template";
import video from "../../resources/video.mp4";

import tutorImg from "../../resources/atharva.jpg";
import resume from "../../resources/Atharva Bhagat.pdf";

const EnrollPage = () => {
  return (
    <div>
      <Template
        CourseName='Html Complete Course'
        CourseID='webdev-html01'
        SeriesName='códiGo : Web Development Series'
        CourseDesc='The complete HTML Course to kick-start Web Development'
        CourseDuration='1 Hour'
        CourseStructure='5 Sections and a Certificate Exam'
        TutorImg={tutorImg}
        TutorName='Atharva Bhagat'
        TutorDesc='Full Stack Developer who loves UI / UX Designing | 10+ Personal Projects'
        resumeUrl={resume}
        githubUrl='https://github.com/AtharvaBhagat'
        instaUrl='https://instagram.com/ath.ar.va'
        linkedUrl='https://linkedin.com/in/atharva-bhagat-2108'
        mailUrl='mailto:atharvabhagat@ieee.org?subject=I have a query for HTML Course&body=Hey Atharva !!'
        Section1='Section 1 : Introduction to Web Development '
        Section2='Section 2 : Basic Html Tags '
        Section3='Section 3 : Html Forms, Tables, Multimedia, Lists '
        Section4='Section 4 : HTML Semantics and Embeddings '
        Section5='Section 5 : Intoduction to basic CSS '
        video={video}></Template>
    </div>
  );
};

export default EnrollPage;
