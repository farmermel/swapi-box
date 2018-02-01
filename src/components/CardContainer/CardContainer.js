import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import FavoritesCard from '../FavoritesCard/FavoritesCard';
import './CardContainer.css';

let cards;
const createPeopleCards = data => {
  cards = data.map( card => {
      return <PeopleCard data={card} />
    })
}

const createPlanetCards = data => {
  cards = data.map( card => {
      return <PlanetCard data={card} />
    })
}

const createVehicleCards = data => {
  cards = data.map( card => {
      return <VehicleCard data={card} />
    })
}

const createFavoritesCards = data => {
  cards = data.map( card => {
      return <FavoritesCard data={card} />
    })
}

const CardContainer = ({ cardData, getData, cardType }) => {
  cardType === 'PeopleCard' && createPeopleCards(cardData);
  cardType === 'PlanetCard' && createPlanetCards(cardData);
  cardType === 'VehicleCard' && createVehicleCards(cardData);
  cardType === 'FavoritesCard' && createFavoritesCards(cardData);

  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;