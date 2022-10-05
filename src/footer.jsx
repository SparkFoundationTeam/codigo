import React from "react";
import "./footer.css";
import gmail from "./resources/mail-icon.png";
import youtube from "./resources/yt-icon.png";
import insta from "./resources/insta-icon.png";
import logo from "./resources/codiGo.png";
import sponsor from "./resources/thumbsUP2.png";

const Footer = () => {
  return (
    <div id='footer'>
      <img src={logo} id='logoFooter'></img>
      <ul id='contactsUl'>
        <h2 id='contactH'>CONTACT US</h2>
        <li>
          {" "}
          <a href='mailto:codigoteams@gmail.com' target='_blank'>
            <div className='elem'>
              <img src={gmail} id='imgShort'></img>codigoteams@gmail.com
            </div>{" "}
          </a>{" "}
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCSY8hNgzSaxrHCjxXYk4kJA' target='_blank'>
            <div className='elem'>
              <img src={youtube} id='imgShort'></img> Join us on YouTube
            </div>{" "}
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/projectcodigo/' target='_blank'>
            <div className='elem'>
              <img src={insta} id='imgShort'></img> Follow us on Instagram
            </div>{" "}
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCSY8hNgzSaxrHCjxXYk4kJA' target='_blank'>
            <div className='elem'>
              <img src={sponsor} id='imgShort'></img>Support our cause / Sponsorship
            </div>{" "}
          </a>
        </li>
      </ul>
      <p id='rightsReserved'>
        {" "}
        <b>All Rights Reserved | &copy; Project códiGo </b>
      </p>
    </div>
  );
};

export default Footer;
