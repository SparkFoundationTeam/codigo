import React from 'react';

import './whyCodigo.css';

const card = props => {
  return (
    <div className='reasonCard'>
      <div>
        <img src={props.image}></img>
      </div>
      <div>
        <h2>{props.title}</h2>
        <h4>{props.line1}</h4>
        <h4>{props.line2}</h4>
      </div>
    </div>
  );
};

export default card;
