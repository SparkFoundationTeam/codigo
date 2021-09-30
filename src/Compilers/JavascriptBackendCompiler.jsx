import React, { useState } from "react";

import "../CoursePages/coursePageTemplate.css";
import "./button.css";

import BlobP1 from "../resources/pattern1Blob.png";
import BlobP2 from "../resources/pattern2Blob.png";
import RunCode from "../resources/RunCode.png";

import { LeftMost, Middle, RightMost } from "./DefaultStyles";
import { BackendCompilerUrl } from "../BackendUrl";

import axios from "axios";

const JavascriptBackendCompiler = ({ Button1, Button1Text, Button2, Button2Text, Button3, Button3Text }) => {
  let [userCode, setuserCode] = useState(`${Button1Text}`);
  let [output, setOutput] = useState("");

  let [index, setIndex] = useState(1);

  let [Color, setColor] = useState("black");
  let [Size, setSize] = useState("1.5rem");

  let [clickedLeftMost, setClickedLeftmost] = useState(LeftMost);
  let [clickedMiddle, setClickedMiddle] = useState(Middle);
  let [clickedRightMost, setClickedRightMost] = useState(RightMost);

  const run = async () => {
    let obj = {
      language: "JAVASCRIPT",
      code: userCode,
    };

    let data = await axios.post(BackendCompilerUrl, obj);

    let { stdout, err } = data.data;

    if (err != null) {
      setOutput(err);
      setColor("red");
      setSize("1rem");
      return;
    }
    setColor("black");
    setSize("1.5rem");
    setOutput(stdout);
  };

  return (
    <div className='CodeAlong' id='CodeAlong'>
      <img src={BlobP1} id='bp1' />
      <img src={BlobP2} id='bp2' />

      <div className='CodeContainer'>
        <div id='Compiler' onLoad={run}>
          <b id='codeAlongLabel'>códiGo CODE ALONG </b>

          <textarea onChange={e => setuserCode(e.target.value)} value={userCode} id='CodeEditor' placeholder='Write your Code Here' style={{ padding: "1vh" }}>
            {userCode}
          </textarea>

          <button className='RunCode' onClick={run}>
            <img src={RunCode}></img>
            <br />
            <b>Run</b>
          </button>

          <p id='outputLabel'>OUTPUT</p>
          <textarea id='output-window' value={output} style={{ color: Color, fontWeight: "900" }}>
            {JSON.stringify(output)}
          </textarea>
        </div>

        {/* <div style={{ background: "orange", textAlign: "center", position: "relative" }}> */}
        <div className='button-container'>
          <button
            className='button-leftmost'
            onClick={e => {
              setuserCode("console.log('Hello world')");
              setIndex(1);
            }}
            // style={index == 1 ? { background: "white", borderTopColor: "grey", borderLeftColor: "grey" } : {}}
          >
            <b> {Button1} </b>
          </button>
          <button
            className='button-middle'
            onClick={() => {
              setuserCode("const add = (a, b) => a + b");
              setIndex(2);
            }}
            // style={index == 2 ? { background: "white", border: "transparent", zIndex: "-9" } : {}}>
          >
            <b> {Button2} </b>
          </button>
          <button
            onClick={() => {
              setuserCode("class Person {  } ");
              setIndex(3);
            }} //baray
            className='button-rightmost'
            style={index == 3 ? clickedRightMost : {}}>
            <b> {Button3} </b>
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default JavascriptBackendCompiler;
