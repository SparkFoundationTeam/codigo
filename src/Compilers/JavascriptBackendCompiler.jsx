import React, { useState, useEffect } from "react";

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

  let [globalObject, setglobalObject] = useState({ n: userCode });

  const run = async () => {
    let obj = {
      language: "JAVASCRIPT",
      //   sayMyName: () => userCode,
    };

    var iframe = document.getElementById("output-windo"),
      iframeWin = iframe.contentWindow || iframe,
      iframeDoc = iframe.contentDocument || iframeWin.document;

    iframe.src = "";

    // let allArr = userCode.replaceAll("console.log", "document.writeln");
    // iframeDoc.open();/

    // console.log("allArr is:", allArr);

    // document.DOCUMENT_POSITION_DISCONNECTED

    // let variables = allArr.filter(eachObj => !eachObj.includes("document.write"));
    // let writing = allArr.filter(eachObj => eachObj.includes("document.write"));
    // console.log("arr is:", allArr);

    // variables.forEach(obj => iframeDoc.write(`<script>${obj}</script>`));
    // writing.forEach(obj => iframeDoc.write(`<script>${obj}</script>`));
    iframeDoc.write(`<script> console.clear()</script>`);
    // iframeDoc.src(`<script>${userCode}</script>`);
    iframeDoc.write(`<script>${userCode}</script>`);
    // iframeDoc.close();

    // let data = await axios.post(BackendCompilerUrl, obj);
    let data = { data: { stdout: "example", err: false } };

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
          <iframe id='output-windo' style={{ color: Color, fontWeight: "900", fontSize: 32 }}>
            {/* {JSON.stringify(output)} */}
            {`<script>console.log("Baray")</script>`}
          </iframe>
          {/* <pre id='output-window'></pre> */}
          {/* <p id='myLog'></p> */}
          {/* <div>Baray</div> */}
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
