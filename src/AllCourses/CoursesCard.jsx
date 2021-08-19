import React from 'react';
import './AllCourses.css'
import {Link} from 'react-router-dom';

const CourseCard = (props) => {
    return (
        <div className='CoursesCard'>
            <img src={props.logo}></img>
            <div className='infoBox'>
                <h2>{props.courseName}</h2>
                
                <h5>{props.courseDesc}</h5>
                <div className='span'>
                    <div className='spanner'>
                    <img src={props.tutorImg}></img>
                    <h4>{props.tutor}</h4></div>
                    <h4>{props.duration}</h4>
                </div>
                <div className='span'>
                <p>Ratings {props.ratings} </p>
                <Link to  = {`/${props.linker.toLowerCase()}-course-enroll`}><h6>Enroll Now</h6></Link>
               </div>
            </div>
        </div>
    );
}

export default CourseCard;