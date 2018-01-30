import React from 'react';
import Card from '../Card/Card';

let cards;
const createCards = data => {
  cards = data.map( card => {
      return <Card data={card} />
    })
  
}

const CardContainer = ({ cardData }) => {
  createCards(cardData)
//   cardData.results
//     ? createCards(cardData)
//     : <div></div>
  return (
    <div>
      {cards}
    </div>
  )
}

export default CardContainer;