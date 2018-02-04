import React from 'react';
import PropTypes from 'prop-types';
import './ScrollText.css';

const ScrollText = ({ movieData }) => {
  return (
    <div>
      <h3 className='movie-info'>
        {movieData.title}
        {movieData.date}
      </h3>
      <article className='scroll-container'>
        <div className='scroll'>
          {movieData.scroll}
        </div>
      </article>
    </div>
  )
};

ScrollText.propTypes = {
  movieData: PropTypes.objectOf(PropTypes.string)
};

export default ScrollText;