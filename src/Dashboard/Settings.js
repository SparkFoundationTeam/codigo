import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';

import './settings.css';

import { UserContext } from '../MainContext'; // <- hi line prytek component madhe lagnr jithe user aahe tithe

const Settings = () => {
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  let [showPasswordModal, setShowPasswordModal] = useState(false);
  //   const fetchUser = async () => {
  //     let data = await axios.get('https://codigo-server.herokuapp.com/user?username=Bhavesh_123'); // first
  //     console.log('The real data with email is : ', data.data.user[0]);

  //     let userFromDatabase = data.data.user[0];

  //     setUserFromLocalStorage({ ...signedInUser, ...userFromDatabase }); // he ajun kraychay sort out <_ db mai hm
  //     console.log(typeof userFromDatabase);
  //     console.log('from local : ', setsignedInUser(getUserFromLocalStorage()));
  //     console.log('User is : ', signedInUser);
  //   };

  const handleUserSettings = e => {
    //
    setsignedInUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleUserUpdate = async e => {
    e.preventDefault();
    setUserFromLocalStorage(signedInUser);

    // await setsignedInUser(prevUser => ({ ...prevUser, password: newpass }));
    let data = await axios.patch('https://codigo-server.herokuapp.com/user', {
      email: signedInUser.email,
      updates: { ...signedInUser }, //houdet re deva
    });

    console.log('after Changes user is : ', data.data);
  };

  const setUserFromLocalStorage = user => localStorage.setItem('User', JSON.stringify(user));
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('User'));

  const setNewPassword = async ({ old, newpass, confirmNewpass }) => {
    // alert(signedInUser.password, ' ', old, ' ', newpass, ' ', confirmNewpass);
    if (old !== signedInUser.password) {
      alert('Wrong password!');
      return;
    }
    if (newpass !== confirmNewpass) {
      alert('Password doesnt match!');
      return;
    } else {
      await setsignedInUser(prevUser => ({ ...prevUser, password: newpass }));
      let data = await axios.patch('https://codigo-server.herokuapp.com/user', {
        email: signedInUser.email,
        updates: { password: newpass },
      });

      setShowPasswordModal(false);
      setUserFromLocalStorage({ ...signedInUser, password: newpass });
      alert('Password Updated');
      document.querySelector('.settings-button').style.visibility = 'visible';
    }
  };
  useEffect(() => {
    setsignedInUser(getUserFromLocalStorage());
  }, []);
  return (
    <div className='SettingsContainer'>
      <div className='settings-column'>
        <div className='account-settings'>
          <h1>Account Settings</h1>
          <h3>Personal Information</h3>
          {/* <h6>{JSON.stringify(signedInUser)}</h6> */}
          <div className='BoxInput'>
            <p>Full Name</p>
            <input style={{ cursor: 'not-allowed' }} disabled value={signedInUser.fullName} className='settings-input' name='firstname' />
          </div>{' '}
          <div className='BoxInput'>
            <p> Email address</p>
            <input style={{ cursor: 'not-allowed' }} disabled value={signedInUser.email} className='settings-input' name='email' />
          </div>
          <div className='BoxInput'>
            <p>Username</p>
            <input value={signedInUser.username} onChange={handleUserSettings} className='settings-input' name='username' />
          </div>{' '}
          <div className='BoxInput'>
            <p>Mobile No</p>
            <input value={signedInUser.mobileNumber} onChange={handleUserSettings} className='settings-input' name='mobilenumber' />
          </div>
          <hr className='horizontal-line'></hr>
        </div>

        <div className='account-settings'>
          <h1>Security Settings</h1>
          <button className='settings-button' onClick={() => setShowPasswordModal(true)}>
            Change Password
          </button>
          {showPasswordModal && <PasswordChangeModal changePassword={e => setNewPassword(e)} />}
        </div>
      </div>
      <div className='settings-column' style={{ marginLeft: '2vw', width: '1vw' }}>
        <hr className='vertical-line'></hr>
      </div>
      <div className='settings-column' style={{ marginLeft: '1vw' }}>
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
          <textarea className='settings-input AboutYouData' name='firstname' />
          <p> Strengths</p>
          <textarea className='settings-input AboutYouData' name='lastname' />
          <p> Weakness</p>
          <textarea className='settings-input AboutYouData' name='lastname' />
        </div>
        <button onClick={handleUserUpdate} className='SaveChangesButton' style={{ width: '100%' }}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

const PasswordChangeModal = ({ changePassword }) => {
  let [changePass, setChangePass] = useState({
    old: '',
    newpass: '',
    confirmNewpass: '',
  });

  document.querySelector('.settings-button').style.visibility = 'hidden';
  document.querySelector('.settings-button').style.marginBottom = '-2vh';
  const handlePasswordChange = e => setChangePass(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));

  return (
    <div className='passwordchange' style={{ marginTop: '-5vh' }}>
      <p>Your Password</p>
      <input name='old' type='password' value={changePass.old} onChange={handlePasswordChange} className='settings-input' />
      <p>New Password</p>
      <input name='newpass' type='password' value={changePass.newpass} onChange={handlePasswordChange} className='settings-input' />
      <p>Confirm new Password</p>
      <input name='confirmNewpass' type='password' value={changePass.confirmNewpass} className='settings-input' onChange={handlePasswordChange} />
      <button
        className='SaveChangesButton' //ek problem aahe thamb login cha :)
        onClick={() => changePassword(changePass)}
      >
        Save New Password
      </button>
    </div>
  );
};

export default Settings;
