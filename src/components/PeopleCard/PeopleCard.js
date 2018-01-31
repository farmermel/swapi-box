import React from 'react';
import './PeopleCard.css';

const PeopleCard = ({ data }) => {
  return (
    <div className='card people-card'>
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

export default PeopleCard;