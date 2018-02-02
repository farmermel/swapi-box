import React from 'react';
import './PeopleCard.css';

const PeopleCard = ({ data }) => {
  console.log(Object.entries(data))
  return (
    <div className='card people-card'>
      <button className='favorites'></button>
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