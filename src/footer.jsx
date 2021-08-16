import React from 'react';
import './footer.css'
import gmail from './resources/gmail.png'
import youtube from './resources/youtube.png'
import insta from './resources/insta.png'
import logo from './resources/codiGo.png'
import sponsor from './resources/ownership.png'

const Footer = () => {
    return (
        <div id='footer'>
            
                <img src={logo} id='logoFooter' ></img>
                <ul id='contactsUl'>
                    <h2 id='contactH'>CONTACT US</h2>
                    <li> <a href='mailto:codigoteams@gmail.com' target='_blank'><div className='elem'><img src={gmail} id='imgShort'></img>codigoteams@gmail.com</div>  </a> </li>
                    <li><a href='https://www.youtube.com/channel/UCSY8hNgzSaxrHCjxXYk4kJA' target='_blank'><div className='elem'><img src={youtube} id='imgShort'></img> &nbsp;&nbsp;Join us on YouTube</div>  </a></li>
                    <li><a href='https://www.instagram.com/projectcodigo/' target='_blank'><div className='elem'><img src={insta} ></img> &nbsp;&nbsp;Follow us on Instagram</div>  </a></li>
                    <li><a href='https://www.youtube.com/channel/UCSY8hNgzSaxrHCjxXYk4kJA' target='_blank'><div className='elem'><img src={sponsor} id='imgShort2'></img>&nbsp;&nbsp;&nbsp;Support our cause / Sponsorship</div>  </a></li>


                </ul>
            <p id='rightsReserved'> All Rights Reserved | &copy; Project códiGo</p>
        </div>
    );
}

export default Footer;