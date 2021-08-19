import React, { useEffect, useState } from 'react';

import {
  OurCoursesSection,
  SectionHeader,
  Timing,
  CourseSelectorButtonContainer,
  CourseSelectorButton,
  CoursesCardContainer,
  CoursesCard,
  CourseCardHeader,
  CourseCardInfo,
  ButtonContainerDiv,
  TutorContainer,
  TutorImage,
  TutorName,
  CourseIcon,
  TutorImageContainer,
  AllCourses,
} from '../../../global.styles';

import randomizer from '../../../randomizer';

import { CoursesArray, OurCoursesCardInfo } from './DefaultData';

const OurCourses = () => {
  let [coursesArray, setcoursesArray] = useState(CoursesArray);
  let [CardInfoArray, setCardInfoArray] = useState(OurCoursesCardInfo);

  let [courseIndex, setCourseIndex] = useState(Math.floor(Math.random() * 5) /* Sets Index Randomly from 0 to 4 */);
  let [clickedCourseButtonStyles, setclickedCourseButtonStyles] = useState({ color: 'white', background: 'aqua' });

  const shuffleCards = () => {
    let newArr = [];

    console.log('Before randomizing : ', coursesArray);

    for (let arrayCards of coursesArray) {
      newArr.push(randomizer(arrayCards));
    }

    console.log('After randomizing : ', coursesArray);

    setCardInfoArray(newArr);
  };

  useEffect(
    () => {
      shuffleCards();
    },
    [] /* He mhanje ki component mount zhala ki mgch render marnr */
  );

  return (
    <OurCoursesSection>
      <SectionHeader>Featured Courses</SectionHeader>
      <ButtonContainerDiv>
        <CourseSelectorButtonContainer>
          {coursesArray.map((eachCourse, buttonIndex) => (
            <CourseSelectorButton style={courseIndex === buttonIndex ? clickedCourseButtonStyles : {}} onClick={() => setCourseIndex(buttonIndex)}>
              {eachCourse}
            </CourseSelectorButton>
          ))}
        </CourseSelectorButtonContainer>
      </ButtonContainerDiv>
      <CoursesCardContainer>
        {CardInfoArray[courseIndex].map(eachObj => {
          return (
            <CoursesCard>
              <CourseIcon src={eachObj.ImageLogo} />
              <CourseCardHeader>{eachObj.CourseName}</CourseCardHeader>
              <CourseCardInfo>{eachObj.CourseInfo}</CourseCardInfo>
              <TutorContainer>
                <TutorImageContainer>
                  <TutorImage src={eachObj.AuthorPic} />
                </TutorImageContainer>
                <TutorName>{eachObj.AUthorName}</TutorName>
                <Timing>{eachObj.CourseDuration}</Timing>
              </TutorContainer>
            </CoursesCard>
          );
        })}
      </CoursesCardContainer>
      <AllCourses>View All Courses</AllCourses>
    </OurCoursesSection>
  );
};

export default OurCourses;
