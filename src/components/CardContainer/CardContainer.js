import React from 'react';
import Card from '../Card/Card';
import loading from '../../assets/loading.gif';
import PropTypes from 'prop-types';
import './CardContainer.css';

const createCards = ( data, toggleFav ) => {
  return data.map( (card) => {
    return <Card data={card} 
      toggleFav={toggleFav}
      key={card.id} />;
  });
};

const CardContainer = ({ cardData, toggleFav }) => {
  return (
    <div className='card-container'>
      {!cardData.length && <img src={loading} 
        alt='page is loading'
        className='loading-gif' /> }
      {createCards(cardData, toggleFav)}
    </div>
  );
};

CardContainer.propTypes = {
  cardData: PropTypes.arrayOf( PropTypes.shape({
    favorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    info: PropTypes.objectOf(PropTypes.string).isRequired
  })),
  toggleFav: PropTypes.func.isRequired
};

export default CardContainer;