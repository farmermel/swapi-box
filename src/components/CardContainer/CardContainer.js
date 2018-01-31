import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

let cards;
const createCards = data => {
  cards = data.map( card => {
      return <Card data={card} />
    })
  
}

const CardContainer = ({ cardData }) => {
  createCards(cardData)
  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;