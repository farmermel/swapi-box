import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';
import lego from '../../assets/lego.svg';
import yoda from '../../assets/yoda.png';

const Header = ({ getPlanets, getVehicles }) => {
  return (
    <div className='header'>
    <img src={ lego }
             alt='lego brand'
             className='header-logo logo' />
      <div className='page-header'>
        
        <h1 className='page-title'>STAR WARS</h1>
        <img src={ yoda } 
             alt='lego yoda'
             className='header-logo' />
      </div>
      <nav>
        <Link to={ {pathname: '/people'} }
              activeClassName='active'>
          <button className='people'>
          </button>
        </Link>
        <Link to={ {pathname: '/planets'} }
              onClick={ getPlanets }>
          <button className='planets'>
          </button>
        </Link>
        <Link to={ {pathname: '/vehicles'} }
              onClick={ getVehicles }>
          <button className='vehicles'>
          </button>
          </Link>
        <Link to={ {pathname: '/favorites'} }>
          <button className='favorites'>
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default Header;