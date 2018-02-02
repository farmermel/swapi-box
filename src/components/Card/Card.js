import React from 'react';
import '../PeopleCard/PeopleCard.css';


const cleanItem = (item, value) => {
  value = item.map( entry => <p>{entry.name}</p>)
  return value;
}

const Card = ({ data, cardType }) => {
  let displayItems = Object.entries(data).map( item => {
    let value;
    typeof item[1] !== 'string' 
      ? value = cleanItem(item[1], value) 
      : null; 
    return <p><span>{ item[0] }: </span>{ value || item[1] }</p>
  })

  return (
    <div className={`card ${cardType}`}>
      { displayItems }
      <div className='bump-top'></div>
      <div className='bump'></div>
      <div className='bump-bottom'></div>
    </div>
  )
}

export default Card;