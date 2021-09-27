import React from 'react';
import './whyCodigo.css';

const card = props => {
  return (
    <div className='reasonCard'  >
      <div >
        <img src={props.image}></img>
      </div>
      <div >
        <h2 style={{  fontFamily: 'Poppins'}}>{props.title}</h2>
        <h4 style={{  fontFamily: 'Poppins'}}>{props.line1}</h4>
        <h4 style={{  fontFamily: 'Poppins'}}>{props.line2}</h4>
      </div>
    </div>
  );
};

export default card;
