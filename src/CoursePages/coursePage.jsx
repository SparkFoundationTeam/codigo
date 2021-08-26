import React, { useState, useContext, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import codiGoIcon from '../resources/codiGo.png';
import menuIcon from '../resources/menuRes.png';
import './coursePageTemplate.css';
import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';

import videoIcon from '../resources/videos.png';
import bookIcon from '../resources/books.png';
import codeIcon from '../resources/code.png';
import certificateIcon from '../resources/certificateIcon.png';
import feedbackIcon from '../resources/feedback.png';
import RunCode from '../resources/RunCode.png';

const CoursePageTemplate = props => {
  let [index, setIndex] = useState(0);
  let [clickedStyles, setClickStyle] = useState({
    borderLeft: '5px teal solid',
  });



  let [editorText,setEditorText]=useState(`${props.Button1Text}`)

  useEffect(()=>{
    
  },[]) 

  const CodeRunnerHtml =() =>{
    let frame = document.getElementById("output-window").contentWindow.document;

    frame.open();
    frame.write(editorText);
    frame.close();
  }




  return (
    <div>
      {/* Nav Bar */}
      <div className='dashboard-navbar'>
        <div className='dashboard-icon'>
        <Link to ='/'><img className='dashboard-pic' src={codiGoIcon}></img></Link>
        </div>
        <h2 id='CourseHeader'>{props.CourseName}</h2>
        <div className='dashboard-links'>
          <ul>
          <Link to ='/all-courses'><li>All Courses</li></Link>
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
      <div className='CourseSidebar'>
        <a href='#VideoBox'>
          <div className='CourseBar' onClick={() => setIndex(0)} style={index === 0 ? clickedStyles : {}}>
            <img src={videoIcon}></img> <span class='tooltiptext'>Course Video</span>
          </div>
        </a>
        <a href='#CodeAlong'>
          <div className='CourseBar' onClick={() => setIndex(2)} style={index === 2 ? clickedStyles : {}}>
            <img src={codeIcon}></img> <span class='tooltiptext'>Code Along</span>
          </div>
        </a>
        <a href='#Resources'>
          <div className='CourseBar' onClick={() => setIndex(1)} style={index === 1 ? clickedStyles : {}}>
            <img src={bookIcon}></img> <span class='tooltiptext'>Resources</span>
          </div>
        </a>
        <div className='CourseBar' onClick={() => setIndex(3)} style={index === 3 ? clickedStyles : {}}>
          <img src={certificateIcon}></img> <span class='tooltiptext'>Quiz and Certificate</span>
        </div>
        <div className='CourseBar' onClick={() => setIndex(4)} style={index === 4 ? clickedStyles : {}}>
          <img src={feedbackIcon}></img> <span class='tooltiptext'>Feedback</span>
        </div>
      </div>

      {/* Section 1  */}
      <div className='VideoBox' id='VideoBox'>
        <video src={props.video} controls></video>
        <div id='List'>
          <h3>TimeLine {'>'}</h3>
          <h4>{props.Section1}</h4>
          <h4>{props.Section2}</h4>
          <h4>{props.Section3}</h4>
          <h4>{props.Section4}</h4>
          <h4>{props.Section5}</h4>
        </div>
      </div>

      {/* Section 2 */}
      <div className='CodeAlong' id='CodeAlong'>
        <img src={BlobP1} id='bp1' />
        <img src={BlobP2} id='bp2' />
        <div className='CodeContainer'>
          <div id='Compiler'>
            <b id='codeAlongLabel'>códiGo CODE ALONG </b>
            <p id='outputLabel'>OUTPUT </p>
            <textarea onChange={()=>CodeRunnerHtml()}id='CodeEditor' placeholder='Write your Code Here'>
              {editorText}
            </textarea>

            <button className='RunCode' onClick={()=>CodeRunnerHtml()}>
              <img src={RunCode}></img>
              <br />
              <b>Run</b>
            </button>

            <iframe id="output-window"></iframe>
          </div>
          <div className='ButtonSelection'>
            <button>{props.Button1}</button>
            <button onClick={()=>setEditorText(`${props.Button2Text}`)}>{props.Button2}</button>
            <button>props.Button3</button>
            <button>props.Button4</button>
            <button>props.Button5</button>
            <button>props.Button6</button>
            <button>props.Button7</button>
          </div>
        </div>
      </div>

      {/* 
      Section 3 
      */}
      <div className='BooksBox' id='Resources'>
        <img src={BlobP1} id='bp1' />
        <img src={BlobP2} id='bp2' />
        <div className='BooksContainer '>
          <h2>{props.CourseName} | Resources</h2>
          <hr />
          <div className='BookInfo'>
            <div>
              <div className='BookTitle'>
                <b>Book :</b> {props.Book1Name}
              </div>
              <div className='AuthorTitle'>
                <b>Author :</b>
                {props.Author1}
              </div>
            </div>
            <div>
              <div className='BookDesc'>
                <b>Description {'>'}</b> <br />
                {props.Book1Desc}
              </div>
            </div>
            <div>
              <a href={props.Book1}>
                <div className='ViewBook'>View </div>
              </a>
              <a href={props.Book1} download>
                <div className='DownloadBook'>Download </div>
              </a>
            </div>
          </div>
          <hr className='insideHR' />
          <div className='BookInfo'>
            <div>
              <div className='BookTitle'>
                <b>Book :</b> {props.Book2Name}
              </div>
              <div className='AuthorTitle'>
                <b>Author :</b>
                {props.Author1}
              </div>
            </div>
            <div>
              <div className='BookDesc'>
                <b>Description {'>'}</b> <br />
                {props.Book2Desc}
              </div>
            </div>
            <div>
              <a href={props.Book2}>
                <div className='ViewBook'>View </div>
              </a>
              <a href={props.Book2} download>
                <div className='DownloadBook'>Download </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePageTemplate;
