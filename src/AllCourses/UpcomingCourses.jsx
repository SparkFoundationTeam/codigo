import React from "react";
import "./AllCourses.css";
import UpcomingCourseCard from "./UpcomingCard";
import CSSAtharva from "../resources/CSSAtharva.png";
import CAdika from "../resources/CAdika.png";
import PythonBhavesh from "../resources/PYTHONVaishnavi.png";
import CPVaish from "../resources/CPPVaishnavi.png";
import Bhavesh from "../resources/bhaveshIcon.jpg";
import Atharva from "../resources/atharva.jpg";
import Vaishnavi from "../resources/vaishIcon.jpg";
import Adika from "../resources/adikaIcon.jpg";

const UpcomingCourses = () => {
  const UpcomingCoursesCol1 = [
    {
      ImageLogo: CSSAtharva,
      CourseName: "CSS Complete Course",
      CourseInfo: "The complete CSS Course to continue Web Development",
      TutorPic: Atharva,
      TutorName: "Atharva Bhagat",
      SeriesName: "Web Development Series",
    },
    {
      ImageLogo: PythonBhavesh,
      CourseName: "Python Complete Course",
      CourseInfo: "The complete Python Course to master the universe of python",
      TutorPic: Bhavesh,
      TutorName: "Bhavesh Mhadse",
      SeriesName: "Python Development Series",
    },
  ];
  const UpcomingCoursesCol2 = [
    {
      ImageLogo: CAdika,
      CourseName: "C Complete Course",
      CourseInfo: "The complete C Language Course for better understanding of programming",
      TutorPic: Adika,
      TutorName: "Adika Karnataki",
      SeriesName: "C / C++ Programming Series",
    },
    {
      ImageLogo: CPVaish,
      CourseName: "C++ Complete Course",
      CourseInfo: "The complete C++ course to get started with development",
      TutorPic: Vaishnavi,
      TutorName: "Vaisnavi Korgaonkar",
      SeriesName: "C / C++ Programming Series",
    },
  ];
  return (
    <div className='Upcoming'>
      <h2 className='SectHeader'>Upcoming Courses</h2>
      <div className='CardHolder'>
        <div className='CardsContainer1'>
          {UpcomingCoursesCol1.map(eachCard => (
            <UpcomingCourseCard logo={eachCard.ImageLogo} tutor={eachCard.TutorName} tutorImg={eachCard.TutorPic} courseName={eachCard.CourseName} courseDesc={eachCard.CourseInfo} seriesName={eachCard.SeriesName} />
          ))}
        </div>
        <div className='CardsContainer2'>
          {UpcomingCoursesCol2.map(eachCard => (
            <UpcomingCourseCard logo={eachCard.ImageLogo} tutor={eachCard.TutorName} tutorImg={eachCard.TutorPic} courseName={eachCard.CourseName} courseDesc={eachCard.CourseInfo} seriesName={eachCard.SeriesName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourses;
