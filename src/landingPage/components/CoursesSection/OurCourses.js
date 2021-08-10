import React, { useState } from 'react';

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
} from '../../../global.styles';

import {
  CoursesArray /* Hyat Je je course deto tyachi info jasa [python course, js course, c++ course] */,
  OurCoursesCardInfo /* Hyat Prytek Card Chi info */,
} from './DefaultData';

const OurCourses = () => {
  const [coursesArray, setcoursesArray] = useState(CoursesArray);
  const [CardInfoArray, setCardInfoArray] = useState(OurCoursesCardInfo);
  return (
    <OurCoursesSection>
      <SectionHeader>Our Courses</SectionHeader>
      <ButtonContainerDiv>
        <CourseSelectorButtonContainer>
          {coursesArray.map(eachCourse => (
            <CourseSelectorButton>{eachCourse}</CourseSelectorButton>
          ))}
        </CourseSelectorButtonContainer>
      </ButtonContainerDiv>
      <CoursesCardContainer>
        {CardInfoArray.map(eachObj => {
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
    </OurCoursesSection>
  );
};

export default OurCourses;
