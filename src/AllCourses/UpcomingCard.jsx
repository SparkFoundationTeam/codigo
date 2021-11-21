import React from "react";
import "./AllCourses.css";

const UpcomingCourseCard = props => {
  return (
    <div className='UpcomingCoursesCard'>
      <img src={props.logo}></img>
      <div className='infoBox'>
        <h2>{props.courseName}</h2>

        <h5>{props.courseDesc}</h5>
        <div className='span'>
          <div className='spanner'>
            <img src={props.tutorImg}></img>
            <h4>{props.tutor}</h4>
          </div>
        </div>
        <div className='span'>
          <p>Series: {props.seriesName} </p>

          <h6>Coming Soon</h6>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourseCard;
