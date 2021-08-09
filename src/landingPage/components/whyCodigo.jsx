import React from 'react';

import './whyCodigo.css';

import Card from './reasonCard';
import skilled from './res/SkilledEngineers.gif';
import assistant from './res/assistant.gif';
import books from './res/books.gif';
import certificate from './res/certificate2.gif';
import community from './res/CommunityForum.gif';
import competition from './res/Competition.gif';
import content from './res/content.gif';
import integrated from './res/integrated.gif';
import mentors from './res/mentors.gif';
import mobile from './res/mobile.gif';
import blob2 from './res/blob (4).svg';
import blob from './res/blob.svg';

const whyCodigo = () => {
  const FirstRow = [
    {
      title: 'Developed by skilled Engineers',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: skilled,
    },
    {
      title: 'Valuable Certification',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: certificate,
    },

    {
      title: 'Integrated Development',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: integrated,
    },
  ];
  const SecondRow = [
    {
      title: '20+ Free Hours of Content',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: content,
    },

    {
      title: 'Community Forum',
      line1: 'Ask Your Queries in Community Forum',
      line2: 'Learn and Grow Together',
      image: community,
    },
  ];
  const ThirdRow = [
    {
      title: 'Specially Crafted Notes',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: books,
    },
    {
      title: 'Quick Start Assistant',
      line1: 'Downloadable Quick Start Bundles',
      line2: ' Build Various Projects along with them',
      image: assistant,
    },
    {
      title: 'Ask the Mentors',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: mentors,
    },
  ];
  const FourthRow = [
    {
      title: 'Monthly Contests & Prizes',
      line1: 'Compete with other kodeos and get better',
      line2: 'Winner gets exciting prizes',
      image: competition,
    },
    {
      title: 'Exclusive Mobile App',
      line1: ' Understand all concepts easily ',
      line2: ' Build Various Projects along with them',
      image: mobile,
    },
  ];
  return (
    <div id='cards'>
      <div id='blob'>
        <img src={blob} id='blob1'></img>
        <img src={blob2} id='blob2'></img>
      </div>

      <h1>Why códiGo ? </h1>
      <span className='Row'>
        {FirstRow.map((name, index) => (
          <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>
        ))}
      </span>
      <span className='Row'>
        {SecondRow.map((name, index) => (
          <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>
        ))}
      </span>
      <span className='Row'>
        {ThirdRow.map((name, index) => (
          <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>
        ))}
      </span>
      <h2 id='section'>Upcoming Announced Features </h2>
      <span className='Row'>
        {FourthRow.map((name, index) => (
          <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>
        ))}
      </span>
    </div>
  );
};

export default whyCodigo;
