import React from 'react';

const ScrollText = ({ movieData }) => {
  return (
    <div>
      <article>
        {movieData.scroll}
      </article>
      <h3>
        {movieData.title}
        {movieData.date}
      </h3>
    </div>
  )
}

export default ScrollText;