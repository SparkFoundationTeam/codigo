import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe

import EnrolledCourseCard from './EnrolledCoursecard';
import { EnrolledCourses } from './defaultEnrolledCourses';

const MyCourses = () => {
  let [enrolledCourseArray, setenrolledCourseArray] = useState(EnrolledCourses);
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pnimport React, { useState, useContext, useEffect } from 'react';

  return (
    <div>
        <h1>{signedInUser.username} Enrolled courses</h1>
      {enrolledCourseArray.map(eachObj => (
        <EnrolledCourseCard
          tutorName={eachObj.tutorName}
          tutorImage={eachObj.tutorImage}
          courseName={eachObj.courseName}
          courseInfo={eachObj.courseInfo}
          courseImage={eachObj.courseImage}
          duration={eachObj.duration}
        />
      ))}
    </div>
  );
};

export default MyCourses;
