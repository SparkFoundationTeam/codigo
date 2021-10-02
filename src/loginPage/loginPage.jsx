import React, { useState, useContext, useEffect } from "react";

import "./mainComponent.css";
// import { useHistory } from 'react-router-dom';
import NavBar from "../navBar.jsx";
import BackendUrl from "../BackendUrl.js";
import axios from "axios";

import bg from "../resources/login7.gif";
import user from "../resources/user.gif";
import password from "../resources/password.gif";
import secured from "../resources/secured.gif";
import email from "../resources/email.gif";
import location from "../resources/location.gif";
import type from "../resources/type.gif";
import mobile from "../resources/mobileIcon.gif";
import book from "../resources/book.gif";
import signupIcon from "../resources/true.gif";

import Encrypter from "../encrypter";

import { db } from "../fireBase";

import { defaultUser } from "../DefaultUser.js";
import { UserContext } from "../MainContext"; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const LoginPage = ({ setlG }) => {
  let { signedInUser, setsignedInUser } = useContext(UserContext);

  const [WrongPassword, setWrongPassword] = useState(false);

  const [login, setLogin] = useState(false);
  let [usernamesArray, setUsernameArray] = useState([]);
  let [emailsArray, setEmailsArray] = useState([]);

  let [resetModal, setResetModal] = useState(false);
  let [resetModalEmail, setResetModalEmail] = useState(true);
  let [resetModalOTP, setResetModalOTP] = useState(false);
  let [resetModalChange, setResetModalChange] = useState(false);

  let pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  let MobilePattern = new RegExp("[0-9]{10}");
  let [User, setUser] = useState(defaultUser);

  let [signupSuccess, setsignupSuccess] = useState(false);

  let [passResEmail, setPassResEmail] = useState("");
  let [passResOtp, setPassResOtp] = useState("");
  let [passResPassword, setPassResPassword] = useState("");
  let [passResConfirmPassword, setPassResConfirmPassword] = useState(""); //je main ahe
  let [genratedOtp, setGenratedOtp] = useState(-1);

  const getOTP = () => Math.floor(Math.random() * 1000000);

  const sendOtp = async () => {
    const OTP = getOTP();
    setGenratedOtp(prev => OTP);
    // console.log(OTP);
    let obj = { email: passResEmail, otp: OTP };

    let d = await axios.post(BackendUrl + "User/passwords", obj);
    //baray
  };

  const verifyOTP = async => {
    // e.preventDefault();
    if (genratedOtp != passResOtp) {
      alert("Otp doesnt Match!!!");
      return false;
    }
    return true;
  };

  const resetPass = async () => {
    if (passResConfirmPassword !== passResPassword) {
      alert("Paswords doesnt match!");
      // reset password cha modal
      return;
    }

    let data = await axios.patch("https://codigo-server.herokuapp.com/user", {
      email: passResEmail,
      updates: { password: passResPassword },
    });
    if (true) alert("Successfully Reset Password");

    if (true) window.location.reload();
  };

  const handleChange = e => {
    setWrongPassword(false);
    setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  //mobile
  const hasFilledAllFields = () => {
    if (!User.fullName) {
      alert("Please Fill Name");
      return false;
    } else if (!User.collegeName) {
      alert("Please Select University");
      return false;
    } else if (!User.username || User.username.length > 12) {
      alert("Please Enter Username with less than 12 characters:)");
      return false;
    } else if (!User.mobileNumber || MobilePattern.test(User.mobileNumber) === false) {
      alert("Please Enter Valid Mobile No.");
      return false;
    } else if (!User.email || pattern.test(User.email) === false) {
      alert("Please enter valid email-address");
      return false;
    } else if (!(User.password === User.confirmPassword)) {
      alert("Password Doesnt Match ");
      return false;
    } else if (!User.state || User.state === "Default") {
      alert("Please Select Your State");
      return false;
    } else if (!User.participantType || User.participantType === "Default") {
      alert("Please Select Participant Type");
      return false;
    }
    return true;
  };

  const handleLogin = async e => {
    e.preventDefault();

    // let newPass = Encrypter(User.password.toString());

    let loggedInUser = await axios.get(BackendUrl + `user?username=${User.username}&password=${User.password}`);

    // await axios.get(BackendUrl + `user?email=${User.username}&password=${User.password}`); ha

    // console.log("User we got through mongo Db is : ", loggedInUser);

    const loggedInUserMessage = loggedInUser.data.message;

    if (loggedInUserMessage === "No User Found") {
      let loggedwithEmail = await axios.get(BackendUrl + `user?email=${User.username}&password=${User.password}`);
      const loggedInUserMessagefromEmail = loggedwithEmail.data.message;

      if (loggedInUserMessagefromEmail === "No User Found") {
        setWrongPassword(true);
        return;
      }
      loggedInUser = loggedwithEmail
    }

    setWrongPassword(false);
    loggedInUser = loggedInUser.data.user[0];
    localStorage.setItem("LoggedIn", true);
    setUser(defaultUser);
    setsignedInUser(loggedInUser);
    setUserFromLocalStorage(loggedInUser);

    localStorage.setItem("Interests", []);
    localStorage.setItem("Strengths", []);
    localStorage.setItem("Weaknesses", []);
  };

  const setUserFromLocalStorage = user => localStorage.setItem("User", JSON.stringify(user));
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("User"));

  const isAlreadyPresent = (target, targetArray) => {
    for (let values of targetArray) {
      if (target == values) return true;
    }
    return false;
  };
  const handleSignUp = async e => {
    e.preventDefault();

    if (isAlreadyPresent(User.email, emailsArray)) {
      alert("Email is already registered");
      return;
    }

    if (isAlreadyPresent(User.username, usernamesArray)) {
      alert("Username is already present");
      return; // :) chal :)
    }

    if (!hasFilledAllFields()) {
      return; // ek min thamb atta
    }

    // console.log("New User has Sign-Up with following Details : ", User);
    let newPas = Encrypter(User.password.toString());
    // alert("newPass is", newPas);

    if (true) setUser(prev => ({ ...prev, password: newPas }));
    // alert("user is ", JSON.stringify(User));
    let data = await axios.post(BackendUrl + "User", User);
    setsignupSuccess(true);
    setTimeout(() => {
      setsignupSuccess(false);

      window.location.reload();
    }, 2000);
  };

  const setter = () => {
    setLogin(prev => !prev);
  };

  const getUsernamesAndemails = async () => {
    // console.log("Getting usernames and emails");
    let data = await axios.get(BackendUrl + "user/usernames");
    data = data.data;

    let [usernames, emails] = data;

    setUsernameArray(usernames);
    setEmailsArray(emails);

    // console.log("Usernames aree : ", usernames);
    // console.log("emails aree : ", emails);
  };

  const checkBackendProblem = async e => {
    e.preventDefault();
    let obj = {};
    let d = await axios.patch(BackendUrl + "Courses/attempts", obj);
    // console.log("succesful attempt ", d);
  };

  useEffect(() => {
    getUsernamesAndemails();
    setsignedInUser(getUserFromLocalStorage());
  }, []);
  // history
  return (
    <div id='container'>
      <NavBar id='nav' />
      <div id='bgdiv'>
        <img id='bg' src={bg}></img>
      </div>

      <div className='resetModal' style={{ display: resetModal ? "" : "none" }}>
        <h1 style={{ cursor: "pointer" }} onClick={() => setResetModal(false)}>
          X
        </h1>
        <div className='form' style={{ display: resetModalEmail ? "" : "none" }}>
          <div className='resetLogo'>
            <img src={secured} />
            <h1>
              <b>
                códiGo<em>Hash</em>
              </b>
            </h1>
          </div>
          <input name='email' type='email' value={passResEmail} onChange={e => setPassResEmail(e.target.value)} placeholder='Your Email'></input>
          <button
            // he na mobile madhe ekdam chota aahe whatsapp
            onClick={() => {
              alert("OTP Sent to email");
              setResetModalEmail(false);
              setResetModalOTP(true);
              sendOtp(passResEmail);
            }}>
            Send OTP
          </button>
        </div>
        <div className='form' style={{ display: resetModalOTP ? "" : "none" }}>
          <div className='resetLogo'>
            <img src={secured} />
            <h1>
              <b>
                códiGo<em>Hash</em>
              </b>
            </h1>
          </div>
          <input id='OTPStyle' name='OTP' value={passResOtp} onChange={e => setPassResOtp(e.target.value)} type='password' placeholder='Enter Recieved OTP' autoFocus='true'></input>

          <button
            onClick={() => {
              setResetModalOTP(!verifyOTP());
              setResetModalChange(verifyOTP());
            }}>
            Verify
          </button>
        </div>

        <div className='form' style={{ display: resetModalChange ? "" : "none" }}>
          <div className='resetLogo'>
            <img src={secured} />
            <h1>
              <b>
                códiGo<em>Hash</em>
              </b>
            </h1>
          </div>
          <input name='newPassword' type='password' value={passResPassword} onChange={e => setPassResPassword(e.target.value)} placeholder='Enter New Password' autoFocus='true'></input>
          <input name='newPassword' type='password' value={passResConfirmPassword} onChange={e => setPassResConfirmPassword(e.target.value)} placeholder='Confirm New Password' autoFocus='true'></input>

          <button
            onClick={() => {
              resetPass();
              //   setResetModal(false);
              //   window.location.reload();
            }}>
            Submit
          </button>
        </div>
      </div>
      <form className={login ? "active" : "hidden"}>
        <h1>Welcome Back</h1>
        <hr />
        <div className='formElem'>
          <img src={user}></img>
          <input name='username' value={User.username} type='text' onChange={handleChange} placeholder='Enter Username' autoFocus></input>
        </div>
        <div className='formElem'>
          <img src={password}></img>
          <input name='password' value={User.password} type='password' onChange={handleChange} placeholder='Enter Password'></input>
        </div>

        <button
          onClick={async e => {
            await handleLogin(e);
          }}
          id='submit'>
          {}
          Login
        </button>
        {/* <button onClick={checkBackendProblem}>Check Backend</button> */}

        <h4 onClick={() => setResetModal(true)} style={{ cursor: "pointer" }}>
          Forgot Details? Get Help logging in
        </h4>
        <h3 style={WrongPassword ? { color: "red", visibility: "visible" } : { visibility: "hidden" }}> Username and Password do not match</h3>
      </form>

      <form id='signUp' className={login ? "hidden" : "active"}>
        <h1>Signup to códiGo</h1>
        <div className='formElem'>
          <img src={email}></img>
          <input name='email' value={User.email} onChange={handleChange} type='email' placeholder='Enter your email-address' autoFocus></input>
        </div>
        <div className='formElem'>
          <img src={user}></img>
          <input name='fullName' value={User.fullName} onChange={handleChange} type='text' placeholder='Enter your Full Name' ></input>
        </div>
        <div className='formElem'>
          <input name='username' value={User.username} onChange={handleChange} type='text' placeholder='Choose a Username' ></input>
        </div>
        <div className='formElem'>
          <img src={password}></img>
          <input name='password' value={User.password} onChange={handleChange} type='password' placeholder='Choose Password'></input>
        </div>
        <div className='formElem'>
          <input name='confirmPassword' value={User.confirmPassword} onChange={handleChange} type='password' placeholder='Confirm Password'></input>
        </div>
        <div className='formElem'>
          <img src={mobile}></img>
          <input name='mobileNumber' value={User.mobileNumber} onChange={handleChange} type='tel' placeholder='Enter Mobile Number'></input>
        </div>

        <div className='formElem'>
          <img src={book}></img>
          <input name='collegeName' value={User.collegeName} type='text' onChange={handleChange} placeholder='University Name'></input>
        </div>

        <div className='formElem'>
          <img src={location}></img>
          <input list='state' placeholder='Your State' name='state' value={User.state} onChange={handleChange} />
          <datalist id='state'>
            <option value='I am a foreign student'>Out of India</option>
            <option value='Andhra Pradesh'>Andhra Pradesh</option>
            <option value='Andaman and Nicobar Islands'>Andaman and Nicobar Islands</option>
            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
            <option value='Assam'>Assam</option>
            <option value='Bihar'>Bihar</option>
            <option value='Chandigarh'>Chandigarh</option>
            <option value='Chhattisgarh'>Chhattisgarh</option>
            <option value='Dadar and Nagar Haveli'>Dadar and Nagar Haveli</option>
            <option value='Daman and Diu'>Daman and Diu</option>
            <option value='Delhi'>Delhi</option>
            <option value='Lakshadweep'>Lakshadweep</option>
            <option value='Puducherry'>Puducherry</option>
            <option value='Goa'>Goa</option>
            <option value='Gujarat'>Gujarat</option>
            <option value='Haryana'>Haryana</option>
            <option value='Himachal Pradesh'>Himachal Pradesh</option>
            <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
            <option value='Jharkhand'>Jharkhand</option>
            <option value='Karnataka'>Karnataka</option>
            <option value='Kerala'>Kerala</option>
            <option value='Madhya Pradesh'>Madhya Pradesh</option>
            <option value='Maharashtra'>Maharashtra</option>
            <option value='Manipur'>Manipur</option>
            <option value='Meghalaya'>Meghalaya</option>
            <option value='Mizoram'>Mizoram</option>
            <option value='Nagaland'>Nagaland</option>
            <option value='Odisha'>Odisha</option>
            <option value='Punjab'>Punjab</option>
            <option value='Rajasthan'>Rajasthan</option>
            <option value='Sikkim'>Sikkim</option>
            <option value='Tamil Nadu'>Tamil Nadu</option>
            <option value='Telangana'>Telangana</option>
            <option value='Tripura'>Tripura</option>
            <option value='Uttar Pradesh'>Uttar Pradesh</option>
            <option value='Uttarakhand'>Uttarakhand</option>
            <option value='West Bengal'>West Bengal</option>
          </datalist>
        </div>

        <div className='formElem'>
          <img src={type}></img>

          <input list='participantType' placeholder='Year of Study' name='participantType' value={User.participantType} onChange={handleChange} />
          <datalist id='participantType'>
            <option value='Professional'>Professional / Faculty</option>
            <option value='Under Graduate '>Under Graduate Student</option>
            <option value='Post Graduate '>Post Graduate Student</option>
            <option value='11-12th'>11-12th Grade</option>
            <option value='Below 10th'>Below 10th Grade</option>
          </datalist>
        </div>
        <input onClick={handleSignUp} type='submit' value='SIGN UP' id='submit'></input>
      </form>

      <div className='successNotifier' style={{ visibility: signupSuccess ? "visible" : "hidden" }}>
        <img src={signupIcon} />
        <h2>Signup Successful</h2>
      </div>
      <div id='sign' style={{ display: login ? "" : "none" }}>
        <h3>
          {" "}
          Don't have an Account ? <button onClick={setter}> Sign Up for free </button>
        </h3>
      </div>
      <div id='sign' style={{ display: login ? "none" : " " }}>
        <h3>
          {" "}
          Already have an Account ? <button onClick={setter}> Log In</button>
        </h3>
      </div>
      <hr id='sec'></hr>
      <div id='secure'>
        <div>
          <img src={secured}></img>
        </div>
        <div>
          <h3>
            Your Information is safe with us
            <br /> Secured by{" "}
            <b>
              códiGo<em>Hash</em>
            </b>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
