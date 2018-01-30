import React from 'react';
import Button from '../Button/Button';

const Header = ({ selectCategory }) => {
  return (
    <div>
      <h1>Star Wars Facts</h1>
      <Button name='favorites'
              selectCategory={ selectCategory }/>
    </div>
  )
}

export default Header;