import React from 'react';
import errorImg from './resources/404.gif'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src={errorImg} style={{ height: '80vh', width: '50vw' }}></img>
            <h2>Page Missing or Under Development</h2><h2> <Link to='/' style={{color:'cyan'}}> Take me Back</Link></h2>
        </div>
    );
}

export default PageNotFound;