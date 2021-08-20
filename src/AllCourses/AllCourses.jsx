import React, { useState } from 'react';
import './AllCourses.css'
import CourseCard from './CoursesCard';
import Footer from '../footer'



import codiGoIcon from '../resources/codiGo.png';
import searchIcon from '../resources/search.png';
import JSBhavesh from '../resources/JSBhavesh.png';
import HtmlAtharva from '../resources/HTMLAtharva.png';
import JavaAdika from '../resources/JAVAAdika.png';
import PythonVaishnavi from '../resources/PYTHONVaishnavi.png';
import Bhavesh from '../resources/bhavesh.jpg';

const AllCourses = () => {

    const WebDev = [
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML Complete Course',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Atharva Bhagat',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html01',

        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'CSS Crash Course',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Bhavesh Mhadse',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'css01'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'SCSS Course',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Adika Karnataki',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'scss02'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Vaishnavi Korgaonkar',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html'
        },
    ]

    const JSDev = [
        {
            ImageLogo: JSBhavesh,
            CourseName: 'JavaScript',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Bhavesh Mhadse',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'js01-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Adika Karnataki',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Vaishnavi Korgaonkar',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
    ]

    const JavaDev = [
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Atharva Bhagat',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Bhavesh Mhadse',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Adika Karnataki',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Vaishnavi Korgaonkar',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
    ]

    const PyDev = [

        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Adika Karnataki',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Vaishnavi Korgaonkar',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
    ]

    const UIDev = [
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Atharva Bhagat',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Bhavesh Mhadse',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Adika Karnataki',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Vaishnavi Korgaonkar',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
    ]

    const DBDev = [
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Atharva Bhagat',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Bhavesh Mhadse',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Adika Karnataki',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
        {
            ImageLogo: HtmlAtharva,
            CourseName: 'HTML',
            CourseInfo: 'The complete HTML Course to kick-start Web Development',
            TutorPic: Bhavesh,
            TutorName: 'Vaishnavi Korgaonkar',
            CourseDuration: '1 Hour',
            CourseRatings: 4.7,
            Linker: 'html-course-enroll'
        },
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [seriesHeader, setHeader] = useState(true)





    return (
        <>
            <div className='dashboard-navbar'>
                <div className='dashboard-icon'>
                    <img className='dashboard-pic' src={codiGoIcon}></img>
                </div>
                <div id='courseSearch'>
                    <input type='search' name='courseSearch'
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} id='courseSearchBar'
                        placeholder='Search Courses / Tutors ' ></input>
                    <button><img src={searchIcon}></img></button>
                </div>
                <div className='dashboard-links'>
                    <ul>
                        <li>Community</li>
                        <li>Kōdo</li>
                        <li>Pixzta</li>

                    </ul>
                </div>
            </div>

            <div className='Content'>
                <div className='column'>

                    <div className='OneSection'>
                        <h2 className='SectHeader' >   Web Development Series  </h2>
                        {WebDev.filter((val) => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase())
                                || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase())
                                || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((name, index) => (
                            <>

                                <CourseCard linker={name.Linker} duration={name.CourseDuration}
                                    logo={name.ImageLogo} tutor={name.TutorName} tutorImg={name.TutorPic}
                                    courseName={name.CourseName} courseDesc={name.CourseInfo}
                                    ratings={name.CourseRatings} /> </>)
                        )}
                    </div>
                    <div className='OneSection'>
                        <h2 className='SectHeader'>Python Development Series</h2>
                        {PyDev.filter((val) => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((name, index) => (
                            <CourseCard linker={name.Linker} duration={name.CourseDuration} logo={name.ImageLogo} tutor={name.TutorName} tutorImg={name.TutorPic} courseName={name.CourseName} courseDesc={name.CourseInfo} ratings={name.CourseRatings} />)
                        )}
                    </div>
                    <div className='OneSection'>
                        <h2 className='SectHeader'>DataBase Management Systems</h2>
                        {DBDev.filter((val) => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((name, index) => (
                            <CourseCard linker={name.Linker} duration={name.CourseDuration} logo={name.ImageLogo} tutor={name.TutorName} tutorImg={name.TutorPic} courseName={name.CourseName} courseDesc={name.CourseInfo} ratings={name.CourseRatings} />)
                        )}
                    </div>

                </div>
                <div className='column'>

                    <div className='OneSection'>
                        <h2 className='SectHeader'>JavaScript Development</h2>
                        {JSDev.filter((val) => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((name, index) => (
                            <CourseCard linker={name.Linker} duration={name.CourseDuration} logo={name.ImageLogo} tutor={name.TutorName} tutorImg={name.TutorPic} courseName={name.CourseName} courseDesc={name.CourseInfo} ratings={name.CourseRatings} />)
                        )}
                    </div>
                    <div className='OneSection'>
                        <h2 className='SectHeader'>Java Programming</h2>
                        {JavaDev.filter((val) => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((name, index) => (
                            <CourseCard linker={name.Linker} duration={name.CourseDuration} logo={name.ImageLogo} tutor={name.TutorName} tutorImg={name.TutorPic} courseName={name.CourseName} courseDesc={name.CourseInfo} ratings={name.CourseRatings} />)
                        )}
                    </div>
                    <div className='OneSection'>
                        <h2 className='SectHeader'>UI / UX Designing</h2>
                        {UIDev.filter((val) => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.TutorName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseInfo.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((name, index) => (
                            <CourseCard linker={name.Linker} duration={name.CourseDuration} logo={name.ImageLogo} tutor={name.TutorName} tutorImg={name.TutorPic} courseName={name.CourseName} courseDesc={name.CourseInfo} ratings={name.CourseRatings} />)
                        )}
                    </div>

                </div>
            </div>
            <Footer />

        </>
    );
}

export default AllCourses;
