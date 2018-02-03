import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to={ {pathname: '/people'} }>
          <button className='people'>
          </button>
        </NavLink>
        <NavLink to={ {pathname: '/planets'} }
              onClick={ getPlanets }>
          <button className='planets'>
          </button>
        </NavLink>
        <NavLink to={ {pathname: '/vehicles'} }
              onClick={ getVehicles }>
          <button className='vehicles'>
          </button>
          </NavLink>
        <NavLink to={ {pathname: '/favorites'} }>
          <button className='favorites'>
          </button>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header;