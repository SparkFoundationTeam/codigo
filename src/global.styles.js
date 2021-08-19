import styled from 'styled-components';

export const OurCoursesSection = styled.div`
  width: auto;
  height: 100vh;
  display: block;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  color: rgb(4, 163, 163);
  width: auto;
  height: auto;
  display: grid;
  place-items: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.5vw;
  padding: 0.3rem;
  @media (max-width: 600px) {
    margin: 0;
    width: auto;
    font-size: 4vh;
    height: auto;
    margin: 0;
  }
`;

export const ButtonContainerDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 1vh 0 3vh 0;
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    height: auto;
    margin: 0;
    width: auto;
  }
`;

export const CourseSelectorButtonContainer = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content:center;
  @media (max-width: 600px) {
    width: 99vw;
    display:block;
    flex-direction:column;
    align-items:center;
    justify-content;center;
    height:auto;
    margin: 2vh auto;
    margin-bottom:0vh;
  }
`;

export const CourseSelectorButton = styled.button`
  width: auto;
  margin: 0 1rem;
  padding: 0.3rem;
  font-size: 1rem;
  border: 2px solid aqua;
  color: black;
  font-weight: 900;
  background: transparent;
  border-radius: 0.5rem;
  transition: all ease-in-out 200ms;
  padding: 0.6rem;
  &:hover {
    color: white;
    background: aqua;
  }
  @media (max-width: 600px) {
    padding: 0.3rem;
    font-size: 0.9rem;
    width: 45%;
    margin: 0.5rem;
    height: auto;
  }
`;

export const CoursesCardContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  place-items: center;
  @media (max-width: 600px) {
    font-size: 0.4rem;
    width: 100%;
    display: block;
  }
`;

export const CoursesCard = styled.div`
  width: 22%;
  height: auto;
  border-radius: 0.5rem;
  background: white;
  text-align: center;
  filter: drop-shadow(10px 10px 10px grey);
  transition: all ease-in-out 300ms;
  margin: auto;
  margin-top: 5vh;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(40px 5px 10px grey);
  }
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const CourseCardHeader = styled.h1`
  color: aqua;
  margin: 4% 0;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2vw;
  @media (max-width: 600px) {
    font-size: 3.5vh;
  }
`;
export const CourseCardInfo = styled.p`
  color: darkgrey;
  margin: 1vw 0;
  width: 100%;
  font-weight: 500;
  font-size: 1vw;
  @media (max-width: 600px) {
    font-size: 2vh;
    padding: 0.2rem;
  }
`;

export const TutorContainer = styled.div`
  display: inline-block;
  display: flex;
  width: 90%;
  margin: 0;
  padding: 0.5rem;
`;
export const TutorImageContainer = styled.div`
  margin: 0;
  width: 5vw;
  @media (max-width: 600px) {
    width: 5vh;
    margin-right: 0.5rem;
  }
`;
export const CourseIcon = styled.img`
  margin: 0;
  width: 100%;
  height: 25vh;
  background: blue;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  @media (max-width: 600px) {
    height: 20vh;
  }
`;
export const TutorImage = styled.img`
  margin: 0;
  height: 2.5vw;
  border-radius: 30rem;
  @media (max-width: 600px) {
    height: 5vh;
  }
`;
export const TutorName = styled.div`
  margin: 0;
  display: flex;
  place-items: center;
  width: 40%;
  height: auto;
  padding: 0;
  margin-right: auto;
  place-items: right;
  font-weight: 700;
  font-size: 0.8vw;
  @media (max-width: 600px) {
    font-size: 2vh;
  }
`;

export const Timing = styled.div`
  float: right;
  color: black;
  place-items: center;
  display: flex;
  margin-left: 12%;
  font-size: 1.5vh;
  @media (max-width: 600px) {
    font-weight: 200;
  }
`;

export const AllCourses = styled.button`
  font-size: 5vh;
  margin-top: 10vh;
  margin-left: 40vw;
  width: 20vw;
  text-align: center;
  padding: 0.3rem;
  font-size: 1rem;
  border: 2px solid darkgoldenrod;
  color: black;
  font-weight: 900;
  background: transparent;
  border-radius: 0.5rem;
  transition: all ease-in-out 200ms;
  padding: 0.6rem;
  &:hover {
    color: white;
    background: darkgoldenrod;
  }
  @media (max-width: 600px) {
    padding: 0.3rem;
    font-size: 0.9rem;
    width: 40vw;
    margin-left: 30vw;
    height: auto;
    margin-bottom: 10vh;
  }
`;