import React from 'react';

const Card = ({ data }) => {
  return (
    <div>
      <h3>{ data.name }</h3>
      <p>{ data.species }</p>
      <p>{ data.homeworld }</p>
    </div>
  )
}

export default Card;