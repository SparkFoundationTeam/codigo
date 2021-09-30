import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import { Link } from "react-router-dom";

import axios from "axios";

const CourseCard = props => {
  let [style, HoverStyle] = useState(false);

  let [rating, setRating] = useState(5);

  const getCourses = async () => {
    let { data } = await axios.get(`https://codigo-server.herokuapp.com/AllCourses/${props.shrtcourse}`);

    // console.log("data is ", data);

    try {
      let prefferedRating = data.filter(eachobj => eachobj.TutorName == props.tutor && eachobj.CourseName == props.courseName);
    //   console.log("done ", prefferedRating[0].rating);
      setRating(prefferedRating[0].rating);
    } catch {
    //   console.log("baray");
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Link to={`/${props.linker.toLowerCase()}-course-enroll`}>
      <div className='CoursesCard'>
        <img src={props.logo}></img>
        <div className='infoBox'>
          <h2>{props.courseName}</h2>

          <h5>{props.courseDesc}</h5>
          <div className='span'>
            <div className='spanner'>
              <img src={props.tutorImg}></img>
              <h4>{props.tutor}</h4>
            </div>
            <h4>{props.duration}</h4>
          </div>
          <div className='span'>
            <p>Ratings : {rating.toPrecision(2)} </p>
            <h6>Enroll Now</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
