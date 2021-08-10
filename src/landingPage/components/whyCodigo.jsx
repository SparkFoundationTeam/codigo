import React from 'react';
import './whyCodigo.css'
import Card from './reasonCard'
import skilled from '../../resources/SkilledEngineers.gif'
import assistant from '../../resources/assistant.gif'
import books from '../../resources/books.gif'
import certificate from '../../resources/certificate2.gif'
import community from '../../resources/CommunityForum.gif'
import competition from '../../resources/Competition.gif'
import content from '../../resources/content.gif'
import integrated from '../../resources/integrated.gif'
import mentors from '../../resources/mentors.gif'
import mobile from '../../resources/mobile.gif'
import blob2 from '../../resources/blob (4).svg'
import blob from '../../resources/blob.svg'



const whyCodigo = () => {

    const FirstRow = [
        {
            title: 'Developed by skilled Engineers',
            line1: ' Understand all concepts easily ',
            line2: ' Build Various Projects along with them',
            image: skilled
        },
        {
            title: 'Valuable Certification',
            line1: 'On Completion of Course you get a certificate',
            line2: 'from our founders which can be used in CV',
            image: certificate
        },
        
        {
            title: 'Integrated Development',
            line1: 'Learn and Execute your code simultaneously',
            line2: 'Use códiGo online compilers ',
            image: integrated
        }
        
    ]
    const SecondRow = [
        
        {
            title: '20+ Free Hours of Content',
            line1: 'We thrive to take coding to each student',
            line2: 'Its free for all in learning Phase',
            image: content
        },
        
        {
            title: 'Community Forum',
            line1: 'Ask Your Queries in Community Forum',
            line2: 'Learn and Grow Together',
            image: community
        }

        
    ]
    const ThirdRow = [
        {
            title: 'Specially Crafted Notes',
            line1: 'Get Handy Cheat Sheets for all Courses',
            line2: 'Useful for University Exams as well',
            image: books
        },
        {
            title: 'Quick Start Assistant',
            line1: 'Downloadable Quick Start Bundles',
            line2: 'Save your work easily',
            image: assistant
        },
        {
            title: 'Ask the Mentors',
            line1: 'All mentors available',
            line2: 'Mentors will solve your doubts directly',
            image: mentors
        }

        
    ]
    const FourthRow = [
        {
            title: 'Monthly Contests & Prizes',
            line1: 'Compete with other kodeos and get better',
            line2: 'Winner gets exciting prizes',
            image: competition
        },
        {
            title: 'Exclusive Mobile App',
            line1: 'Power-packed Mobile App ',
            line2: 'Learn faster and easier',
            image: mobile
        },
        
        
        
        
        
    ]
    return (
        <div id='cards'>
            <div id='blob'>
                <img src={blob} id='blob1'></img>
                <img src={blob2} id='blob2'></img>
            </div>
            
            <h1>Why códiGo ? </h1>
            <span className='Row'>
                {FirstRow.map((name, index) => (
                    <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>)
                )}
            </span>
            <span className='Row'>
                {SecondRow.map((name, index) => (
                    <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>)
                )}
            </span>
            <span className='Row'>
                {ThirdRow.map((name, index) => (
                    <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>)
                )}
            </span>
            <h2 id='section'>Upcoming Announced Features </h2>
            <span className='Row'>
                {FourthRow.map((name, index) => (
                    <Card title={name.title} line1={name.line1} line2={name.line2} image={name.image}></Card>)
                )}
            </span>
            
        </div>


    );
}

export default whyCodigo;