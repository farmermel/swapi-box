import React from 'react';
import './FavoritesCard.css';

const FavoritesCard = ({ data }) => {
  return (
    <div className='card favorites-card'>
      FAVORITE
      <div className='bump-top'></div>
      <div className='bump'></div>
      <div className='bump-bottom'></div>
    </div>
  )
}

export default FavoritesCard;