import React, { useEffect, useState } from 'react';
import '../CoursePages/coursePageTemplate.css';
import '../Quiz/Quiz.css';

import star from '../resources/star.png';
import starFilled from '../resources/starfilled.png';

import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';
import codigoIcon from '../resources/codiGo.png';
const FeedbackTemplate = props => {
  let [certificateModal, setCertificateModal] = useState(false);
  let [overallFive, setOverallFive] = useState(false);
  let [overallFour, setOverallFour] = useState(false);
  let [overallThree, setOverallThree] = useState(false);
  let [overallTwo, setOverallTwo] = useState(false);
  let [overallOne, setOverallOne] = useState(false);
  let [overallNumber, setOverallNumber] = useState();

  let [uFive, setuFive] = useState(false);
  let [uFour, setuFour] = useState(false);
  let [uThree, setuThree] = useState(false);
  let [uTwo, setuTwo] = useState(false);
  let [uOne, setuOne] = useState(false);
  let [uNumber, setuNumber] = useState();

  let [fFive, setfFive] = useState(false);
  let [fFour, setfFour] = useState(false);
  let [fThree, setfThree] = useState(false);
  let [fTwo, setfTwo] = useState(false);
  let [fOne, setfOne] = useState(false);
  let [fNumber, setfNumber] = useState();

  let [tfFive, settfFive] = useState(false);
  let [tfFour, settfFour] = useState(false);
  let [tfThree, settfThree] = useState(false);
  let [tfTwo, settfTwo] = useState(false);
  let [tfOne, settfOne] = useState(false);
  let [tfNumber, settfNumber] = useState();

  let [makeDisable, setMakeDisable] = useState(false);
  let [disableText, setDisableText] = useState('Submit Your Feedback');

  let [allFields, setAllFields] = useState(false);

  const checkFeedbackAllClicked = () => {
    if (!uNumber || !fNumber || !overallNumber || !tfNumber) {
      setAllFields(true);
      return false;
    } else {
      setAllFields(false);
      return true;
    }
  };

  return (
    <div className='BooksBox' id='FeedBack'>
      <img src={BlobP1} id='bp1' />
      <img src={BlobP2} id='bp2' />
      <div className='BooksContainer '>
        <h2>{props.CourseName} | Feedback</h2>
        <hr />
        <div className='RatingsBar'>
          <div className='RatingsChart'>
            <div className='MetricsItem'>
              <h1>{props.ratings}</h1>
              <h3>Overall Ratings</h3>
            </div>
            <div>
              <div className='RatingsSpanner'>
                {' '}
                <h3>5</h3>
                <hr style={{ width: `${props.five * 2}vh`, backgroundColor: 'Green' }}></hr>
              </div>
              <div className='RatingsSpanner'>
                {' '}
                <h3>4</h3>
                <hr style={{ width: `${props.four * 2}vh`, backgroundColor: 'lightGreen' }}></hr>
              </div>
              <div className='RatingsSpanner'>
                {' '}
                <h3>3</h3>
                <hr style={{ width: `${props.three * 2}vh`, backgroundColor: 'yellow' }}></hr>
              </div>
              <div className='RatingsSpanner'>
                {' '}
                <h3>2</h3>
                <hr style={{ width: `${props.two * 2}vh`, backgroundColor: 'orange' }}></hr>
              </div>
              <div className='RatingsSpanner'>
                {' '}
                <h3>1</h3>
                <hr style={{ width: `${props.one * 2}vh`, backgroundColor: 'red' }}></hr>
              </div>
            </div>
          </div>
          <div className='Performance'>
            <h2>Performance Metrics</h2>
            <div>
              <div className='MetricsItem'>
                <h1>{props.understandable}</h1>
                <h3>Understandable</h3>
              </div>
              <div className='MetricsItem'>
                <h1>{props.friendly}</h1>
                <h3>Friendly</h3>
              </div>
              <div className='MetricsItem'>
                <h1>{props.technical}</h1>
                <h3>Technicalities</h3>
              </div>
            </div>
          </div>
        </div>
        <button disabled={makeDisable} className='QuizStartButton' onClick={() => setCertificateModal(true)}>
          {disableText}
        </button>
        <div className='FeedBackModal' onClick={() => checkFeedbackAllClicked()} style={certificateModal ? {} : { visibility: 'hidden' }}>
          <img src={codigoIcon} id='feedbackicon' />

          <div className='OverallRatingsFeedBack'>
            <h2>Overall Ratings</h2>
            <div>
              <img
                src={overallFive || overallFour || overallThree || overallTwo || overallOne ? starFilled : star}
                onClick={() => {
                  setOverallOne(true);
                  setOverallTwo(false);
                  setOverallThree(false);
                  setOverallFour(false);
                  setOverallFive(false);
                  setOverallNumber(1);
                }}
              />
              <img
                src={overallFive || overallFour || overallThree || overallTwo ? starFilled : star}
                onClick={() => {
                  setOverallTwo(true);
                  setOverallThree(false);
                  setOverallFour(false);
                  setOverallFive(false);
                  setOverallNumber(2);
                }}
              />
              <img
                src={overallFive || overallFour || overallThree ? starFilled : star}
                onClick={() => {
                  setOverallThree(true);
                  setOverallFour(false);
                  setOverallFive(false);
                  setOverallNumber(3);
                }}
              />
              <img
                src={overallFive || overallFour ? starFilled : star}
                onClick={() => {
                  setOverallFour(true);
                  setOverallFive(false);
                  setOverallNumber(4);
                }}
              />
              <img
                src={overallFive ? starFilled : star}
                onClick={() => {
                  setOverallFive(true);
                  setOverallNumber(5);
                }}
              />
            </div>
            <h1>{overallNumber}</h1>
          </div>
          <div className='OverallRatingsFeedBack'>
            <h2>Understandable Language</h2>
            <div>
              <img
                src={uFive || uFour || uThree || uTwo || uOne ? starFilled : star}
                onClick={() => {
                  setuOne(true);
                  setuTwo(false);
                  setuThree(false);
                  setuFour(false);
                  setuFive(false);
                  setuNumber(1);
                }}
              />
              <img
                src={uFive || uFour || uThree || uTwo ? starFilled : star}
                onClick={() => {
                  setuTwo(true);
                  setuThree(false);
                  setuFour(false);
                  setuFive(false);
                  setuNumber(2);
                }}
              />
              <img
                src={uFive || uFour || uThree ? starFilled : star}
                onClick={() => {
                  setuThree(true);
                  setuFour(false);
                  setuFive(false);
                  setuNumber(3);
                }}
              />
              <img
                src={uFive || uFour ? starFilled : star}
                onClick={() => {
                  setuFour(true);
                  setuFive(false);
                  setuNumber(4);
                }}
              />
              <img
                src={uFive ? starFilled : star}
                onClick={() => {
                  setuFive(true);
                  setuNumber(5);
                }}
              />
            </div>
            <h1>{uNumber}</h1>
          </div>
          <div className='OverallRatingsFeedBack'>
            <h2>Friendly Nature</h2>
            <div>
              <img
                src={fFive || fFour || fThree || fTwo || fOne ? starFilled : star}
                onClick={() => {
                  setfOne(true);
                  setfTwo(false);
                  setfThree(false);
                  setfFour(false);
                  setfFive(false);
                  setfNumber(1);
                }}
              />
              <img
                src={fFive || fFour || fThree || fTwo ? starFilled : star}
                onClick={() => {
                  setfTwo(true);
                  setfThree(false);
                  setfFour(false);
                  setfFive(false);
                  setfNumber(2);
                }}
              />
              <img
                src={fFive || fFour || fThree ? starFilled : star}
                onClick={() => {
                  setfThree(true);
                  setfFour(false);
                  setfFive(false);
                  setfNumber(3);
                }}
              />
              <img
                src={fFive || fFour ? starFilled : star}
                onClick={() => {
                  setfFour(true);
                  setfFive(false);
                  setfNumber(4);
                }}
              />
              <img
                src={fFive ? starFilled : star}
                onClick={() => {
                  setfFive(true);
                  setfNumber(5);
                }}
              />
            </div>
            <h1>{fNumber}</h1>
          </div>

          <div className='OverallRatingsFeedBack'>
            <h2>Technical Knowledge</h2>
            <div>
              <img
                src={tfFive || tfFour || tfThree || tfTwo || tfOne ? starFilled : star}
                onClick={() => {
                  settfOne(true);
                  settfTwo(false);
                  settfThree(false);
                  settfFour(false);
                  settfFive(false);
                  settfNumber(1);
                }}
              />
              <img
                src={tfFive || tfFour || tfThree || tfTwo ? starFilled : star}
                onClick={() => {
                  settfTwo(true);
                  settfThree(false);
                  settfFour(false);
                  settfFive(false);
                  settfNumber(2);
                }}
              />
              <img
                src={tfFive || tfFour || tfThree ? starFilled : star}
                onClick={() => {
                  settfThree(true);
                  settfFour(false);
                  settfFive(false);
                  settfNumber(3);
                }}
              />
              <img
                src={tfFive || tfFour ? starFilled : star}
                onClick={() => {
                  settfFour(true);
                  settfFive(false);
                  settfNumber(4);
                }}
              />
              <img
                src={tfFive ? starFilled : star}
                onClick={() => {
                  settfFive(true);
                  settfNumber(5);
                }}
              />
            </div>
            <h1>{tfNumber}</h1>
          </div>

          <button
            onClick={() => {
              if (checkFeedbackAllClicked()) {
                setCertificateModal(false);
                setDisableText('Feedback Submitted');
                setMakeDisable(true);
              }
            }}
            className='QuizStartButton'
          >
            Submit FeedBack
          </button>
          <h4 style={allFields ? {} : { visibility: 'hidden' }}>Please Select All Ratings</h4>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTemplate;
