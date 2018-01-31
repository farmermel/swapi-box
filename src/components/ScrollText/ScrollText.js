import React from 'react';
import './ScrollText.css';

const ScrollText = ({ movieData }) => {
  return (
    <div>
      <article className='scroll-container'>
        <div className='scroll'>
          {movieData.scroll}
        </div>
      </article>
      <h3 className='movie-info'>
        {movieData.title}
        {movieData.date}
      </h3>
    </div>
  )
}

export default ScrollText;