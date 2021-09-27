import React, { useState } from 'react';

import './AboutUs.css';
import Blob2 from '../../../resources/blob (2).svg';
import Blob1 from '../../../resources/blob (4).svg';
import Instagram from '../../../resources/insta-icon.png';
import Mail from '../../../resources/mail-icon.png';
import LinkedIn from '../../../resources/linkedin-icon.png';
import Github from '../../../resources/github-icon.png';
import Resume from '../../../resources/resume2.png';
import Portfolio from '../../../resources/portfolio.png';
import { Owners } from './AboutUsData';
import randomizer from '../../../randomizer';

const AboutUs = () => {
  let [ownersArray, setOwnersArray] = useState(randomizer(Owners));
  return (
    <div className='OurCoursesSection'>
      <img className='OwnerBlob1' src={Blob1} />
      <img className='OwnerBlob2' src={Blob2} data-aos='zoom-in-down' data-aos-duration='15000' data-aos-offset='420' />
      <div className='SectionHeader'>About Us</div>
      <h3 className='AboutUs-Des'>
        códiGo is run by a team of engineers who handle the whole technical process alongwith the educational content delivery. <br /> We thrive to provide you best experience and courses{' '}
      </h3>
      <div className='OurTeam'>Our Team</div>
      <div className='CardsContainer' data-aos='fade-right' data-aos-offset='70'>
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
                <a href={OwnerObject.resumeUrl}>
                  <img className='OwnerSocialMedia' src={Resume} title='Resume'></img>
                </a>

                <a href={OwnerObject.githubUrl} title='Github Profile'>
                  <img className='OwnerSocialMedia' src={Github} title='Github Profile'></img>
                </a>
                <a href={OwnerObject.linkedUrl}>
                  <img className='OwnerSocialMedia' src={LinkedIn} title='LinkedIN Profile'></img>
                </a>
                <a href={OwnerObject.instaUrl}>
                  <img className='OwnerSocialMedia' src={Instagram} title='Instagram Profile'></img>
                </a>

                <a href={OwnerObject.mailUrl}>
                  <img className='OwnerSocialMedia' src={Mail} title='Email Id'></img>
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
