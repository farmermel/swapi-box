import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import lego from '../../assets/lego.svg';
import yoda from '../../assets/yoda.png';
import './Header.css';

const Header = ({ getPlanets, getVehicles, translate, translated }) => {
  const buttonDisplay = translated 
    ? 'Aoawhraaowo English' 
    : 'Translate to Shyriiwook';

  return (
    <div className='header'>
      <button className='wookiee'
        onClick={() => translate()}>{ buttonDisplay }</button>
      <img src={ lego }
        alt='lego brand'
        className='header-logo'
        id='logo' />
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
  );
};

Header.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  getVehicles: PropTypes.func.isRequired,
  translate: PropTypes.func,
  translated: PropTypes.bool
};

export default Header;