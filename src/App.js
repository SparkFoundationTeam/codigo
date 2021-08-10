import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from './landingPage/landingPage';
import LoginPage from './loginPage/loginPage';


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
            </Switch>
        </Router>
    );
}

export default App;
