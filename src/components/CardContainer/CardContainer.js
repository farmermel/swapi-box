import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import FavoritesCard from '../FavoritesCard/FavoritesCard';
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
      {cards}
    </div>
  )
}

export default CardContainer;