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
    AllCourses
} from '../../../global.styles';

import randomizer from '../../../randomizer'

import {
    CoursesArray ,
    OurCoursesCardInfo,
    

} from './DefaultData';

const OurCourses = () => {
    const [coursesArray, setcoursesArray] = useState(CoursesArray);
    const [CardInfoArray, setCardInfoArray] = useState(randomizer(OurCoursesCardInfo));
    

    return (
        <OurCoursesSection>
            <SectionHeader>Featured Courses</SectionHeader>
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
            <AllCourses>View All Courses</AllCourses>
        </OurCoursesSection>
    );
};

export default OurCourses;
