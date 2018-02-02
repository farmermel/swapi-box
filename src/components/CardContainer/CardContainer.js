import React from 'react';
import Card from '../Card/Card'
// import PeopleCard from '../PeopleCard/PeopleCard';
// import PlanetCard from '../PlanetCard/PlanetCard';
// import VehicleCard from '../VehicleCard/VehicleCard';
// import FavoritesCard from '../FavoritesCard/FavoritesCard';
import loading from '../../assets/loading.gif';
import './CardContainer.css';

const createCards = ( data, cardType, toggleFav ) => {
  return data.map( (card) => {
    return <Card data={card} 
                 cardType={cardType}
                 toggleFav={toggleFav}
                 key={card.id} />
  })
}


const CardContainer = ({ cardData, getData, cardType, toggleFav }) => {
  return (
    <div className='card-container'>
      {!cardData.length && <img src={loading} 
                                alt='page is loading'
                                className='loading-gif' /> }
      {createCards(cardData, cardType, toggleFav)}
    </div>
  )
}

export default CardContainer;