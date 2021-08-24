import React, { useState, useContext, useEffect } from 'react';

import './enrolledCourse.css';

import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const EnrolledCourse = ({
  tutorName,
  tutorImage,
  courseName,
  courseInfo,
  courseImage,
  duration,
}) => {
  const handleCertificate = () => {
    /* api la course name, tutor ani user la gmail pathvaycha!
        axios.post("/certificate", {User.email, tutorName, courseName})
        */
  };
  const handleCourse = () => {
    // specific course cha url vr redirect maraycha
  };



  return (

    <div className='dashboard-CoursesCard'>
      
      <img className='dashboard-CourseIcon' src={courseImage} />
      <div style={{ width: '40%' }}>
        <h1 className='dashboard-CourseCardHeader'>{courseName}</h1>
        <p className='dashboard-CourseCardInfo'>{courseInfo}</p>
        <div className='dashboard-TutorContainer'>
          <div className='dashboard-TutorImageContainer'>
            <img className='dashboard-TutorImage' src={tutorImage} />
          </div>
          <div className='dashboard-TutorName'>{tutorName}</div>
          <div className='dashboard-Timing'>{duration}</div>
        </div>
      </div>
      <div className='dashboard-buttons-container'>
        <button onClick={handleCourse} className='dashboard-buttons'>
          View Course
        </button>
        <button onClick={handleCertificate} className='dashboard-buttons'>
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourse;
