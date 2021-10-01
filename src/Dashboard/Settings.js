import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import "./settings.css";

import { db } from "../fireBase";

import { UserContext } from "../MainContext"; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const Settings = () => {
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  let [showPasswordModal, setShowPasswordModal] = useState(false);

  db.collection("Statistics")
    .doc(signedInUser.email)
    .get()
    .then(doc => {
      if (doc.exists) {
        localStorage.setItem("Interests", doc.data().interests.toString());
        localStorage.setItem("Strengths", doc.data().strengths.toString());
        localStorage.setItem("Weaknesses", doc.data().weaknesses.toString());
        // console.log('This',doc.data());
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
      }
    })
    .catch(error => {
      //   console.log("Error getting document:", error);
    });

  const handleUserSettings = e => {
    //
    setsignedInUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleUserUpdate = async e => {
    e.preventDefault();
    setUserFromLocalStorage(signedInUser);

    // await setsignedInUser(prevUser => ({ ...prevUser, password: newpass }));
    let data = await axios.patch("https://codigo-server.herokuapp.com/user", {
      email: signedInUser.email,
      updates: { ...signedInUser },
    });

    db.collection("Statistics")
      .doc(signedInUser.email)
      .set({
        email: signedInUser.email,
        interests: interestsArray,
        strengths: strengthsArray,
        weaknesses: weakArray,
      })
      .then(() => {})
      .catch(error => {
        alert(error.message);
      });

    // console.log("after Changes user is : ", data.data);
  };

  const setUserFromLocalStorage = user => localStorage.setItem("User", JSON.stringify(user));
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("User"));

  const setNewPassword = async ({ old, newpass, confirmNewpass }) => {
    // alert(signedInUser.password, ' ', old, ' ', newpass, ' ', confirmNewpass);
    if (old !== signedInUser.password) {
      alert("Wrong password!");
      return;
    }
    if (newpass !== confirmNewpass) {
      alert("Password doesnt match!");
      return;
    } else {
      await setsignedInUser(prevUser => ({ ...prevUser, password: newpass }));
      let data = await axios.patch("https://codigo-server.herokuapp.com/user", {
        email: signedInUser.email,
        updates: { password: newpass },
      });

      setShowPasswordModal(false);
      setUserFromLocalStorage({ ...signedInUser, password: newpass });
      alert("Password Updated");
      document.querySelector(".settings-button").style.visibility = "visible";
    }
  };
  useEffect(() => {
    setsignedInUser(getUserFromLocalStorage());
  }, []);

  let interestsArray = [];
  let items = localStorage.getItem("Interests").split(",");
  for (let i in items) {
    interestsArray.push(items[i]);
  }

  let [interestsDiv, setInterestsDiv] = useState(false);

  let [strengthsDiv, setStrengthsDiv] = useState(false);
  let strengthsArray = [];

  let items2 = localStorage.getItem("Strengths").split(",");
  for (let i in items2) {
    strengthsArray.push(items2[i]);
  }

  let [weakDiv, setWeakDiv] = useState(false);
  let weakArray = [];

  let items3 = localStorage.getItem("Weaknesses").split(",");
  for (let i in items3) {
    weakArray.push(items3[i]);
  }

  const HandleInterests = name => {
    if (interestsArray.includes(name)) {
      interestsArray.splice(interestsArray.indexOf(name), 1);
    } else {
      interestsArray.push(name);
    }
    // console.log(interestsArray);
    document.getElementById("InterestsShower").value = interestsArray;
    localStorage.setItem("Interests", interestsArray);
  };

  const HandleStrengths = name => {
    if (strengthsArray.includes(name)) {
      strengthsArray.splice(strengthsArray.indexOf(name), 1);
    } else {
      strengthsArray.push(name);
    }
    // console.log(strengthsArray);
    document.getElementById("StrengthsShower").value = strengthsArray;
    localStorage.setItem("Strengths", strengthsArray);
  };

  const HandleSWeakness = name => {
    if (weakArray.includes(name)) {
      weakArray.splice(weakArray.indexOf(name), 1);
    } else {
      weakArray.push(name);
    }
    // console.log(weakArray);
    document.getElementById("WeaknessShower").value = weakArray;
    localStorage.setItem("Weaknesses", weakArray);
  };
  return (
    <div className='SettingsContainer'>
      <div className='settings-column'>
        <div className='account-settings' data-aos='fade-in' data-aos-delay='100' data-aos-offset='0'>
          <h1>Account Settings</h1>
          <h3>Personal Information</h3>
          {/* <h6>{JSON.stringify(signedInUser)}</h6> */}
          <div className='BoxInput'>
            <p>Full Name</p>
            <input style={{ cursor: "not-allowed" }} disabled value={signedInUser.fullName} className='settings-input' name='firstname' />
          </div>{" "}
          <div className='BoxInput'>
            <p> Email address</p>
            <input style={{ cursor: "not-allowed" }} disabled value={signedInUser.email} className='settings-input' name='email' />
          </div>
          <div className='BoxInput'>
            <p>Username</p>
            <input value={signedInUser.username} onChange={handleUserSettings} className='settings-input' name='username' />
          </div>{" "}
          <div className='BoxInput'>
            <p>Mobile No</p>
            <input value={signedInUser.mobileNumber} onChange={handleUserSettings} className='settings-input' name='mobilenumber' />
          </div>
          <hr className='horizontal-line'></hr>
        </div>

        <div className='account-settings' data-aos='fade-in' data-aos-delay='300' data-aos-offset='0'>
          <h1>Security Settings</h1>
          <button className='settings-button' onClick={() => setShowPasswordModal(true)}>
            Change Password
          </button>
          {showPasswordModal && <PasswordChangeModal changePassword={e => setNewPassword(e)} />}
        </div>
      </div>
      <div className='settings-column' style={{ marginLeft: "2vw", width: "1vw" }}>
        <hr className='vertical-line'></hr>
      </div>
      <div className='settings-column' style={{ marginLeft: "1vw" }} data-aos='fade-in' data-aos-delay='500' data-aos-offset='0'>
        <div className='account-settings'>
          <h1>Educational Settings</h1>
          <h3>University Information</h3>
          <p>Year Of Study</p>
          <select className='settings-input' name='firstname'>
            <option value='Professional'>{signedInUser.participantType}</option>
            <option value='Professional'>Professional / Faculty</option>
            <option value='Under Graduate Student'>Under Graduate Student</option>
            <option value='Post Graduate Student'>Post Graduate Student</option>
            <option value='11-12th'>11-12th Grade</option>
            <option value='Below 10th'>Below 10th Grade</option>
          </select>

          <p>Name of University</p>
          <input value={signedInUser.collegeName} onChange={handleUserSettings} className='settings-input' name='lastname' />
          <hr className='horizontal-line'></hr>
        </div>
        <div className='account-settings'>
          <h1>About You</h1>
          <h3>Cognitive Statistics</h3>

          <p>Interests</p>
          <textarea className='settings-input AboutYouData' disabled name='firstname' id='InterestsShower' value={interestsArray} />
          <button
            className='SelectMeButton'
            onClick={() => {
              setInterestsDiv(!interestsDiv);
            }}>
            Select Interests
          </button>
          <div style={{ display: interestsDiv ? " " : "none" }}>
            <ul className='itemsStats'>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("Frontend Development");
                  }}
                />
                Frontend Development
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("Backend Development");
                  }}
                />
                Backend Development
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("Java Programming");
                  }}
                />
                Java Programming
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("Python Programming");
                  }}
                />
                Python Programming
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("UI / UX Designing");
                  }}
                />
                UI / UX Designing
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("Database Management");
                  }}
                />
                Database Management
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleInterests("Data Structures & Algorithms");
                  }}
                />
                Data Structures & Algorithms
              </li>
            </ul>
          </div>
          <p> Strengths</p>
          <textarea className='settings-input AboutYouData' name='lastname' id='StrengthsShower' disabled value={strengthsArray} />
          <button
            className='SelectMeButton'
            onClick={() => {
              setStrengthsDiv(!strengthsDiv);
            }}>
            Select Strengths
          </button>
          <div style={{ display: strengthsDiv ? " " : "none" }}>
            <ul className='itemsStats'>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleStrengths("Self Confidence");
                  }}
                />
                Self Confidence
              </li>
              <li>
                <input
                  type='button'
                  className='LIButton'
                  onClick={() => {
                    HandleStrengths("Leadership Qualities");
                  }}
                />
                Leadership Qualities
              </li>
              <li>
                <input
                  type='button'
                  className='LIButton'
                  onClick={() => {
                    HandleStrengths("Time Management");
                  }}
                />
                Time Management
              </li>
              <li>
                <input
                  type='button'
                  className='LIButton'
                  onClick={() => {
                    HandleStrengths("Communication Skills");
                  }}
                />
                Communication Skills
              </li>
              <li>
                <input
                  type='button'
                  className='LIButton'
                  onClick={() => {
                    HandleStrengths("Presentation Skills");
                  }}
                />
                Presentation Skills
              </li>
              <li>
                <input
                  type='button'
                  className='LIButton'
                  onClick={() => {
                    HandleStrengths("Active Listening");
                  }}
                />
                Active Listening
              </li>
            </ul>
          </div>
          <p> Weakness</p>

          <textarea disabled className='settings-input AboutYouData' name='lastname' id='WeaknessShower' value={weakArray} />
          <button
            className='SelectMeButton'
            onClick={() => {
              setWeakDiv(!weakDiv);
            }}>
            Select Weaknessess
          </button>
          <div style={{ display: weakDiv ? " " : "none" }}>
            <ul className='itemsStats'>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleSWeakness("Graphics Designing");
                  }}
                />
                Graphics Designing
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleSWeakness("Communications");
                  }}
                />
                Communications
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleSWeakness("Less Innovation");
                  }}
                />
                Less Innovation
              </li>
              <li>
                <input
                  className='LIButton'
                  type='button'
                  onClick={() => {
                    HandleSWeakness("Logical Thinking");
                  }}
                />
                Logical Thinking
              </li>
            </ul>
          </div>
        </div>
        <button onClick={handleUserUpdate} className='SaveChangesButton' style={{ width: "100%" }}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

const PasswordChangeModal = ({ changePassword }) => {
  let [changePass, setChangePass] = useState({
    old: "",
    newpass: "",
    confirmNewpass: "",
  });

  document.querySelector(".settings-button").style.visibility = "hidden";
  document.querySelector(".settings-button").style.marginBottom = "-2vh";
  const handlePasswordChange = e => setChangePass(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));

  return (
    <div className='passwordchange' style={{ marginTop: "-5vh" }}>
      <p>Your Password</p>
      <input name='old' type='password' value={changePass.old} onChange={handlePasswordChange} className='settings-input' />
      <p>New Password</p>
      <input name='newpass' type='password' value={changePass.newpass} onChange={handlePasswordChange} className='settings-input' />
      <p>Confirm new Password</p>
      <input name='confirmNewpass' type='password' value={changePass.confirmNewpass} className='settings-input' onChange={handlePasswordChange} />
      <button
        className='SaveChangesButton' //ek problem aahe thamb login cha :)
        onClick={() => changePassword(changePass)}>
        Save New Password
      </button>
    </div>
  );
};

export default Settings;
