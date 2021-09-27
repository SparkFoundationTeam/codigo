import React, { useState, useContext, useEffect } from 'react';
import '../CoursePages/coursePageTemplate.css';

import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';
import RunCode from '../resources/RunCode.png';

const WebDevCompiler = props => {
  let [editorText, setEditorText] = useState(`${props.Button1Text}`);
  let [index, setIndex] = useState(1);

//   let [clickedStyles, setClickStyle] = useState({
//     backgroundColor: 'rgb(13, 0, 85)',
//     color: 'white',
//   });

  useEffect(() => {}, []);

  const CodeRunnerHtml = e => {
    setEditorText(e.target.value);
    let frame = document.getElementById('output-window').contentWindow.document;
    frame.open();
    if (props.Language == 'html') {
      frame.write(editorText);
    }
    if (props.Language == 'css') {
      frame.write('<style>' + editorText + '</style>');
    }
    frame.close();
  };

  const CodeRunner = () => {
    let frame = document.getElementById('output-window').contentWindow.document;
    frame.open();
    if (props.Language == 'html') {
      frame.write(editorText);
    }
    if (props.Language == 'js') {
      frame.write('<script>' + editorText + '</script>');
    }
    if (props.Language == 'css') {
      frame.write('<style>' + editorText + '</style>');
    }
    frame.close();
  };
  return (
    <div className='CodeAlong' id='CodeAlong'>
      <img src={BlobP1} id='bp1' />
      <img src={BlobP2} id='bp2' />
      <div className='CodeContainer'>
        <div
          id='Compiler'
          onLoad={() => {
            CodeRunner();
          }}
        >
          <b id='codeAlongLabel'>códiGo CODE ALONG </b>

          <textarea onChange={e => CodeRunnerHtml(e)} value={editorText} id='CodeEditor' placeholder='Write your Code Here'>
            {editorText}
          </textarea>

          <button className='RunCode' onClick={e => CodeRunner()}>
            <img src={RunCode}></img>
            <br />
            <b>Run</b>
          </button>
          <p id='outputLabel'>OUTPUT </p>

          <iframe id='output-window'></iframe>
        </div>
        <div className='button-container'>
          <button
            className='button-leftmost'
            onClick={e => {
              setEditorText(`${props.Button1Text}`);
              setIndex(1);
            }}
            onMouseOver={() => {
              if (props.Language != 'js') CodeRunner();
            }}
            // style={index === 1 ? clickedStyles : {}}
          >
            <b> {props.Button1} </b>
          </button>
          <button
            className='button-middle'
            onClick={() => {
              setEditorText(`${props.Button2Text}`);
              setIndex(2);
            }}
            onMouseOver={() => {
              if (props.Language != 'js') CodeRunner();
            }}
            // style={index === 2 ? clickedStyles : {}}
          >
            <b> {props.Button2} </b>
          </button>
          <button
            className='button-middle'
            onClick={() => {
              setEditorText(`${props.Button3Text}`);
              setIndex(3);
            }}
            onMouseOver={() => {
              if (props.Language != 'js') CodeRunner();
            }}
            // style={index === 3 ? clickedStyles : {}}
          >
            <b> {props.Button3} </b>
          </button>
          <button
            className='button-middle'
            onClick={() => {
              setEditorText(`${props.Button4Text}`);
              setIndex(4);
            }}
            onMouseOver={() => {
              if (props.Language != 'js') CodeRunner();
            }}
            // style={index === 4 ? clickedStyles : {}}
          >
            <b> {props.Button4} </b>
          </button>
          <button
            className='button-middle'
            onClick={() => {
              setEditorText(`${props.Button5Text}`);
              setIndex(5);
            }}
            onMouseOver={() => {
              if (props.Language != 'js') CodeRunner();
            }}
            // style={index === 5 ? clickedStyles : {}}
          >
            <b> {props.Button5} </b>
          </button>
          <button
            
            onClick={() => {
              setEditorText(`${props.Button6Text}`);
              setIndex(6);
            }}
            onMouseOver={() => {
              if (props.Language != 'js') CodeRunner();
            }}className='button-rightmost'
            // style={index === 6 ? clickedStyles : {}}
          >
            <b> {props.Button6} </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevCompiler;
