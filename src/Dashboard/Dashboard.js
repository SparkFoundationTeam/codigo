import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import "./dashboard.css";

import codiGoIcon from "../resources/codiGo.png";
import menuIcon from "../resources/menuRes.png";

import Bhavesh from "../resources/bhavesh.jpg";
import settingsIcon from "../resources/settings (1).png";
import settingsIconClicked from "../resources/settings.png";

import cloudIconClicked from "../resources/storage.png";
import cloudIcon from "../resources/cloud (1).png";
import coursesIcon from "../resources/certificate (1).png";
import coursesIconClicked from "../resources/certificateIcon.png";
import logoutIcon from "../resources/logout.png";

import male1 from "../resources/male1.png";
import male2 from "../resources/male2.png";
import female1 from "../resources/female1.png";
import female2 from "../resources/female2.png";
import userIcon from "../resources/edit.png";

import WelcomeDashboard from "./Welcome";
import MyCourses from "./MyCourses";
import MyDrive from "./MyDrive";
import Settings from "./Settings";

import { UserContext } from "../MainContext"; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const DashBoard = () => {
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn
  let [index, setIndex] = useState(3);
  let [menu, setMenu] = useState(false);
  let [avatarDiv, setAvatarDiv] = useState(false);

  let [componentArray, setComponentArray] = useState([<MyCourses />, <MyDrive />, <Settings />, <div />, <WelcomeDashboard />]);
  let [clickedStyles, setClickStyle] = useState({
    borderLeftWidth: "0.3vw",
    borderLeftColor: "black",
    backgroundColor: "rgb(199, 248, 248)",
    color: "black",
  });
  const getUserFromLocalStorage = () => {
    // console.log(localStorage.getItem('User'));
    return JSON.parse(localStorage.getItem("User"));
  };

  let [avatarArray, setAvatar] = useState([male1, male2, female1, female2]);

  let dothisaftersometime = () => {
    // console.log('after 3 seconds');
    // console.log('Dashboard');
    // console.log(signedInUser);
    setIndex(4);
    for (let something of signedInUser.enrolledCourses) {
      //   console.log(something);
    }
  };

  let userAvatarChoice = localStorage.getItem("UserAvatar");

  useEffect(() => {
    setsignedInUser(getUserFromLocalStorage()); // antoy he apan ,
    dothisaftersometime();

    //thamb
  }, []);

  return (
    <div className='dashboard'>
      <div className='dashboard-navbar' data-aos='fade-left'>
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
            <a href='https://community-codigo.netlify.app' target='_blank'>
              {" "}
              <li>Community</li>{" "}
            </a>
            <a href='https://ide-codigo.netlify.app' target='_blank'>
              <li>Kōdo</li>
            </a>
            <a href='https://pixta-codigo.netlify.app' target='_blank'>
              <li>Pixta</li>
            </a>
          </ul>
        </div>
        <div className='res-NavButton'>
          <img src={menuIcon} onClick={() => setMenu(!menu)}></img>
          <div style={{ display: menu ? "flex" : "none" }} data-aos='fade-up' data-aos-duration='5000'>
            <ul>
              <Link to='/all-courses'>
                <li id='DashBoard'>
                  <strong>All Courses</strong>
                </li>
              </Link>
              <a href='https://community-codigo.netlify.app' target='_blank'>
                {" "}
                <li>Community</li>{" "}
              </a>
              <a href='https://ide-codigo.netlify.app' target='_blank'>
                <li>Kōdo</li>
              </a>
              <a href='https://pixta-codigo.netlify.app' target='_blank'>
                <li>Pixta</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className='dashboard-sidebar' data-aos='fade-right' data-aos-offset='0'>
          <div className='personal-info' data-aos='fade-in' data-aos-delay='400' data-aos-offset='0'>
            <img
              src={userAvatarChoice ? avatarArray[userAvatarChoice] : avatarArray[0]}
              onClick={() => {
                setAvatarDiv(!avatarDiv);
              }}></img>
            <div className='user-info'>
              <h2 id='personName'>{signedInUser.username}</h2>
              <h2>{signedInUser.collegeName}</h2>
              <h2>{signedInUser.participantType}</h2>
              <img
                src={userIcon}
                id='ChangeAvatar'
                onClick={() => {
                  setAvatarDiv(!avatarDiv);
                }}></img>
            </div>
          </div>

          <div className='AvatarChoices' style={{ display: avatarDiv ? "flex" : "none" }} data-aos='fade-in' data-aos-offset='0' data-aos-delay='800'>
            <div>
              <img
                src={male1}
                onClick={() => {
                  localStorage.setItem("UserAvatar", 0);
                  window.location.reload();
                }}></img>
              <img
                src={male2}
                onClick={() => {
                  localStorage.setItem("UserAvatar", 1);
                  window.location.reload();
                }}></img>
            </div>
            <div>
              <img
                src={female1}
                onClick={() => {
                  localStorage.setItem("UserAvatar", 2);
                  window.location.reload();
                }}></img>
              <img
                src={female2}
                onClick={() => {
                  localStorage.setItem("UserAvatar", 3);
                  window.location.reload();
                }}></img>
            </div>
          </div>

          <hr></hr>
          <ul className='choices' data-aos='fade-in' data-aos-delay='400' data-aos-offset='0'>
            <li onClick={() => setIndex(0)} style={index === 0 ? clickedStyles : {}}>
              <img src={index === 0 ? coursesIconClicked : coursesIcon}></img>
              <p>My Courses</p>
            </li>
            <li onClick={() => setIndex(1)} style={index === 1 ? clickedStyles : {}}>
              <img src={index === 1 ? cloudIconClicked : cloudIcon}></img>
              <p>Cloud</p>
            </li>
            <li onClick={() => setIndex(2)} style={index === 2 ? clickedStyles : {}}>
              <img src={index === 2 ? settingsIconClicked : settingsIcon}></img>
              <p>Settings</p>
            </li>
            <li id='logout'>
              <button
                onClick={() => {
                  localStorage.removeItem("LoggedIn");
                  localStorage.removeItem("User");

                  window.location.reload();
                }}>
                {" "}
                <img src={logoutIcon}></img>
                <Link to='/login' style={{ textDecoration: "none" }}>
                  <p>Logout</p>
                </Link>
              </button>
            </li>
          </ul>
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
