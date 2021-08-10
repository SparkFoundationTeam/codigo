import React, { useState, useEffect } from 'react';
import NavBar from '../navBar.jsx'
import './mainComponent.css'
import bg from '../resources/login7.gif'
import user from '../resources/user.gif'
import password from '../resources/password.gif'
import secured from '../resources/secured.gif'
import email from '../resources/email.gif'
import location from '../resources/location.gif'
import type from '../resources/type.gif'

import { Route, BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';



const LoginPage = () => {

    const [login, setLogin] = useState(true);

    const setter = () => {
        console.log('yay');
        setLogin((prev) => !prev);
    }







    return (<div id='container'>
        <NavBar id = 'nav'/>
        <div id='bgdiv'>
            <img id='bg' src={bg} ></img>
        </div>


        <form className={login ? 'active' : 'hidden'}>
            <h1>Login to códiGo</h1>
            <hr />
            <div className='formElem'>
                <img src={user}  ></img>
                <input type='text' placeholder='Enter Username' autoFocus></input>
            </div>
            <div className='formElem'>
                <img src={password}></img>
                <input type='password' placeholder='Enter Password'></input>
            </div>

            <input type='submit' value='LOGIN' id='submit'></input>
            <h4>Forgot Details? Get Help logging in</h4>


        </form>

        <form id='signUp' className={login ? 'hidden' : 'active'}>
            <h1>Signup to códiGo</h1>
            <hr />
            <div className='formElem'>
                <img src={email}  ></img>
                <input type='email' placeholder='Enter your email-address' autoFocus></input>
            </div>
            <div className='formElem'>
                <img src={user}  ></img>
                <input type='text' placeholder='Enter your Name' autoFocus></input>
            </div>
            <div className='formElem'>
                <input type='text' placeholder='Choose a username' autoFocus></input>
            </div>
            <div className='formElem'>
                <img src={password}></img>
                <input type='password' placeholder='Choose Password'></input>
            </div>
            <div className='formElem'>
                <input type='password' placeholder='Confirm Password'></input>
            </div>

            <div className='formElem'>
                <img src={location}></img>
                <select name="state" >
                    <option selected disabled>Select State</option>

                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>

            <div className='formElem'>
                <img src={type}></img>
                <select name="experience" >
                    <option selected disabled>Participant Type</option>

                    <option value="Professional">Professional / Faculty</option>
                    <option value="Engineering Student">Engineering Student</option>
                    <option value="Self-taught Programmer">Self-taught Programmer</option>
                    <option value="College Student">Junior College Student</option>

                </select>
            </div>
            <input type='submit' value='SIGN UP' id='submit'></input>
        </form>








        <div className={login ? 'active' : 'hidden'}>
            <h3 id='sign'> Don't have an Account ? <button onClick={setter}> Sign Up for free </button></h3>
        </div>
        <div className={login ? 'hidden' : 'active'}>
            <h3 id='sign'> Already have an Account ? <button onClick={setter}> Log In</button></h3>
        </div>
        <hr id='sec'></hr>

        <div id='secure'>


            <div>
                <img src={secured}></img></div>
            <div>
                <h3>Your Information is safe with us<br /> Secured by <b>códiGo<em>Hash</em></b></h3>
            </div>


        </div>





    </div>

    );
};

export default LoginPage;
