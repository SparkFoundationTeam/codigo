import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './AllCourses.css';

import CourseCard from './CoursesCard';
import UpcomingCourses from './UpcomingCourses';
import Footer from '../footer';

import axios from 'axios';

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

  let [JsCourse, setJsCOurse] = useState([
    {
      ImageLogo: JSBhavesh,
      CourseName: 'Javascript Complete Course',
      CourseInfo: 'Become Zero-To-Hero in Javascript and start building Web-Applications',
      TutorPic: Bhavesh,
      TutorName: 'Bhavesh Mhadse',
      shortCourseName: 'javascript',
      CourseDuration: '2 Hours',
      rating: 2,
      Linker: 'js01',
      SeriesName: 'JavaScript Development Series',
      keywords: ['js', 'javascript', 'clean coding', 'series >>', 'courses >>', 'tutors >> ', 'bhavesh', 'mhadse', 'web'],
    },
  ]);

  let [dt, setData] = useState([]);

  const handleRendering = () => {
    if (searchTerm === '') {
      setShowfiltered(false);
      return;
    } else {
      setShowfiltered(true);
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
      keywords: ['Web Development Series', 'series >>', 'courses >>', 'tutors >> ', 'HTML Complete Course', 'html', 'css', 'web', 'atharva', 'bhagat', 'react'],
      coursesCard: [
        {
          ImageLogo: HtmlAtharva,
          shortCourseName: 'html',
          CourseName: 'Html Complete Course',
          CourseInfo: 'The complete HTML Course to kick-start Web Development',
          TutorPic: Bhavesh,
          TutorName: 'Atharva Bhagat',
          CourseDuration: '1 Hour',
          rating: 5,
          totalRating: 0,
          ratingsArr: [0, 0, 0, 0, 0],
          Linker: 'html01',
          SeriesName: 'Web Development Series',
          keywords: ['html', 'series >>', 'courses >>', 'tutors >> ', 'css', 'atharva', 'web', 'bhagat', 'react'],
        },
      ],
    },
    {
      header: 'Java Programming Series',
      keywords: ['Java Programming Series', 'series >>', 'courses >>', 'tutors >> ', 'Java Complete Course', 'Java', 'Programming', 'adika', 'karnataki', 'gui'],

      coursesCard: [
        {
          shortCourseName: 'java',
          ImageLogo: JavaAdika,
          CourseName: 'Java Complete Course',
          CourseInfo: 'Java Programming explained thorougly to enter beautiful world of Java',
          TutorPic: Bhavesh,
          TutorName: 'Adika Karnataki',
          CourseDuration: '2 Hour',
          rating: 5,
          totalRating: 0,
          ratingsArr: [0, 0, 0, 0, 0],
          Linker: 'java01',
          SeriesName: 'Java Development Series',
          keywords: ['Java', 'series >>', 'courses >>', 'tutors >> ', 'Programming', 'adika', 'karnataki', 'gui'],
        },
      ],
    },
  ]);

  let [demoTwo, setDemoTwo] = useState([
    {
      header: 'Javascript Development Series',
      keywords: ['Javascript Development Series', 'series >>', 'courses >>', 'tutors >> ', 'Javascript Complete Course', 'js', 'javascript', 'clean coding', 'bhavesh', 'mhadse'],

      coursesCard: JsCourse,
    },

    {
      header: 'Python Development Series',
      keywords: ['Python Development Series', 'series >>', 'courses >>', 'tutors >> ', 'Python Complete Course', 'python', 'vaishnavi', 'koragonkar', 'automation'],

      coursesCard: [
        {
          shortCourseName: 'python',
          ImageLogo: PythonVaishnavi,
          CourseName: 'Python Complete Course',
          CourseInfo: 'Complete Python Course loaded with various interesting Concepts',
          TutorPic: Bhavesh,
          TutorName: 'Vaishnavi Korgaonkar',
          CourseDuration: '1 Hour',
          rating: 5,
          totalRating: 0,
          ratingsArr: [0, 0, 0, 0, 0],
          Linker: 'python01',
          SeriesName: 'Python Development Series',
          keywords: ['python', 'series >>', 'courses >>', 'tutors >> ', 'vaishnavi', 'korgaonkar', 'automation'],
        },
      ],
    },
  ]); //kay zol kela kai nai :):)
  const getCourses = async () => {
    let { data } = await axios.get('https://codigo-server.herokuapp.com/AllCourses/');
    console.log('data recieved from db iss : ', data); // lvdu saala
    setJsCOurse(prev => [...prev, ...data]); // boom nko hoyla :)

    console.log('Modified course array is ', JsCourse);
  };
  useEffect(() => {
    // getCourses();
    // console.log("Course array is ", JsCourse)
    // console.log(data);
  }, []);

  return (
    <div id='AllCoursesPageBody'>
      {/* <h1>{JSON.stringify(dt)}</h1> */}
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
          <Link to='/'>
            <img className='dashboard-pic' src={codiGoIcon}></img>
          </Link>
        </div>
        <div id='courseSearch'>
          <input
            list='AllCoursesList'
            type='search'
            name='courseSearch'
            value={searchTerm}
            onChange={event => {
              setSearchTerm(event.target.value);
              handleRendering();
            }}
            id='courseSearchBar'
            placeholder='Search Courses / Tutors '
            onSelect={event => {
              setSearchTerm(event.target.value);
              handleRendering();
            }}
          ></input>

          <datalist id='AllCoursesList'>
            <option value='Courses >>'> </option>
            <option value='Html Complete Course'>Web Development Series</option>
            <option value='Java Complete Course'>Java Programming Series</option>
            <option value='Javascript Complete Course'>JavaScript Development Series</option>
            <option value='Python Complete Course'>Python Development Series</option>
            <option value='Tutors >> '></option>
            <option value='Atharva Bhagat'>Atharva's Courses</option>
            <option value='Bhavesh Mhadse'>Bhavesh's Courses</option>
            <option value='Adika Karnataki'>Adika's Courses</option>
            <option value='Vaishnavi Korgaonkar'>Vaishnavi's Courses</option>
            <option value='Series >>'> </option>
            <option value='Web Development Series'>Web Development</option>
            <option value='Java Programming Series'>Java Programming</option>
            <option value='JavaScript Development Series'>JavaScript Series</option>
            <option value='Python Development Series'>Python Development</option>
          </datalist>
          <button onClick={handleRendering}>
            <img src={searchIcon}></img>
          </button>
        </div>
        <div className='dashboard-links'>
          <ul>
            <li>Community</li>
            <li>Kōdo</li>
            <li>Pixzta</li>
            <Link to='/dashboard'>
              <li id='DashBoard'>
                <strong>Dashboard</strong>
              </li>
            </Link>
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
                    <CourseCard shrtcourse={eachCard.shortCourseName} linker={eachCard.Linker} duration={eachCard.CourseDuration} logo={eachCard.ImageLogo} tutor={eachCard.TutorName} tutorImg={eachCard.TutorPic} courseName={eachCard.CourseName} courseDesc={eachCard.CourseInfo} ratings={eachCard.ratings} />
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
                    <CourseCard shrtcourse={eachCard.shortCourseName} linker={eachCard.Linker} duration={eachCard.CourseDuration} logo={eachCard.ImageLogo} tutor={eachCard.TutorName} tutorImg={eachCard.TutorPic} courseName={eachCard.CourseName} courseDesc={eachCard.CourseInfo} ratings={eachCard.rating} />
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
                      } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase()) || val.SeriesName.toLowerCase().includes(searchTerm.toLowerCase()) || val.keywords.join(' ').toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                      }
                    })
                    .map(eachCard => (
                      <CourseCard linker={eachCard.Linker} duration={eachCard.CourseDuration} logo={eachCard.ImageLogo} tutor={eachCard.TutorName} tutorImg={eachCard.TutorPic} courseName={eachCard.CourseName} courseDesc={eachCard.CourseInfo} ratings={eachCard.CourseRatings} />
                    ))}
                </div>
              );
            })}
          </div>
        )}
      </div>{' '}
      <UpcomingCourses />
      <Footer />
    </div>
  );
};

export default AllCourses;
