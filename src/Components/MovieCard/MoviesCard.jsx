import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from "bootstrap"
import "./MoviesCard.css"
const MoviesCard = ({ obj }) => {
  const {id, vote_average, title, release_date, poster_path } = obj
  return (
    <Link className='card' to={`/Popular/${id}`}>
      {/* <div className='card'> */}
      <span className='card__rating'>{vote_average}</span>
      <img className='card__img' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h3 className='card__title'>{title}</h3>
      <p className='card__year'>{release_date}</p>
    {/* </div> */}
    </Link>
  );
}

export default MoviesCard;