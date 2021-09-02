import React, { useState, useContext, useEffect } from 'react';

import './mainComponent.css';
// import { useHistory } from 'react-router-dom';
import NavBar from '../navBar.jsx';
import BackendUrl from '../BackendUrl.js';
import axios from 'axios';

import bg from '../resources/login7.gif';
import user from '../resources/user.gif';
import password from '../resources/password.gif';
import secured from '../resources/secured.gif';
import email from '../resources/email.gif';
import location from '../resources/location.gif';
import type from '../resources/type.gif';
import mobile from '../resources/mobileIcon.gif';
import book from '../resources/book.gif';

// import { Route, BrowserRouter, Switch, Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { defaultUser } from '../DefaultUser.js';
import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const LoginPage = ({ setlG }) => {
  let { signedInUser, setsignedInUser } = useContext(UserContext);

  const [WrongPassword, setWrongPassword] = useState(false);

  const [login, setLogin] = useState(true);
  let [usernamesArray, setUsernameArray] = useState([]);
  let [emailsArray, setEmailsArray] = useState([]);

  let pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  let MobilePattern = new RegExp('[0-9]{10}');
  let [User, setUser] = useState(defaultUser);

  const handleChange = e => {
    setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  //mobile
  const hasFilledAllFields = () => {
    if (!User.fullName) {
      alert('Please Fill Name');
      return false;
    } else if (!User.collegeName) {
      alert('Please Select University');
      return false;
    } else if (!User.username || User.username.length > 12) {
      alert('Please Enter Username with less than 12 characters:)');
      return false;
    } else if (!User.mobileNumber || MobilePattern.test(User.mobileNumber) === false) {
      alert('Please Enter Valid Mobile No.');
      return false;
    } else if (!User.email || pattern.test(User.email) === false) {
      alert('Please enter valid email-address');
      return false;
    } else if (!(User.password === User.confirmPassword)) {
      alert('Password Doesnt Match ');
      return false;
    } else if (!User.state || User.state === 'Default') {
      alert('Please Select Your State');
      return false;
    } else if (!User.participantType || User.participantType === 'Default') {
      alert('Please Select Participant Type');
      return false;
    }
    return true;
  };

  const handleLogin = async e => {
    e.preventDefault();

    let loggedInUser = await axios.get(BackendUrl + `user?username=${User.username}&password=${User.password}`);
    // await axios.get(BackendUrl + `user?email=${User.username}&password=${User.password}`);

    console.log('User we got through mongo Db is : ', loggedInUser);

    const loggedInUserMessage = loggedInUser.data.message;

    if (loggedInUserMessage === 'No User Found') {
      setWrongPassword(true);
      return;
    }
    setWrongPassword(false);
    loggedInUser = loggedInUser.data.user[0];
    localStorage.setItem('LoggedIn', true);
    setUser(defaultUser);
    setsignedInUser(loggedInUser);
    setUserFromLocalStorage(loggedInUser);
  };
  const setUserFromLocalStorage = user => localStorage.setItem('User', JSON.stringify(user));
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('User'));

  const handleSignUp = e => {
    e.preventDefault();

    if (isAlreadyPresent(User.username, usernamesArray) || isAlreadyPresent(User.email, emailsArray)) {
      alert('username or email is already present');
      return; // :) chal :)
    }

    if (!hasFilledAllFields()) {
      return; // ek min thamb atta
    }

    console.log('New User has Sign-Up with following Details : ', User);

    axios.post(BackendUrl + 'User', User);
  };

  const setter = () => {
    setLogin(prev => !prev);
  };

  const isAlreadyPresent = (target, targetArray) => {
    for (let values of targetArray) {
      if (target === values) return true;
    }
    return false;
  };

  const getUsernamesAndemails = async () => {
    console.log('Getting usernames and emails');
    let data = await axios.get(BackendUrl + 'user/usernames');
    data = data.data;

    let [usernames, emails] = data;

    setUsernameArray(usernames);
    setEmailsArray(email);

    console.log('Usernames aree : ', usernames);
    console.log('emails aree : ', emails);
  };

  const checkBackendProblem = async e => {
    e.preventDefault();
    let obj = {};
    let d = await axios.patch(BackendUrl + 'Courses/attempts', obj);
    console.log('succesful attempt ', d);
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
      <form className={login ? 'active' : 'hidden'}>
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
          id='submit'
        >
          {}
          Login
        </button>
        {/* <button onClick={checkBackendProblem}>Check Backend</button> */}

        <h4>Forgot Details? Get Help logging in</h4>
        <h3 style={WrongPassword ? { color: 'red', visibility: 'visible' } : { visibility: 'hidden' }}> Username and Password do not match</h3>
      </form>

      <form id='signUp' className={login ? 'hidden' : 'active'}>
        <h1>Signup to códiGo</h1>
        <div className='formElem'>
          <img src={email}></img>
          <input name='email' value={User.email} onChange={handleChange} type='email' placeholder='Enter your email-address' autoFocus></input>
        </div>
        <div className='formElem'>
          <img src={user}></img>
          <input name='fullName' value={User.fullName} onChange={handleChange} type='text' placeholder='Enter your FullName' autoFocus></input>
        </div>
        <div className='formElem'>
          <input name='username' value={User.username} onChange={handleChange} type='text' placeholder='Choose a username' autoFocus></input>
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
      <div className={login ? 'active' : 'hidden'}>
        <h3 id='sign'>
          {' '}
          Don't have an Account ? <button onClick={setter}> Sign Up for free </button>
        </h3>
      </div>
      <div className={login ? 'hidden' : 'active'}>
        <h3 id='sign'>
          {' '}
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
            <br /> Secured by{' '}
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
