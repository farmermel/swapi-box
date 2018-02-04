import React from 'react';
import PropTypes from 'prop-types';
import '../Card/Card.css';

const Card = ({ data, toggleFav }) => {
  let displayItems = Object.entries(data.info).map( (item, index) => { 
    return <p key={`${index}${item[1]}`}><span>{ item[0] }: </span>{ item[1] }</p>
  })

  return (
    <div className={`card ${data.type}`}>
      <button className='favorites'
              id={data.favorite ? 'favd' : undefined}
              onClick={() => toggleFav(data)}></button>
      { displayItems }
      <div className='bump-top'></div>
      <div className='bump'></div>
      <div className='bump-bottom'></div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    favorite: PropTypes.bool,
    id: PropTypes.number,
    type: PropTypes.string,
    info: PropTypes.objectOf(PropTypes.string)
  }),
  toggleFav: PropTypes.func.isRequired
}

export default Card;