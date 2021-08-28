import React, { useEffect, useState } from 'react';

import './quiz.css';

import { QuizArr } from './DefaultQuizQuestions';

const Quiz = () => {
  // Quiz
  let [quizArray, setQuizArray] = useState(QuizArr);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Scores and dynamicity :)
  let [playerScore, setplayerScore] = useState(0);
  let [playerChoice, setplayerChoice] = useState(undefined);
  let [totalScore, setotalScore] = useState(quizArray.length);

  // Quiz Handlers :)
  let [disableAll, setdisableAll] = useState(true);
  let [QuizOver, setQuizOver] = useState(false);
  let [buttonVal, setButtonVal] = useState('Next');

  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(5);
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
        setplayerScore(prev => prev + 1);
      }
      if (QuizOver) {
        alert(`Questions Finished Your Score is : ${playerScore} / ${totalScore}`);
        setdisableAll(false);
      }
      return;
    }
    if (choiceIsCorrect()) setplayerScore(prev => prev + 1);

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
    <div className='quiz-container'>
      {/* NNtr he khalcha comment marrr h1 va, user la dakhvaycha naiye tyacha score madhe :) */}
      <h1>
        {playerScore}/{totalScore}{' '}
      </h1>

      <div>
        <div className='quiz-question'>
          Q{currentQuestionIndex + 1}) {quizArray[currentQuestionIndex].question}
          {minutes === 0 && seconds === 0 ? null : (
            <span className='timer' style={minutes <= 1 ? dangerTime : {}}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          )}
        </div>
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
    </div>
  );
};

export default Quiz;
