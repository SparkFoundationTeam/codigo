import React from 'react';
import {Link} from 'react-router-dom'

import NavBar from '../navBar';
import Footer from '../footer';
import codiGoIcon from '../resources/codiGo.png';
import './Template.css';
import bhavesh from '../resources/bhavesh.jpg';
import menuIcon from '../resources/menuRes.png';

import Instagram from '../resources/insta-icon.png';
import Mail from '../resources/mail-icon.png';
import LinkedIn from '../resources/linkedin-icon.png';
import Github from '../resources/github-icon.png';
import Resume from '../resources/resume2.png';

const CourseEnrollTemplate = props => {
  return (
    <div>
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
          <img className='dashboard-pic' src={codiGoIcon}></img>
        </div>
        <h2 id='NavHeader'>
          {props.CourseName} {'>'} Information
        </h2>
        <div className='dashboard-links'>
          <ul>
            <li>All Courses</li>
            <li>Community</li>
            <li>Kōdo</li>
            <li>Pixzta</li>
            <li id='DashBoard'>
              <strong>Dashboard</strong>
            </li>
          </ul>
        </div>
        <div className='res-NavButton'>
          <img src={menuIcon}></img>
        </div>
      </div>
      <div className='ContentHolder'>
        <div className='MainContent'>
          <div className='SectionInfo'>
            <div className='CourseInfo'>
              <h3>Course Information</h3>
              <div className='TitleDesc'>
                <div className='Title'>Course Name</div>
                <div className='Desc'>{props.CourseName}</div>
              </div>
              <div className='TitleDesc'>
                <div className='Title'>Course ID</div>
                <div className='Desc'>{props.CourseID}</div>
              </div>
              <div className='TitleDesc'>
                <div className='Title'>Series Name</div>
                <div className='Desc'>{props.SeriesName}</div>
              </div>
              <div className='TitleDesc'>
                <div className='Title'>Course Description</div>
                <div className='Desc'>{props.CourseDesc}</div>
              </div>
              <div className='TitleDesc'>
                <div className='Title'>Course Duration</div>
                <div className='Desc'>{props.CourseDuration}</div>
              </div>
              <div className='TitleDesc'>
                <div className='Title'>Course Structure</div>
                <div className='Desc'>{props.CourseStructure}</div>
              </div>
            </div>
            <div className='TutorInfo'>
              <h3>Tutor Information</h3>
              <div className='TutorCard'>
                <img id='TutorIcon' src={props.TutorImg}></img>
                <h2>{props.TutorName}</h2>
                <p>  
                  <h4>{props.TutorDesc}</h4>
                </p>
                <div className='SocialMedia'>
                  <a href={props.resumeUrl}>
                    <img className='OwnerSocialMedia' src={Resume} title='Resume'></img>
                  </a>
                  <a href={props.githubUrl} title='Github Profile'>
                    <img className='OwnerSocialMedia' src={Github}></img>
                  </a>
                  <a href={props.linkedUrl}>
                    <img className='OwnerSocialMedia' src={LinkedIn} title='LinkedIN Profile'></img>
                  </a>
                  <a href={props.instaUrl}>
                    <img
                      className='OwnerSocialMedia'
                      src={Instagram}
                      title='Instagram Profile'
                    ></img>
                  </a>
                  <a href={props.mailUrl}>
                    <img className='OwnerSocialMedia' src={Mail} title='Email Id'></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='Syllabus'>
            <div>
              <video src={props.video} autoplay controls id='introVideo'></video>
            </div>
            <div id='List'>
              <h3>Course Syllabus</h3>
              <h4>{props.Section1}</h4>
              <h4>{props.Section2}</h4>
              <h4>{props.Section3}</h4>
              <h4>{props.Section4}</h4>
              <h4>{props.Section5}</h4>
              <h4>{props.Section6}</h4>
              <h4>{props.Section7}</h4>
            </div>
          </div>
          <Link to={props.CourseID}>
          <button id='EnrollNow'>
              Enroll Now
          </button></Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CourseEnrollTemplate;
