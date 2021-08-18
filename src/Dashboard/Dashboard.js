import React, { useState } from 'react';

import './dashboard.css';

//ikde import marr atharvca resourse nusar
import codiGoIcon from './Images/codiGo.png';
import Bhavesh from './Images/bhavesh.jpg';

import MyCourses from './MyCourses';
import MyDrive from './MyDrive';
import Settings from './Settings';

const DashBoard = () => {
  // /Dashboard vr ha component disnr :)

  let [componentArray, setComponentArray] = useState([<MyCourses />, <MyDrive />, <Settings />]);
  let [index, setIndex] = useState(0);
  let [clickedStyles, setClickStyle] = useState({
    borderLeftWidth: '5px',
    borderLeftColor: 'black',
    backgroundColor: 'rgb(199, 248, 248)',
  });

  return (
    <div className='dashboard'>
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
          <img className='dashboard-pic' src={codiGoIcon}></img>
        </div>
        <div className='dashboard-links'>
          <ul>
            <li>All Courses</li>
            <li>Comunity Forum</li>
            <li>Online Compiler</li>
            <li>Pizta</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='dashboard-sidebar'>
          <div className='personal-info'>
            <img src={Bhavesh}></img>
            <div className='user-info'>
              <h1>Kodeo</h1>
              <h2>College Name</h2>
              <h2>University Name</h2>
            </div>
          </div>
          <hr></hr>
          <ul className='choices'>
            <li onClick={() => setIndex(0)} style={index === 0 ? clickedStyles : {}}>
              My Courses
            </li>
            <li onClick={() => setIndex(1)} style={index === 1 ? clickedStyles : {}}>
              My Drive
            </li>
            <li onClick={() => setIndex(2)} style={index === 2 ? clickedStyles : {}}>
              Settings
            </li>
          </ul>
        </div>

        <div className='other-section'>
          <div className='component'>
            {/* User.name Enrolled Courses */}
            <h1>Kodeos Enrolled courses</h1>
            {componentArray[index]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
