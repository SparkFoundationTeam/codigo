import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './dashboard.css';

import codiGoIcon from '../resources/codiGo.png';
import Bhavesh from '../resources/bhavesh.jpg';
import settingsIcon from '../resources/settings.png';
import cloudIcon from '../resources/storage.png';
import coursesIcon from '../resources/certificateIcon.png';
import logoutIcon from '../resources/logout.png';

import MyCourses from './MyCourses';
import MyDrive from './MyDrive';
import Settings from './Settings';

import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const DashBoard = () => {
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  let [componentArray, setComponentArray] = useState([<MyCourses />, <MyDrive />, <Settings />, <div />]);
  let [index, setIndex] = useState(3);
  let [clickedStyles, setClickStyle] = useState({
    borderLeftWidth: '5px',
    borderLeftColor: 'black',
    backgroundColor: 'rgb(199, 248, 248)',
  });
  const getUserFromLocalStorage = () => {
    console.log(localStorage.getItem('User'));
    return JSON.parse(localStorage.getItem('User'));
  };
  let dothisaftersometime = () => {
    console.log('after 3 seconds');
    console.log('Dashboard');
    console.log(signedInUser);
    for (let something of signedInUser.enrolledCourses) {
      console.log(something);
    }
  };

  useEffect(() => {
    setsignedInUser(getUserFromLocalStorage()); // antoy he apan ,_
    dothisaftersometime();
    //thamb
  }, []);

  return (
    <div className='dashboard'>
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
          <Link to='/'>
            <img className='dashboard-pic' src={codiGoIcon}></img>
          </Link>
        </div>

        <div className='dashboard-links'>
          <ul>
            <Link to='/all-courses'>
              <li>All Courses</li>
            </Link>
            <li>Community</li>
            <li>Kōdo</li>
            <li>Pixta</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='dashboard-sidebar'>
          <div className='personal-info'>
            <img src={Bhavesh}></img>
            <div className='user-info'>
              <h2 id='personName'>{signedInUser.username}</h2>
              <h2>{signedInUser.collegeName}</h2>
              <h2>{signedInUser.participantType}</h2>
            </div>
          </div>
          <hr></hr>
          <ul className='choices'>
            <li onClick={() => setIndex(0)} style={index === 0 ? clickedStyles : {}}>
              <img src={coursesIcon}></img>My Courses
            </li>
            <li onClick={() => setIndex(1)} style={index === 1 ? clickedStyles : {}}>
              <img src={cloudIcon}></img>Cloud
            </li>
            <li onClick={() => setIndex(2)} style={index === 2 ? clickedStyles : {}}>
              <img src={settingsIcon}></img>Settings
            </li>
          </ul>

          <button
            id='logout'
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            {' '}
            <img src={logoutIcon}></img>
            <Link to='/'>Logout</Link>
          </button>
        </div>

        <div className='other-section'>
          <div className='component'>
            {/* User.name Enrolled Courses */}

            {componentArray[index]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
