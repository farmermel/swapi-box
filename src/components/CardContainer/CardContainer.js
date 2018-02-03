import React from 'react';
import Card from '../Card/Card'
import loading from '../../assets/loading.gif';
import './CardContainer.css';

const createCards = ( data, toggleFav ) => {
  return data.map( (card) => {
    return <Card data={card} 
                 toggleFav={toggleFav}
                 key={card.id} />
  })
}


const CardContainer = ({ cardData, getData, toggleFav }) => {
  return (
    <div className='card-container'>
      {!cardData.length && <img src={loading} 
                                alt='page is loading'
                                className='loading-gif' /> }
      {createCards(cardData, toggleFav)}
    </div>
  )
}

export default CardContainer;