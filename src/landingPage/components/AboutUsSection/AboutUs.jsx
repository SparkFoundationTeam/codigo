import React, { useState } from 'react';

import './AboutUs.css';

import randomizer from '../../../randomizer';

import Blob2 from '../../../resources/blob (2).svg';
import Blob1 from '../../../resources/blob (4).svg';
import Instagram from '../../../resources/insta.png';
import Mail from '../../../resources/insta.png';
import LinkedIn from '../../../resources/insta.png';
import Github from '../../../resources/git.png';

import { Owners } from './AboutUsData';

const AboutUs = () => {
  let [ownersArray, setOwnersArray] = useState(randomizer(Owners));
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
              <div className='OwnerInfo'>
                <img className='OwnerImage' src={OwnerObject.OwnerImage} />
                <div className='OwnerName'>{OwnerObject.OwnerName}</div>
                <div className='Ownerole'>Co-Founder</div>
              </div>

              <ul className='OwnerDetails'>
                {OwnerObject.OwnerSkills.map(eachskills => (
                  <li>{eachskills}</li>
                ))}
              </ul>
              <div className='OwnerSocialMediaContainer'>
                <a href={OwnerObject.githubUrl}>
                  <img className='OwnerSocialMedia' src={Github}></img>
                </a>
                <a href={OwnerObject.instaUrl}>
                  <img className='OwnerSocialMedia' src={Instagram}></img>
                </a>
                <a href={OwnerObject.linkedUrl}>
                  <img className='OwnerSocialMedia' src={LinkedIn}></img>
                </a>
                <a href={OwnerObject.mailUrl}>
                  <img className='OwnerSocialMedia' src={Mail}></img>
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
