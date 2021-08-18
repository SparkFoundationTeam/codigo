import React, { useState } from 'react';

import EnrolledCourseCard from './EnrolledCoursecard';
import { EnrolledCourses } from './defaultEnrolledCourses';

const MyCourses = () => {
  let [enrolledCourseArray, setenrolledCourseArray] = useState(EnrolledCourses);
  return (
    <div>
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
