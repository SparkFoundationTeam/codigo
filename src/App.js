import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './landingPage/landingPage';
// import LoginPage from './loginPage/loginPage';
import DashBoard from './Dashboard/Dashboard';
import AllCourses from './AllCourses/AllCourses';
import PageNotFound from './PageNotFound';
// import LoginPage from './loginPage/loginakaDashboar';
import LoginPage from './loginPage/loginPage';
import { UserContext } from './MainContext';
import { defaultUser } from './DefaultUser';

// All Course and Enroll Pages
import Html01Enroll from './CoursePages/HtmlAtharva/html01-course-enroll';
import Html01 from './CoursePages/HtmlAtharva/webdev-html01';

import Java01Enroll from './CoursePages/JavaAdika/java01-course-enroll';
import Java01 from './CoursePages/JavaAdika/javadev-java01';

import JS01Enroll from './CoursePages/JSBhavesh/js01-course-enroll';
import JS01 from './CoursePages/JSBhavesh/javascript01';

import Python01Enroll from './CoursePages/PythonVaishnavi/python01-course-enroll';
import Python01 from './CoursePages/PythonVaishnavi/pydev-python01';
import ScrollToTop from './ScrollToTop';

const App = () => {
  let [signedInUser, setsignedInUser] = useState(defaultUser);
  return (
    <>
      
      <Router>
      <ScrollToTop />
        <UserContext.Provider value={{ signedInUser, setsignedInUser }}>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/dashboard'>
              <DashBoard />
            </Route>
            <Route exact path='/all-courses'>
              <AllCourses />
            </Route>
            <Route exact path='/all-courses'>
              <AllCourses />
            </Route>

            <Route exact path='/html01-course-enroll'>
              <Html01Enroll />
            </Route>
            <Route exact path='/webdev-html01'>
              <Html01 />
            </Route>

            <Route exact path='/java01-course-enroll'>
              <Java01Enroll />
            </Route>
            <Route exact path='/javadev-java01'>
              <Java01 />
            </Route>

            <Route exact path='/js01-course-enroll'>
              <JS01Enroll />
            </Route>
            <Route exact path='/javascript01'>
              <JS01 />
            </Route>

            <Route exact path='/python01-course-enroll'>
              <Python01Enroll />
            </Route>
            <Route exact path='/pydev-python01'>
              <Python01 />
            </Route>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;
