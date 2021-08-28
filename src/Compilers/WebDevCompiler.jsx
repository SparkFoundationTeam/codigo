import React, { useState, useContext, useEffect } from 'react';
import '../CoursePages/coursePageTemplate.css';

import BlobP1 from '../resources/pattern1Blob.png';
import BlobP2 from '../resources/pattern2Blob.png';
import RunCode from '../resources/RunCode.png';

const WebDevCompiler = props => {
  let [editorText, setEditorText] = useState(`${props.Button1Text}`);

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
        <div id='Compiler'>
          <b id='codeAlongLabel'>códiGo CODE ALONG </b>
          <p id='outputLabel'>OUTPUT </p>
          <textarea onChange={e => CodeRunnerHtml(e)} value={editorText} id='CodeEditor' placeholder='Write your Code Here'>
            {editorText}
          </textarea>

          <button className='RunCode' onClick={e => CodeRunner()}>
            <img src={RunCode}></img>
            <br />
            <b>Run</b>
          </button>

          <iframe id='output-window'></iframe>
        </div>
        <div className='ButtonSelection'>
          <button
            onClick={e => {
              setEditorText(`${props.Button1Text}`);
            }}
          >
            {props.Button1}
          </button>
          <button
            onClick={() => {
              setEditorText(`${props.Button2Text}`);
            }}
          >
            {props.Button2}
          </button>
          <button>props.Button3</button>
          <button>props.Button4</button>
          <button>props.Button5</button>
          <button>props.Button6</button>
          <button>props.Button7</button>
        </div>
      </div>
    </div>
  );
};

export default WebDevCompiler;
