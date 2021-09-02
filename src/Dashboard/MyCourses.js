import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe

import EnrolledCourseCard from './EnrolledCoursecard';
import { EnrolledCourses } from './defaultEnrolledCourses';

const MyCourses = () => {
  let [enrolledCourseArray, setenrolledCourseArray] = useState(EnrolledCourses);
  let { signedInUser, setsignedInUser } = useContext(UserContext); // nai ala<- ani hi pnimport React, { useState, useContext, useEffect } from 'react';

  let converToArray = object => {
    let arr = [];
    console.log('Object inside converter is : ', object);
    console.log('type of Object inside converter is : ', typeof object);

    const converted = Object.values(object);

    console.log('after conversion ', converted);
    console.log('after conversion ', typeof converted);
    //bc kai hotoy

    return converted;

    console.log(arr);
    console.log(typeof arr);
  }; // database madhna object alya nntr redirect mrayla lagnr karan naitr sagla boom hoil thamb atta
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('User'));

  useEffect(() => {
    // for (let baray in signedInUser.enrolledCourses) {
    //   console.log(baray);
    // }
    // setsignedInUser(getUserFromLocalStorage()); //thamb kalla n he bgh on change hotay ithe type kela ki hota lgech
    setTimeout(() => setenrolledCourseArray(converToArray(signedInUser.enrolledCourses), 5000));
  }, []); // pn mg asa kela tr sarkha execute hot rahnr load vadhnr :) aaheka ha mc thamb settimeo ut

  return (
    <div>
      <h1>{signedInUser.username} Enrolled courses</h1>
      {enrolledCourseArray.map(eachObj => (
        <EnrolledCourseCard tutorName={eachObj.tutorName} tutorImage={eachObj.tutorImage} courseName={eachObj.courseName} courseInfo={eachObj.courseInfo} courseImage={eachObj.courseImage} duration={eachObj.duration} CourseId={eachObj.courseId} hasCompletedQuiz={eachObj.hasCompletedQuiz} id={eachObj._id} courseCertificateName={eachObj.courseNameCertificate} />
      ))}
    </div>
  );
};

export default MyCourses;
