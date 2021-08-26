import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './AllCourses.css';

import CourseCard from './CoursesCard';
import UpcomingCourses from './UpcomingCourses';
import Footer from '../footer';

import codiGoIcon from '../resources/codiGo.png';
import searchIcon from '../resources/search.png';
import menuIcon from '../resources/menuRes.png';
import JSBhavesh from '../resources/JSBhavesh.png';
import HtmlAtharva from '../resources/HTMLAtharva.png';
import JavaAdika from '../resources/JAVAAdika.png';
import PythonVaishnavi from '../resources/PYTHONVaishnavi.png';
import Bhavesh from '../resources/bhavesh.jpg';

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let [showFiltered, setShowfiltered] = useState(false);
  let [filteredCourses, setfilteredCourses] = useState([]);

  const handleRendering = () => {
    console.log(searchTerm);
    if (searchTerm === '') {
      setShowfiltered(false);
      return;
    }
    let newarr = [...demo, ...demoTwo];
    let filtered = newarr.filter(eachobj => {
      return eachobj.keywords.join(' ').toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(filtered);
    setfilteredCourses(filtered);

    setShowfiltered(true);
  };

  let [demo, setDemo] = useState([
    {
      header: ' Web Development Series',
      keywords: ['html', 'css', 'atharva', 'web', 'bhagat', 'react'],
      coursesCard: [
        {
          ImageLogo: HtmlAtharva,
          CourseName: 'HTML Complete Course',
          CourseInfo: 'The complete HTML Course to kick-start Web Development',
          TutorPic: Bhavesh,
          TutorName: 'Atharva Bhagat',
          CourseDuration: '1 Hour',
          CourseRatings: 'New Course',
          Linker: 'html01',
          SeriesName: 'Web Development Series',
          keywords: ['html', 'css', 'atharva', 'web', 'bhagat', 'react'],
        },
      ],
    },
    {
      header: 'Java Programming Series',
      keywords: ['Java', 'Programming', 'adika', 'karnataki', 'gui'],

      coursesCard: [
        {
          ImageLogo: JavaAdika,
          CourseName: 'Java Complete Course',
          CourseInfo: 'Java Programming explained thorougly to enter beautiful world of Java',
          TutorPic: Bhavesh,
          TutorName: 'Adika Karnataki',
          CourseDuration: '1 Hour',
          CourseRatings: 'New Course',
          Linker: 'java01',
          SeriesName: 'Java Programming Series',
          keywords: ['Java', 'Programming', 'adika', 'karnataki', 'gui'],
        },
      ],
    },
  ]);

  let [demoTwo, setDemoTwo] = useState([
    {
      header: 'Javascript Development Series',
      keywords: ['js', 'javascript', 'clean coding', 'bhavesh', 'mhadse'],

      coursesCard: [
        {
          ImageLogo: JSBhavesh,
          CourseName: 'Javascript Complete Course',
          CourseInfo: 'Become Zero-To-Hero in Javascript and start building Web-Applications',
          TutorPic: Bhavesh,
          TutorName: 'Bhavesh Mhadse',
          CourseDuration: '2 Hours',
          CourseRatings: 'New Course',
          Linker: 'js01',
          SeriesName: 'JavaScript Development Series',
          keywords: ['js', 'javascript', 'clean coding', 'bhavesh', 'mhadse', 'web'],
        },
      ],
    },

    {
      header: 'Python Development Series',
      keywords: ['python', 'vaishnavi', 'koragonkar', 'automation'],

      coursesCard: [
        {
          ImageLogo: PythonVaishnavi,
          CourseName: 'Python Complete Course',
          CourseInfo: 'Complete Python Course loaded with various interesting Concepts',
          TutorPic: Bhavesh,
          TutorName: 'Vaishnavi Korgaonkar',
          CourseDuration: '1 Hour',
          CourseRatings: 'New Course',
          Linker: 'python01',
          SeriesName: 'Python Development Series',
          keywords: ['python', 'vaishnavi', 'koragonkar', 'automation'],
        },
      ],
    },
  ]);

  return (
    <>
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
        <Link to ='/'><img className='dashboard-pic' src={codiGoIcon}></img></Link>
        </div>
        <div id='courseSearch'>
          <input
            type='search'
            name='courseSearch'
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)} //thamb x kuthey ? :(
            id='courseSearchBar'
            placeholder='Search Courses / Tutors '
          ></input>
          <button onClick={handleRendering}>
            <img src={searchIcon}></img>
          </button>
        </div>
        <div className='dashboard-links'>
          <ul>
            <li>Community</li>
            <li>Kōdo</li>
            <li>Pixzta</li>
            <Link to ='/dashboard'><li id='DashBoard'>
              <strong>Dashboard</strong>
            </li></Link>
          </ul>
        </div>
        <div className='res-NavButton'>
          <img src={menuIcon}></img>
        </div>
      </div>

      <div className='Content'>
        {!showFiltered && (
          <div className='column'>
            {demo.map(eachObject => {
              return (
                <div className='OneSection'>
                  <h2 className='SectHeader'>{eachObject.header}</h2>{' '}
                  {eachObject.coursesCard.map(eachCard => (
                    <CourseCard
                      linker={eachCard.Linker}
                      duration={eachCard.CourseDuration}
                      logo={eachCard.ImageLogo}
                      tutor={eachCard.TutorName}
                      tutorImg={eachCard.TutorPic}
                      courseName={eachCard.CourseName}
                      courseDesc={eachCard.CourseInfo}
                      ratings={eachCard.CourseRatings}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {!showFiltered && (
          <div className='column'>
            {demoTwo.map(eachObject => {
              return (
                <div className='OneSection'>
                  <h2 className='SectHeader'>{eachObject.header}</h2>{' '}
                  {eachObject.coursesCard.map(eachCard => (
                    <CourseCard
                      linker={eachCard.Linker}
                      duration={eachCard.CourseDuration}
                      logo={eachCard.ImageLogo}
                      tutor={eachCard.TutorName}
                      tutorImg={eachCard.TutorPic}
                      courseName={eachCard.CourseName}
                      courseDesc={eachCard.CourseInfo}
                      ratings={eachCard.CourseRatings}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {filteredCourses && (
          <div className='column'>
            {filteredCourses.map(eachObject => {
              return (
                <div className='OneSection' style={{ marginLeft: '50%' }}>
                  <h2 className='SectHeader'>{eachObject.header}</h2>
                  {eachObject.coursesCard
                    .filter(val => {
                      if (searchTerm === '') {
                        return val;
                      } else if (
                        val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.SeriesName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.keywords.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map(eachCard => (
                      <CourseCard
                        linker={eachCard.Linker}
                        duration={eachCard.CourseDuration}
                        logo={eachCard.ImageLogo}
                        tutor={eachCard.TutorName}
                        tutorImg={eachCard.TutorPic}
                        courseName={eachCard.CourseName}
                        courseDesc={eachCard.CourseInfo}
                        ratings={eachCard.CourseRatings}
                      />
                    ))}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <UpcomingCourses />

      <Footer />
    </>
  );
};

export default AllCourses;
