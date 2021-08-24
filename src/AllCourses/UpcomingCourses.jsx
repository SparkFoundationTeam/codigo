import React from 'react';
import './AllCourses.css';
import UpcomingCourseCard from './UpcomingCard';
import HtmlAtharva from '../resources/HTMLAtharva.png';
import Bhavesh from '../resources/bhavesh.jpg';

const UpcomingCourses = () => {
  const UpcomingCoursesCol1 = [
    {
      ImageLogo: HtmlAtharva,
      CourseName: 'CSS Complete Course',
      CourseInfo: 'The complete CSS Course to continue Web Development',
      TutorPic: Bhavesh,
      TutorName: 'Atharva Bhagat',
      SeriesName: 'Web Development Series',
    },
    
  ];
  const UpcomingCoursesCol2 = [
    {
      ImageLogo: HtmlAtharva,
      CourseName: 'CSS Complete Course',
      CourseInfo: 'The complete CSS Course to continue Web Development',
      TutorPic: Bhavesh,
      TutorName: 'Atharva Bhagat',
      SeriesName: 'Web Development Series',
    },
    
  ];
  return (
    <div className='Upcoming'>
      <h2 className='SectHeader'>Upcoming Courses</h2>
      <div className='CardHolder'>
        <div className='CardsContainer1'>
          {UpcomingCoursesCol1.map(eachCard => (
            <UpcomingCourseCard
              logo={eachCard.ImageLogo}
              tutor={eachCard.TutorName}
              tutorImg={eachCard.TutorPic}
              courseName={eachCard.CourseName}
              courseDesc={eachCard.CourseInfo}
              seriesName={eachCard.SeriesName}
            />
          ))}
        </div>
        <div className='CardsContainer2'>
          {UpcomingCoursesCol2.map(eachCard => (
            <UpcomingCourseCard
              logo={eachCard.ImageLogo}
              tutor={eachCard.TutorName}
              tutorImg={eachCard.TutorPic}
              courseName={eachCard.CourseName}
              courseDesc={eachCard.CourseInfo}
              seriesName={eachCard.SeriesName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourses;
