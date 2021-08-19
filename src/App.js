import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from './landingPage/landingPage';
import LoginPage from './loginPage/loginPage';
import DashBoard from './Dashboard/Dashboard';
import AllCourses from './AllCourses/AllCourses';
import PageNotFound from './PageNotFound';

function App() {
    return (
        <Router>
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




                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
