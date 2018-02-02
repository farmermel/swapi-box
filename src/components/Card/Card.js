import React from 'react';
import '../Card/Card.css';


const cleanItem = (item, value) => {
  value = item.map( entry => <li id='res-list'>{entry.name}</li>)
  return value;
}

const Card = ({ data, cardType, toggleFav }) => {
  let displayItems = Object.entries(data.info).map( item => {
    let value;
    typeof item[1] === 'object' 
      ? value = cleanItem(item[1], value) 
      : null; 
    return <p><span>{ item[0] }: </span>{ value || item[1] }</p>
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

export default Card;