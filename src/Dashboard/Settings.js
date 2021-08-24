import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './settings.css';

const Settings = () => {
  let [user, setUser] = useState({
    username: 'Default',
    password: 'Default',
    email: 'Default',
    firstName: 'Default1',
    lastName: 'Default1',
    mobileNumber: 9136298868,
    yearOfStudy: 2021,
    nameOfUniversity: 'DMCE',
  });

  const fetchUser = async () => {
    // return JSON.parse(localStorage.getItem('User'));
    let data = await axios.get('https://codigo-server.herokuapp.com/user?username=Bhavesh_123');
    console.log(data);
    return data.data.user[0];
  };

  useEffect(() => {
    setUser(fetchUser());
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div className='settings-column'>
        <div className='account-settings'>
          <h1>Account Settings</h1>
          <h3>Personal Information</h3>
          <p>First Name</p>
          <input value={user.firstName} className='settings-input' name='firstname' />
          <p> Last Name</p>
          <input value={user.lastName} className='settings-input' name='lastname' />
          <p> Email address</p>
          <input value={user.email} className='settings-input' name='email' />
          <p>Username</p>
          <input value={user.username} className='settings-input' name='username' />
          <p>Mobile No</p>
          <input value={user.mobileNumber} className='settings-input' name='mobilenumber' />
          <hr className='horizontal-line'></hr>
        </div>

        <div className='account-settings'>
          <h1>Security Settings</h1>
          <button className='settings-button'>Change Password</button>
        </div>
      </div>
      <div className='settings-column' style={{ marginLeft: '2vw', width: '1vw' }}>
        <hr className='vertical-line'></hr>
      </div>
      <div className='settings-column' style={{ marginLeft: '1vw' }}>
        <div className='account-settings'>
          <h1>Educational settings</h1>
          <p>Year Of Study</p>
          <input className='settings-input' name='firstname' />
          <p> Name of University</p>
          <input className='settings-input' name='lastname' />
          <hr className='horizontal-line'></hr>
        </div>
        <div className='account-settings'>
          <h1>About You</h1>
          <p>Interests</p>
          <input className='settings-input' name='firstname' />
          <p> Strigths</p>
          <input className='settings-input' name='lastname' />
          <p> Weakness</p>
          <input className='settings-input' name='lastname' />
        </div>
      </div>
    </div>
  );
};

export default Settings;
