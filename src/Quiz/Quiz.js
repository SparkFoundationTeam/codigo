import React, { useEffect, useState } from 'react';
import screenfull from 'screenfull';

import './Quiz.css';

import { QuizArr } from './DefaultQuizQuestions';

import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';
import string from '../resources/quizGif.gif';
import badge from '../resources/certificateBadge.gif';
import failbadge from '../resources/failBadge.gif';
import timer from '../resources/timer.gif';
import codigoIcon from '../resources/codiGo.png';

const Quiz = ({ name }) => {
  // Quiz
  let [quizArray, setQuizArray] = useState(QuizArr);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Scores and dynamicity :)
  let [playerScore, setplayerScore] = useState(0);
  let [playerChoice, setplayerChoice] = useState(undefined);
  let [totalScore, setotalScore] = useState(50);

  // Quiz Handlers :)
  let [disableAll, setdisableAll] = useState(true);
  let [QuizOver, setQuizOver] = useState(false);
  let [buttonVal, setButtonVal] = useState('Next');

  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(25);
  let [Finisher, setFinisher] = useState(false);

  // Styles :)
  let [clickedStyles, setClickedStyles] = useState({
    transform: 'scale(1.01)',
    borderColor: 'transparent',
    backgroundColor: 'rgb(255, 239, 148)',
  });
  let [dangerTime, setDangerTime] = useState({
    color: 'red',
    fontWeight: '600',
  });

  let [showInstructions, setShowInstructions] = useState(true);
  let [showQuiz, setShowQuiz] = useState(false);
  let [showEnd, setShowEnd] = useState(false);

  const choiceIsCorrect = () => playerChoice == quizArray[currentQuestionIndex].answer;
  const isLastQuestion = () => currentQuestionIndex == quizArray.length - 1;
  const nextQuestion = () => {
    if (isLastQuestion()) {
      setButtonVal('Submit');
      if (!QuizOver) {
        setQuizOver(true);
        if (choiceIsCorrect()) setplayerScore(prev => prev + quizArray[currentQuestionIndex].points);

        if (screenfull.isEnabled) {
          if (screenfull.isFullscreen) screenfull.exit();
        }
      }
      if (QuizOver) {
        // alert(`Questions Finished Your Score is : ${playerScore} / ${totalScore}`);
        setdisableAll(false);
      }
      setShowQuiz(false);

      setShowEnd(true);

      return;
    }
    if (choiceIsCorrect()) setplayerScore(prev => prev + quizArray[currentQuestionIndex].points);

    setCurrentQuestionIndex(prevIdx => prevIdx + 1);
    setplayerChoice(undefined);
  };

  const handleButtonClick = e => setplayerChoice(e.target.name);

  const boom = () => {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) screenfull.exit();
    }
    setdisableAll(false);
  };

  useEffect(() => {
    console.log(Finisher, seconds);

    if (showQuiz) {
      let myInterval = setInterval(() => {
        if (seconds > 0) setSeconds(seconds - 1);

        if (seconds === 0) {
          if (minutes === 0) clearInterval(myInterval);
          else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);

      if (minutes === 0 && seconds === 0) {
        boom();
        setShowQuiz(false);
        setShowEnd(true);
      }
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  return (
    <div className='BooksBox' id={showQuiz ? 'Quizz' : 'QuizSection'}>
      <img src={BlobP1} id='bp1' />
      <img src={BlobP2} id='bp2' />
      <div className='quiz-container'>
        <img src={codigoIcon} id='QuizCodigo' />

        {showInstructions && <Instructions CourseName={name} setQ={e => setShowQuiz(e)} setI={e => setShowInstructions(e)} />}

        {showQuiz && (
          <div>
            <div className='quiz-question'>
              Q{currentQuestionIndex + 1} {'|'} {quizArray[currentQuestionIndex].question}
              {minutes === 0 && seconds === 0 ? null : (
                <span className='timer' style={minutes <= 1 ? dangerTime : {}}>
                  <img src={timer} />
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </span>
              )}
            </div>
            <h2>
              <b>{quizArray[currentQuestionIndex].points}</b> Points
            </h2>
            <button disabled={!disableAll} name='0' onClick={handleButtonClick} className='quiz-options' style={playerChoice == 0 ? clickedStyles : {}}>
              {' '}
              {quizArray[currentQuestionIndex].options[0]}
            </button>
            <button disabled={!disableAll} name='1' onClick={handleButtonClick} className='quiz-options' style={playerChoice == 1 ? clickedStyles : {}}>
              {quizArray[currentQuestionIndex].options[1]}
            </button>
            <button disabled={!disableAll} name='2' onClick={handleButtonClick} className='quiz-options' style={playerChoice == 2 ? clickedStyles : {}}>
              {quizArray[currentQuestionIndex].options[2]}
            </button>
            <button disabled={!disableAll} name='3' onClick={handleButtonClick} className='quiz-options' style={playerChoice == 3 ? clickedStyles : {}}>
              {quizArray[currentQuestionIndex].options[3]}
            </button>
            <div>
              <button disabled={!disableAll} className='quiz-nextbutton' onClick={nextQuestion}>
                {buttonVal}
              </button>
            </div>
          </div>
        )}

        {showEnd && <EndGame CourseName={name} PlayerScore={playerScore} TotalScore={totalScore} />}
      </div>
    </div>
  );
};
const Instructions = ({ CourseName, setQ, setI }) => {
  let [certificateModal, setCertificateModal] = useState(false);

  return (
    <>
      <div className='QuizInstructions'>
        <h1>{CourseName} </h1>
        <h1>Certificate Quiz</h1>
        <br />
        <hr />
        <br />
        <h2>INSTRUCTIONS</h2>
        <br />
        <p> You will be given 20 Questions to Attempt </p> <br />
        <p> 10 questions will have 2 points and 10 questions of 3 points </p>
        <br />
        <p> You will be alloted 20 minutes to solve the Quiz </p>
        <br />
        <p> You need to score 35 points to pass the quiz and obtain certificate </p>
        <br />
        <p>
          {' '}
          <b> You can attempt the quiz only 3 times</b>{' '}
        </p>
        <br />
        <button
          onClick={() => {
            setCertificateModal(true);
          }}
          className='QuizStartButton'
          id='StartQuiz'
        >
          TAKE QUIZ {'/>'}
        </button>
        <img src={string} />
      </div>
      <div className='CertificateModal' style={certificateModal ? {} : { visibility: 'hidden' }}>
        <img src={codigoIcon} />
        <h2>You cannot leave the quiz in between , your Attempt will be counted. </h2>
        <h2>Make sure you have stable internet connection </h2>
        <button
          onClick={() => {
            setCertificateModal(false);
            setI(false);
            setQ(true);
            if (screenfull.isEnabled) {
              screenfull.request();
            }
          }}
          className='QuizStartButton'
        >
          Start Quiz
        </button>
        <button
          onClick={() => {
            setCertificateModal(false);
            setI(true);
            setQ(false);
          }}
          className='QuizBackButton'
        >
          Go Back
        </button>
      </div>
    </>
  );
};

const EndGame = ({ CourseName, PlayerScore, TotalScore }) => {
  let [certificateModal, setCertificateModal] = useState(false);
  return (
    <>
      <div className='QuizEnd'>
        <h1>{CourseName} </h1>
        <h1>Certificate Quiz | RESULT</h1>
        <hr />
        <h2>
          Your Score : {PlayerScore}/{TotalScore}{' '}
        </h2>
        <h1 id='Congratulations' style={PlayerScore < 3 ? { display: 'none' } : {}}>
          Congratulations !!
        </h1>
        <h1 id='Congratulations' style={PlayerScore > 3 ? { display: 'none' } : {}}>
          Practise more and take test again
        </h1>
        <img src={PlayerScore > 3 ? badge : failbadge} />

        <button onClick={() => setCertificateModal(true)} className='QuizStartButton' id='ViewCertificate' style={PlayerScore < 3 ? { visibility: 'hidden' } : {}}>
          VIEW CERTIFICATE
        </button>
      </div>
      <div className='CertificateModal' style={certificateModal ? {} : { visibility: 'hidden' }}>
        <img src={codigoIcon} />
        <h2>Certificate successfully mailed to registered account</h2>
        <button onClick={() => setCertificateModal(false)} className='QuizStartButton'>
          Okay
        </button>
      </div>
    </>
  );
};

export default Quiz;
