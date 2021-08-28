import React, { useEffect, useState } from 'react';

import './Quiz.css';

import { QuizArr } from './DefaultQuizQuestions';

import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';
import string from '../resources/quizGif.gif';
import badge from '../resources/certificateBadge.gif';
import timer from '../resources/timer.gif';


const Quiz = props => {
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

  let [minutes, setMinutes] = useState(19);
  let [seconds, setSeconds] = useState(59);
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

  const choiceIsCorrect = () => playerChoice == quizArray[currentQuestionIndex].answer;
  const isLastQuestion = () => currentQuestionIndex == quizArray.length - 1;

  const nextQuestion = () => {
    if (isLastQuestion()) {
      setButtonVal('Submit');
      if (!QuizOver) {
        setQuizOver(true);
        if (choiceIsCorrect()) setplayerScore(prev => prev + quizArray[currentQuestionIndex].points);
      }
      if (QuizOver) {
        alert(`Questions Finished Your Score is : ${playerScore} / ${totalScore}`);
        setdisableAll(false);
      }
      return;
    }
    if (choiceIsCorrect()) setplayerScore(prev => prev + quizArray[currentQuestionIndex].points);

    setCurrentQuestionIndex(prevIdx => prevIdx + 1);
    setplayerChoice(undefined);
  };

  const handleButtonClick = e => setplayerChoice(e.target.name);

  const boom = () => {
    alert(`Questions Finished Your Score is : ${playerScore} / ${totalScore}`);
    setdisableAll(false);
  };

  useEffect(() => {
    console.log(Finisher, seconds);

    let myInterval = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);
      //   if (minutes === 0) {
      //     // boom()
      //     setFinisher(true);
      //   }
      if (seconds === 0) {
        if (minutes === 0) clearInterval(myInterval);
        else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    // if (seconds === 0 && minutes === 0) boom();
    if (minutes === 0 && seconds === 0) {
      boom();
    }
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className='BooksBox' id='QuizSection'>
      <img src={BlobP1} id='bp1' />
      <img src={BlobP2} id='bp2' />
      <div className='quiz-container'>
        {/* <h1>
        {playerScore}/{totalScore}{' '}
      </h1> */}

        {/* <div className='QuizInstructions'>
          <h1>{props.name} </h1>
          <h1>Certificate Quiz</h1>
          <br />
          <hr />
          <br />
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
          <button className='QuizStartButton' id='StartQuiz'>START QUIZ {'/>'}</button>
          <img src={string} />
        </div> */}

        <div>
          <div className='quiz-question'>
            Q{currentQuestionIndex + 1} {'|'} {quizArray[currentQuestionIndex].question}
            {minutes === 0 && seconds === 0 ? null : (
              <span className='timer' style={minutes <= 1 ? dangerTime : {}}>
                <img src={timer} />{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
            )}
          </div>
         <h2><b>{quizArray[currentQuestionIndex].points}</b> Points</h2>
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
        </div>
        <div>
          <button disabled={!disableAll} className='quiz-nextbutton' onClick={nextQuestion}>
            {buttonVal}
          </button>
        </div> 

        {/* <div className='QuizEnd'>
          <h1>{props.name}</h1>
          <img src={badge} />
          <h1>Certificate Quiz | RESULT</h1>
          <hr />
          <h2>
            Your Score : {playerScore}/{totalScore}{' '}
          </h2>

          <h1 id='Congratulations'>Congratulations !!</h1>
          <button className='QuizStartButton' id='ViewCertificate'>
            VIEW CERTIFICATE
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Quiz;
