import React, { useState } from 'react';

import './AboutUs.css';
import Blob2 from '../Images/blob (3).svg';
import Blob1 from '../Images/blob (4).svg';
import Whatsapp from '../Images/bhavesh.jpg';
import Github from '../Images/bhavesh.jpg';
import { Owners } from './AboutUsData';

const AboutUs = () => {
  let [ownersArray, setOwnersArray] = useState(Owners);
  return (
    <div className='OurCoursesSection'>
      <img className='OwnerBlob1' src={Blob1} />
      <img className='OwnerBlob2' src={Blob2} />
      <div className='SectionHeader'>About Us</div>
      <p className='AboutUs-Des'>dssfdfdddshd fhdfdk hfbds khf dfkjfbhkjfb hb kdb dkjfbd ksfsbfk dfhdfdkhfbds</p>
      <div className='OurTeam'>Our Team</div>
      <div className='CardsContainer'>
        {ownersArray.map(OwnerObject => {
          return (
            <div className='OwnersCards'>
              <img className='OwnerImage' src={OwnerObject.OwnerImage} />
              <div className='OwnerInfo'>
                <div className='OwnerName'>{OwnerObject.OwnerName}</div>
                <div className='Ownerole'>Co-Founder</div>
              </div>

              <ul>
                {OwnerObject.OwnerSkills.map(eachskills => (
                  <li>{eachskills}</li>
                ))}
              </ul>
              <div className='OwnerSocialMediaContainer'>
                <a href={OwnerObject.githubUrl}>
                  <img className='OwnerSocialMedia' src={Github}></img>
                </a>
                <a href={OwnerObject.whatsappUrl}>
                  <img className='OwnerSocialMedia' src={Whatsapp}></img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
