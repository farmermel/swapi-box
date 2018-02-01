import React from 'react';
import './VehicleCard.css';

const VehicleCard = ({ data }) => {
  return (
    <div className='card vehicle-card'>
      <button className='favorites'></button>
      <h2>{data.name}</h2>
      <p>{data.model}</p>
      <p>{data.class}</p>
      <p>{data.passengers}</p>
      <div className='bump-top'></div>
      <div className='bump'></div>
      <div className='bump-bottom'></div>
    </div>
  )
}

export default VehicleCard;