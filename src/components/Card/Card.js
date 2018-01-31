import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h3>Name: { data.name }</h3>
      <p>Species: { data.species }</p>
      <p>Homeworld: { data.homeworld }</p>
      <p>Homeworld Population: { data.homeworldPop }</p>
      <div className='bump-top'></div>
      <div className='bump'></div>
      <div className='bump-bottom'></div>
    </div>
  )
}

export default Card;