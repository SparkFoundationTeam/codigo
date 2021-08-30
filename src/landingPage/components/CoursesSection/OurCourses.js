import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CourseSelectorButtonContainer, CourseSelectorButton, CoursesCardContainer, ButtonContainerDiv, TutorImageContainer, OurCoursesSection, CourseCardHeader, CourseCardInfo, TutorContainer, SectionHeader, CoursesCard, TutorImage, CourseIcon, AllCourses, TutorName, Timing } from '../../../global.styles';

import randomizer from '../../../randomizer';

import { CoursesArray, OurCoursesCardInfo } from './DefaultData';

const OurCourses = () => {
  let [coursesArray, setcoursesArray] = useState(CoursesArray);
  let [CardInfoArray, setCardInfoArray] = useState(OurCoursesCardInfo);

  let [courseIndex, setCourseIndex] = useState(0);
  let [clickedCourseButtonStyles, setclickedCourseButtonStyles] = useState({
    color: 'white',
    background: 'rgb(4, 163, 163)',
    border: '2px solid transparent',
  });

  const shuffleCards = () => {
    let newArr = [];

    // for (let arrayCards of CoursesArray) { <-- ikde mistake hoti card array jaagi courses array madhe kela chukun
    for (let arrayCards of CardInfoArray) {
      newArr.push(randomizer(arrayCards));
    }

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
      <Link to='/all-courses'>
        <AllCourses> View & Enroll Courses</AllCourses>
      </Link>
    </OurCoursesSection>
  );
};

export default OurCourses;
