import React from 'react';
import errorImg from './resources/404.gif';
import { Link } from 'react-router-dom';
import './index.css';
import NavBar from './navBar';

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div id='Container404'>
        <img src={errorImg} id='errorImg'></img>
        <h2>Page Missing or Under Development</h2>
        <h2>
          {' '}
          <Link to='/' style={{ color: 'cyan' }}>
            {' '}
            Take me to Home Page
          </Link>
        </h2>
      </div>
    </>
  );
};

export default PageNotFound;
