import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../footer';
import codiGoIcon from '../resources/codiGo.png';
import './Template.css';
import menuIcon from '../resources/menuRes.png';
import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';

import Instagram from '../resources/insta-icon.png';
import Mail from '../resources/mail-icon.png';
import LinkedIn from '../resources/linkedin-icon.png';
import Github from '../resources/github-icon.png';
import Resume from '../resources/resume2.png';

import axios from 'axios';
import BackendUrl from '../BackendUrl';

import { UserContext } from '../MainContext';

const CourseEnrollTemplate = props => {
  let [menu, setMenu] = useState(false);

  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  const handleEnrollment = async () => {
    const obj = {
      email: signedInUser.email,
      course: {
        duration: props.CourseDuration,
        tutorName: props.TutorName,
        courseName: props.CourseName,
        courseId: props.CourseID,
        courseNameCertificate: props.SeriesName + ' > ' + props.CourseName,
      },
    };

    console.log(obj);
    let d = await axios.post(BackendUrl + 'Courses', obj);
    console.log(d);

    // axios.patch(BackendUrl+`user?username=${signedInUser.username}`)
    let loggedInUser = await axios.get(BackendUrl + `user?username=${signedInUser.username}&password=${signedInUser.password}`);

    console.log('User we got through mongo Db is : ', loggedInUser);

    const loggedInUserMessage = loggedInUser.data.message;

    loggedInUser = loggedInUser.data.user[0];
    localStorage.setItem('LoggedIn', true);
    setsignedInUser(loggedInUser);
    setUserFromLocalStorage(loggedInUser); //hoil atta
    /**
       {
  "email":"bhaveshmhadse9@gmail.com",
  "course": {
    "duration": "2 hrs",
    "tutorName": "Bhavesh Mhadse",
    "courseName": "Nodejs zero to hero",
    "courseNameCertificate": "CodiGo Python" 
  }
}
       */

    console.log();
  };
  const setUserFromLocalStorage = user => localStorage.setItem('User', JSON.stringify(user));

  const getUserFromLocalStorage = () => {
    console.log(localStorage.getItem('User'));
    return JSON.parse(localStorage.getItem('User'));
  };

  const rateSomeOne = () => {};

  useEffect(() => {
    setsignedInUser(getUserFromLocalStorage());
  }, []);
  return (
    <div data-aos='fade-in' data-aos-delay='100' data-aos-offset='0'>
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
          <Link to='/'>
            <img className='dashboard-pic' src={codiGoIcon}></img>
          </Link>
        </div>
        <h2 id='NavHeader'>
          {props.CourseName} {'>'} Information
        </h2>
        <div className='dashboard-links'>
          <ul>
            <Link to='/all-courses'>
              <li>All Courses</li>
            </Link>
            <a href='https://community-codigo.netlify.app' target='_blank'>
              {' '}
              <li>Community</li>{' '}
            </a>
            <a href='https://ide-codigo.netlify.app' target='_blank'>
              <li>Kōdo</li>
            </a>
            <a href='https://pixta-codigo.netlify.app' target='_blank'>
              <li>Pixta</li>
            </a>
            <Link to='/dashboard'>
              <li id='DashBoard'>
                <strong>Dashboard</strong>
              </li>
            </Link>
          </ul>
        </div>
        <div className='res-NavButton'>
          <img src={menuIcon} onClick={() => setMenu(!menu)}></img>
          <div style={{ display: menu ? 'flex' : 'none' }} data-aos='fade-up' data-aos-duration='5000'>
            <ul>
              <Link to='/all-courses'>
                <li>All Courses</li>
              </Link>
              <a href='https://community-codigo.netlify.app' target='_blank'>
                {' '}
                <li>Community</li>{' '}
              </a>
              <a href='https://ide-codigo.netlify.app' target='_blank'>
                <li>Kōdo</li>
              </a>
              <a href='https://pixta-codigo.netlify.app' target='_blank'>
                <li>Pixta</li>
              </a>
              <Link to='/dashboard'>
                <li id='DashBoard'>
                  <strong>Dashboard</strong>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className='ContentHolder'>
        <img src={BlobP1} id='bp1' style={{ position: 'absolute', height: '80vh', top: '-25vh', left: '-10vh', zIndex: -1 }} />
        <img src={BlobP2} id='bp2' />
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
                  <a href={props.resumeUrl} target='_blank'>
                    <img className='OwnerSocialMedia' src={Resume} title='Resume'></img>
                  </a>
                  <a href={props.githubUrl} title='Github Profile' target='_blank'>
                    <img className='OwnerSocialMedia' src={Github}></img>
                  </a>
                  <a href={props.linkedUrl} target='_blank'>
                    <img className='OwnerSocialMedia' src={LinkedIn} title='LinkedIN Profile'></img>
                  </a>
                  <a href={props.instaUrl} target='_blank'>
                    <img className='OwnerSocialMedia' src={Instagram} title='Instagram Profile'></img>
                  </a>
                  <a href={props.mailUrl} target='_blank'>
                    <img className='OwnerSocialMedia' src={Mail} title='Email Id'></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='Syllabus'>
        {/* <div>
            <video src={props.video} autoplay controls id='introVideo'></video>
        </div> */}
            <div id='List'>
              <h3>Course Syllabus</h3>
              <h4>{props.Section1}</h4>
              <h4>{props.Section2}</h4>
              <h4>{props.Section3}</h4>
              <h4>{props.Section4}</h4>
              <h4>{props.Section5}</h4>
            </div>
          </div>
          <Link to={props.CourseID}>
            <button onClick={handleEnrollment} id='EnrollNow'>
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseEnrollTemplate;
