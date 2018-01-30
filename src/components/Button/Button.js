import React from 'react';

const Button = ({ name, selectCategory }) => {
  return (
    <button onClick={() => selectCategory(name)}>{name}</button>
  )
}

export default Button;