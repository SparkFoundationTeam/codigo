import React, { useState, useContext, useEffect } from 'react';

import BackendUrl from '../BackendUrl';
import axios from 'axios';

import './enrolledCourse.css';

import { ImageMap } from './ImageHashMap';

import Quiz from '../Quiz/Quiz';

import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe
import { Link } from 'react-router-dom';

const EnrolledCourse = ({ tutorName, tutorImage, courseName, courseInfo, courseImage, duration, hasCompletedQuiz, CourseId, id, courseCertificateName }) => {
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  let [imageMap, setImageMap] = useState(ImageMap);

  let [showQuiz, setShowQuiz] = useState(false);
  const handleCertificate = () => {
    // if (hasCompletedQuiz) {
    let Obj = { tutorName: tutorName.split(' ')[0].toLowerCase(), userName: signedInUser.fullName, course: courseCertificateName, email: signedInUser.email, id: id };
    axios.post(BackendUrl + 'Certificates', Obj);
 };
  const handleCourse = () => {
  }; 

  console.log(courseName);

  return (

    
    <div className='dashboard-CoursesCard'>
      <img className='dashboard-CourseIcon' src={imageMap[courseName.split(' ')[0]]} />
      <div style={{ width: '40%' }}>
        <h1 className='dashboard-CourseCardHeader'>{courseName}</h1>
        <p className='dashboard-CourseCardInfo'>{courseInfo}</p>
        <div className='dashboard-TutorContainer'>
          <div className='dashboard-TutorImageContainer'>
            <img className='dashboard-TutorImage' src={imageMap[tutorName.split(' ')[0]]} />
          </div>
          <div className='dashboard-TutorName'>{tutorName}</div>
          <div className='dashboard-Timing'>{duration}</div>
        </div>
      </div>
      <div className='dashboard-buttons-container'>
        {/* <button onClick={() => setShowQuiz(true)} className='dashboard-buttons'> */}
        <Link style={{ textTransform: 'none' }} to={CourseId} className='dashboard-buttons'>
          Show Course
        </Link>

        {/* </button> */}
        <button onClick={handleCertificate} className='dashboard-buttons' /*style={hasCompletedQuiz ? {visibility:'visible'} : {visibility:'hidden'}}*/>
          Download Certificate
        </button>
      </div>
      {/* {showQuiz && <Quiz name={courseName} course={{ tutorName, tutorImage, courseName, courseInfo, courseImage, duration, hasCompletedQuiz }} />} */}
    </div>
  );
};

export default EnrolledCourse;
