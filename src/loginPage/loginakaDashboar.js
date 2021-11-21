import React, { useState } from 'react';

import LoginPage from './loginPage';
import DashBoard from '../Dashboard/Dashboard';

const LoginNDashBoard = () => {
  let [showLoginComponent, setshowLoginComponent] = useState(true);
  let [showDashboard, setshowDashboard] = useState(false);

  const handlewierdness = target => {
    if (target) {
      setshowLoginComponent(false);
      setshowDashboard(true);
    }
  };

  return (
    <div>
      {showLoginComponent && <LoginPage setlG={e => handlewierdness(e)} />}
      {showDashboard && <DashBoard />}
    </div>
  );
};

export default LoginNDashBoard;
// kay k
