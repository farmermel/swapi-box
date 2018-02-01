import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import FavoritesCard from '../FavoritesCard/FavoritesCard';
import loading from '../../assets/loading.gif';
import './CardContainer.css';

let cards;

const cardTypes = {
  PeopleCard: PeopleCard,
  PlanetCard: PlanetCard,
  VehicleCard: VehicleCard,
  FavoritesCard: FavoritesCard
}

const createCards = (data, cardType) => {
  let Type = cardTypes[cardType];
  cards = data.map( card => {
    return <Type data={card} />
  })
} 

const CardContainer = ({ cardData, getData, cardType }) => {
  createCards(cardData, cardType)
  return (
    <div className='card-container'>
      {!cardData.length && <img src={loading} 
                                alt='page is loading'
                                className='loading-gif' /> }
      {cards}
    </div>
  )
}

export default CardContainer;