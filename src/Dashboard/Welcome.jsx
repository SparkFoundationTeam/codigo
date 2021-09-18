import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../MainContext';

import './Welcome.css';
import dashboardIcon from '../resources/dashboard.gif';

import enrolledDash from '../resources/enrolledDash.gif';
import timeDash from '../resources/timeDash.gif';
import certificateDash from '../resources/certificateDash.gif';
import codiGoIcon from '../resources/codiGo.png';

import nightOwl from '../resources/night.gif';
import evening from '../resources/evening.gif';
import morning from '../resources/morning.gif';
import afternoon from '../resources/afternoon.gif';

const WelcomeDashboard = () => {
  let { signedInUser, setsignedInUser } = useContext(UserContext); // nai ala<- ani hi pnimport React, { useState, useContext, useEffect } from 'react';

  const user = JSON.parse(localStorage.getItem('User'));

  const TimeTotal = () => {
    let totalDuration = 0;
    for (let index = 0; index < user.enrolledCourses.length; index++) {
      totalDuration = totalDuration + parseInt(user.enrolledCourses[index].duration.split(' ', 1));
    }
    return totalDuration;
  };
  const CertificatesTotal = () => {
    let totalCertificates = 0;
    for (let index = 0; index < user.enrolledCourses.length; index++) {
      if (user.enrolledCourses[index].hasCompletedQuiz) {
        totalCertificates = totalCertificates + 1;
      }
    }

    return totalCertificates;
  };
  let time = new Date().getHours().toLocaleString();

  const setMessage = () => {
    if (time < 4) {
      return 'Hey Night Owl , ';
    } else if (time < 12) {
      return 'Good Morning , ';
    } else if (time < 16) {
      return ' Good Afternoon , ';
    } else {
      return 'Good Evening , ';
    }
  };
  let certificatesNames = [];

  for (let index = 0; index < user.enrolledCourses.length; index++) {
    if (user.enrolledCourses[index].hasCompletedQuiz) {
      certificatesNames.push(user.enrolledCourses[index].courseNameCertificate);
    }
  }

  if (certificatesNames.length === 0) {
    certificatesNames.push('No Certificates yet');
  }

  console.log(certificatesNames);
  const listItems = certificatesNames.map(numbers => <p>{numbers}</p>);

  return (
    <div className='WelcomeDashboard'>
      <div className='HeaderMessage'>
        <h1>
          {setMessage()}
          {user.fullName.split(' ', 1)}
        </h1>
        <img src={time < 4 ? nightOwl : time < 12 ? morning : time < 16 ? afternoon : evening} />
      </div>
      <div className='stats'>
        <div className='StatsHolder'>
          <div className='StatisticsShower'>
            <img src={enrolledDash} />

            <div>
              <h3> {user.enrolledCourses.length}</h3>
              <h2>Courses Enrolled</h2>
            </div>
          </div>

          <div className='AccountCard'>
            <div style={{ textAlign: 'left' }}>
              <h3>{user.fullName.toUpperCase()}</h3>
              <p>{user._id}</p>
            </div>

            <h4>códiGo MEMBERSHIP CARD</h4>
            <img src={codiGoIcon}></img>
            <h2 className='MembershipType'>FREEMIUM</h2>
          </div>
        </div>

        <div className='ROw2'>
          <div className='NamesShower'>
            <div>
              <h2>Earned Certificates</h2>
              <h3>{listItems}</h3>
              

            </div>
          </div>

          <div className='StatisticsShower'>
            <img src={certificateDash} />

            <div>
              <h3> {CertificatesTotal()}</h3>
              <h2>{CertificatesTotal() === 1 ? 'Certificate' : 'Certificates'}</h2>
            </div>
          </div>
        </div>
      </div>
      <img src={dashboardIcon} />
    </div>
  );
};

export default WelcomeDashboard;
