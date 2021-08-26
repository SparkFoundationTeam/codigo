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
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  const [login, setLogin] = useState(true);
  let [usernamesArray, setusernameArray] = [];
  let [emailsArray, setEmailsArray] = [];

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
    //database madhe zhalay uodate pn error ka detay fuck password kai hota?

    let loggedInUser = await axios.get(BackendUrl + `user?username=${User.username}&password=${User.password}`);

    console.log('User we got through mongo Db is : ', loggedInUser);

    const loggedInUserMessage = loggedInUser.data.message;

    if (loggedInUserMessage === 'No User Found') {
      alert('Username and password doesnt match');
      return;
    } //nai hoanr vatta
    loggedInUser = loggedInUser.data.user[0];

    setUser(defaultUser);
    setsignedInUser(loggedInUser); // thamb testing naitar are asa kahi redirect asel na on authorized redirect dashboard bghayala hava
    setUserFromLocalStorage(loggedInUser);
  };
  const setUserFromLocalStorage = user => localStorage.setItem('User', JSON.stringify(user));
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('User'));

  const handleSignUp = e => {
    e.preventDefault();

    if (!hasFilledAllFields()) {
      return;
    }

    console.log('New User has Sign-Up with following Details : ', User);

    axios.post(BackendUrl + 'User', User);
  };

  const setter = () => {
    setLogin(prev => !prev);
  };

  const getUsernamesAndemails = async () => { //nkooooo brobr ahe
    let data = await axios.get(BackendUrl + 'user/usernames');
    data = data.data; // <- wierd parts of Js

    let [usernames, emails] = data;

    console.log('Usernames aree : ', usernames);
    console.log('emails aree : ', emails);
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
          {/* <Link to={setroutingLink}>LOGIN</Link> */}
          Login
        </button>

        <h4>Forgot Details? Get Help logging in</h4>
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
          <select name='state' value={User.state} onChange={handleChange}>
            <option value='Default'>Select State</option>
            <option value='Foreigner'>Out of India</option>
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
          </select>
        </div>

        <div className='formElem'>
          <img src={type}></img>
          <select name='participantType' value={User.participantType} onChange={handleChange}>
            <option value='Default'>Year of Study</option>

            <option value='Professional'>Professional / Faculty</option>
            <option value='Under Graduate Student'>Under Graduate Student</option>
            <option value='Post Graduate Student'>Post Graduate Student</option>
            <option value='11-12th'>11-12th Grade</option>
            <option value='Below 10th'>Below 10th Grade</option>
          </select>
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
