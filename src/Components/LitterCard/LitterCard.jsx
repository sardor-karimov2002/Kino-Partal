import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./LitterCard.css"
const LitterCard = ({ path,id, title, img }) => {
  return (
    <NavLink className='link' to={`/${path}/${id}`}>
      <div className='litter-card'>
        <img className='rasm' src={process.env.REACT_APP_MOVIE_IMG_URL + img} alt={title} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default LitterCard;
