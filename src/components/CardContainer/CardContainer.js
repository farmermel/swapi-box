import React from 'react';
import Card from '../Card/Card'
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import FavoritesCard from '../FavoritesCard/FavoritesCard';
import loading from '../../assets/loading.gif';
import './CardContainer.css';

const createCards = ( data, cardType ) => {
  console.log(data)
  return data.map( (card, index) => {
    return <Card data={card} 
                 cardType={cardType}
                 key={`${card.name}${index}`} />
  })
}


const CardContainer = ({ cardData, getData, cardType }) => {
  return (
    <div className='card-container'>
      {!cardData.length && <img src={loading} 
                                alt='page is loading'
                                className='loading-gif' /> }
      {createCards(cardData, cardType)}
    </div>
  )
}

export default CardContainer;