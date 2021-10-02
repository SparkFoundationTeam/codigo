import React, { useEffect, useState, useContext } from "react";
import screenfull from "screenfull";

import { Link } from "react-router-dom";

import "./Quiz.css";

import { QuizArr } from "./DefaultQuizQuestions";

import { UserContext } from "../MainContext";

import BlobP1 from "../resources/pattern1Blob.png";
import BlobP2 from "../resources/pattern2Blob.png";
import string from "../resources/quizGif.gif";
import badge from "../resources/certificateBadge.gif";
import failbadge from "../resources/failBadge.gif";
import timer from "../resources/timer.gif";
import codigoIcon from "../resources/codiGo.png";
import axios from "axios";
import BackendUrl from "../BackendUrl";

import randomizer from "../randomizer";

const Quiz = ({ name, tutorName, courseId }) => {
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
  let [buttonVal, setButtonVal] = useState("Next");

  let [minutes, setMinutes] = useState(20);
  let [seconds, setSeconds] = useState(0);
  let [Finisher, setFinisher] = useState(false);

  // Styles :)
  let [clickedStyles, setClickedStyles] = useState({
    transform: "scale(1.01)",
    borderColor: "transparent",
    backgroundColor: "rgb(255, 239, 148)",
  });
  let [dangerTime, setDangerTime] = useState({
    color: "red",
    fontWeight: "600",
  });

  let [showInstructions, setShowInstructions] = useState(true);
  let [showQuiz, setShowQuiz] = useState(false);
  let [showEnd, setShowEnd] = useState(false);

  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn
  let [attempts, setAttempts] = useState(1);

  const choiceIsCorrect = () => playerChoice == quizArray[currentQuestionIndex].answer;
  const isLastQuestion = () => currentQuestionIndex == quizArray.length - 1;
  const nextQuestion = () => {
    if (isLastQuestion()) {
      if (choiceIsCorrect()) setplayerScore(prev => prev + parseInt(quizArray[currentQuestionIndex].points)); // sod bghu  nNBtGHRT O .. ppt THAMB E EK LINE

      setButtonVal("Submit");
      if (!QuizOver) {
        setQuizOver(true);

        if (screenfull.isEnabled) {
          if (screenfull.isFullscreen) screenfull.exit();
        }
      }
      if (QuizOver) {
        // alert(`Questions Finished Your Score is : ${playerScore} / ${totalScore}`);
        setdisableAll(false);
      }
      setShowQuiz(false);
      // karan array 0 indexed astat ani apan ANSWERS NORMAL MANSA SAKJHE KELE  :) me index wise taklele BARPAaYn BApRaAYn ata woh gadbad distayt ATHARVA EK NOTICE KELAY KA ? ky JITHE JITHE TU KAITR KRTOTS TIT HhEA  SThIhThH E LAFDI AAHET  ha shh=

      setShowEnd(true);

      return;
    }
    if (choiceIsCorrect()) setplayerScore(prev => prev + parseInt(quizArray[currentQuestionIndex].points)); // sod bghu  nNBtGHRT O .. ppt THAMB E EK LINE

    if (true) {
      setCurrentQuestionIndex(prevIdx => prevIdx + 1);
      setplayerChoice(undefined);
    }
    // console.log("corre")

    // lvdya mi barobar kelta 2 points tuch mg ardhe 3 ardhe 2 bc saalaa toughyness
  };

  const handleButtonClick = e => setplayerChoice(e.target.name);

  const boom = () => {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) screenfull.exit();
    }
    setdisableAll(false);
  };

  useEffect(() => {
    // ha useeffect lvde lavtoy karan toh sarkha trigger hotoy
    // console.log('Name ', name);
    // console.log(Finisher, thambbbbbb

    if (showQuiz) {
      let myInterval = setInterval(() => {
        if (seconds > 0) setSeconds(seconds - 1);

        if (seconds === 0) {
          if (minutes === 0) clearInterval(myInterval);
          else {
            setMinutes(minutes - 1);
            setSeconds(59);
          } ////////////
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
  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("User"));
  //
  const getUserAttempts = async () => {
    setsignedInUser(getUserFromLocalStorage());
    // console.log(signedInUser);
    // let obj = {
    //   email: signedInUser.email,
    //   tutorName: tutorName,
    //   courseName: name,
    // };
    // console.log("Props are ", signedInUser.email, name, tutorName);

    // let data = await axios.get("https://codigo-server.herokuapp.com/Courses/attempts?email=31mhadse.bhavesh2001@gmail.com&courseName=Javascript Complete Course&tutorName=Bhavesh Mhadse");
    let data = await axios.get(`https://codigo-server.herokuapp.com/Courses/attempts?email=${signedInUser.email}&courseName=${name}&tutorName=${tutorName}`);
    // console.log("data from getuser attempts is ", data.data);
    // return data.data;
    setAttempts(data.data);
  };

  // direct attempts gheu nai shakat ka l  api la sangayla lagel ki konuser ani kuthla course email is
  const getQuizQuestions = async () => {
    let language = name.split(" ");
    language = language[0];
    // if (true) alert('language is ', language.toString());
    let data = await axios.get(BackendUrl + `Quiz/${language}`);
    // console.log("Quiz", data.data);
    // console.log("Inside getquiz questions!");

    let quizArray = randomizer(data.data);
    // console.log("quiz questrions areeeeeeee", data.data);
    //kara ajun  sdhya cha 10 kadhu qsns 20 nhiet ani mhane mjha mule mazmore clean code :)

    let point2 = randomizer(quizArray.filter(eachObj => eachObj.points == 2));
    let point3 = randomizer(quizArray.filter(eachObj => eachObj.points == 3));

    point2.length = 10;
    point3.length = 10;

    if (true) setQuizArray([...point2, ...point3]); // kalla

    // console.log(point2); /// kallaa
    // console.log(point3);
    // console.log("I am final", point3.concat(point2));

    // setQuizArray(randomizer(point3.concat(point2)));
  };

  useEffect(() => {
    getUserAttempts();
    getQuizQuestions();
  }, []);

  return (
    <div className='BooksBox' id={showQuiz ? "Quizz" : "QuizSection"}>
      {/* <h1>{JSON.stringify(attempts)}</h1> */}
      <img src={BlobP1} id='bp1' />
      <img src={BlobP2} id='bp2' />
      <div className='quiz-container'>
        <img src={codigoIcon} id='QuizCodigo' />

        {showInstructions && <Instructions Email={signedInUser.email} Attempt={attempts} CourseName={name} TutorName={tutorName} CourseId={courseId} setQ={e => setShowQuiz(e)} setI={e => setShowInstructions(e)} />}

        {showQuiz && (
          <div>
            <div className='quiz-question'>
              Q{currentQuestionIndex + 1} {"|"} {quizArray[currentQuestionIndex].question}
              {minutes === 0 && seconds === 0 ? null : (
                <span className='timer' style={minutes <= 1 ? dangerTime : {}}>
                  <img src={timer} />
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </span>
              )}
              {/* Total questions are {quizArray.length} */}
            </div>
            <h2>
              <b>{quizArray[currentQuestionIndex].points}</b> Points
            </h2>
            <button disabled={!disableAll} name='0' onClick={handleButtonClick} className='quiz-options' style={playerChoice == 0 ? clickedStyles : {}}>
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
            {/* <h1>player score is {playerScore}</h1> */}
          </div>
        )}

        {showEnd && <EndGame Email={signedInUser.email} TutorName={tutorName} CourseName={name} PlayerScore={playerScore} TotalScore={totalScore} />}
      </div>
    </div>
  );
}; //yay
const Instructions = ({ Attempt, CourseName, TutorName, CourseId, setQ, setI, Email }) => {
  let [certificateModal, setCertificateModal] = useState(false);
  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  let [attemp, setattemp] = useState(1);

  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("User"));

  const getUserAttempts = async () => {
    // console.log("Props in instructions are are ", signedInUser.email, CourseName, TutorName);

    let email = getUserFromLocalStorage().email;

    // console.log("New method ", email);
    // let data = await axios.get("https://codigo-server.herokuapp.com/Courses/attempts?email=31mhadse.bhavesh2001@gmail.com&courseName=Javascript Complete Course&tutorName=Bhavesh Mhadse");
    let data = await axios.get(`https://codigo-server.herokuapp.com/Courses/attempts?email=${Email}&courseName=${CourseName}&tutorName=${TutorName}`);
    // let data = await axios.get(`https://codigo-server.herokuapp.com/Courses/attempts?email=${signedInUser.email}&courseName=${name}&tutorName=${tutorName}`);
    // console.log("data from getuser attempts is ", data.data);
    // return data.data.toString();
    if (true) setattemp(data.data);
  };
  const increaseAttempts = async () => {
    let obj = {
      courseName: CourseName,
      tutorName: TutorName,
      email: Email, //hm
    };
    let data = await axios.patch(`https://codigo-server.herokuapp.com/Courses/attempts`, obj);
    // console.log("Attemtppspspsss", data.data);
    setattemp(data.data.numberOfAttempts);
  };
  useEffect(() => {
    // setattemp(getUserAttempts());
    getUserAttempts();
    // console.log("Em is ", Email);
    // alert(Attempt);
  }, []); //maar try

  return (
    <>
      <div className='QuizInstructions'>
        <h1>{CourseName} </h1>
        {/* <h1 style={{ color: 'black' }}>attempts are {Attempt}</h1> */}
        <h1>Certificate Quiz</h1>
        <br />
        <hr />
        <br />
        <h2>INSTRUCTIONS</h2>
        {/* <p>{JSON.stringify(signedInUser.email)}</p> */}
        {/* <p>attempts are {attemp}</p> */}
        <br />
        <p> You will be given 20 Questions to Attempt </p> <br />
        <p> 10 questions will have 2 points and 10 questions of 3 points </p>
        <br />
        <p> You will be alloted 20 minutes to solve the Quiz </p>
        <br />
        <p> You need to score 35 points to pass the quiz and obtain certificate </p>
        <br />
        <p>
          {" "}
          <b> You can attempt the quiz only 3 times</b>{" "}
        </p>
        <br />
        {!(attemp > 4) && (
          <button
            onClick={() => {
              setCertificateModal(true);
              increaseAttempts();
            }}
            className='QuizStartButton'
            id='StartQuiz'
            //   disabled={!(Attempt < 4)}
            //   style={attempt < 4 ? { display: 'block' } : { display: 'none' }}
          >
            TAKE QUIZ {"/>"}
          </button>
        )}
        <img src={string} />
      </div>
      <div className='CertificateModal' style={certificateModal ? {} : { visibility: "hidden" }}>
        <img src={codigoIcon} />
        <h2>You cannot leave the quiz in between , your Attempt will be counted. </h2>
        <h2>Make sure you have stable internet connection </h2>
        <button
          onClick={() => {
            // handleAttempts(); //logic tar laav thamb alo 5 mintat
            setCertificateModal(false);
            setI(false);
            setQ(true);
            if (screenfull.isEnabled) {
              screenfull.request();
            }
          }}
          className='QuizStartButton'>
          Start Quiz
        </button>
        <button
          onClick={() => {
            setCertificateModal(false);
            setI(true);
            setQ(false);
          }}
          className='QuizBackButton'>
          Go Back
        </button>
      </div>
    </>
  );
};

const EndGame = ({ CourseName, PlayerScore, TotalScore, Email, TutorName }) => {
  let [certificateModal, setCertificateModal] = useState(false);

  let { signedInUser, setsignedInUser } = useContext(UserContext); // <- ani hi pn

  const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("User"));
  const setUserFromLocalStorage = user => localStorage.setItem("User", JSON.stringify(user));

  const fetchUserFromDb = async () => {
    let data = await axios.get(BackendUrl + `User?email=${Email}`);

    // console.log("from endgame", data.data);
  };

  const determineScoreANdSetCompletedQuiz = async () => {
    // console.log("In score determining...............");
    if (PlayerScore < 35) return; // hm kr try
    // alert("retruned because player score is ", PlayerScore);

    let obj = {
      email: Email,
      tutorName: TutorName,
      courseName: CourseName,
    };

    let data = await axios.patch(BackendUrl + "Courses/feedback", obj);

    // console.log("Data iss.......", data.data[0]);

    if (true) setUserFromLocalStorage(data.data[0]);

    let datatwo = await axios.get(BackendUrl + `User?email=${Email}`);

    // if (true) setUserFromLocalStorage(data.data.user);

    // console.log("Checking", datatwo.data);
  };

  useEffect(() => {
    // if (PlayerScore < 10) {// ha  undefined ahe  dhaat am.da kela ajj sakali hoin atta
    determineScoreANdSetCompletedQuiz();
    // fetchUserFromDb();

    // console.log(PlayerScore);
    // }
  }, []);
  return (
    <>
      <div className='QuizEnd'>
        <h1>{CourseName} </h1>
        <h1>Certificate Quiz | RESULT</h1>
        <hr />
        <h2>
          Your Score : {PlayerScore}/{TotalScore}{" "}
        </h2>
        <h1 id='Congratulations' style={PlayerScore < 35 ? { display: "none" } : {}}>
          Congratulations !!
        </h1>
        <h1 id='Congratulations' style={PlayerScore >= 35 ? { display: "none" } : {}}>
          Practise more and take test again
        </h1>
        <img src={PlayerScore >= 35 ? badge : failbadge} />

        <button onClick={() => setCertificateModal(true)} className='QuizStartButton' id='ViewCertificate' style={PlayerScore < 35 ? { visibility: "hidden" } : {}}>
          VIEW CERTIFICATE
        </button>
      </div>
      <div className='CertificateModal' style={certificateModal ? {} : { visibility: "hidden" }}>
        <img src={codigoIcon} />
        <h2>Download Certificate from Dashboard Courses</h2>
        <button onClick={() => setCertificateModal(false)} className='QuizStartButton'>
          Okay
        </button>
        <button className='QuizStartButton'>
          <Link to='/dashboard'>Take Me to Dashboard </Link>
        </button>
      </div>
    </>
  );
};

export default Quiz;
