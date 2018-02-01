import React from 'react';
import './PlanetCard.css';

let residents;
const residentDisplay = (people) => {
  residents = people.map( person => {
    return  <p>{person.name}</p>
  })
}

const PlanetCard = ({ data }) => {
  residentDisplay(data.residents)
  return (
    <div className='card planet-card'>
      <button className='favorites'></button>
      <h1>{data.name}</h1>
      <p>{data.terrain}</p>
      <p>{data.population}</p>
      <p>{data.climate}</p>
      <p>{residents}</p>
      <div className='bump-top'></div>
      <div className='bump'></div>
      <div className='bump-bottom'></div>
    </div>
  )
}

export default PlanetCard;