import React from 'react';
import Button from '../Button/Button';
import './Header.css';
import yoda from '../../assets/yoda.png';

const Header = ({ selectCategory }) => {
  return (
    <div>
      <div>
        <h1 className='page-title'>LEGO STAR WARS</h1>
        <img src={ yoda } 
             alt='lego yoda'
             className='header-logo' />
      </div>
      <Button name='favorites'
              selectCategory={ selectCategory }/>
    </div>
  )
}

export default Header;