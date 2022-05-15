import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import "./Nav.css"
const Nav = () => {
  return (
    <div className='menu'>
      <Link to="/" className="logo">
        <img className="menu__logo" src="https://iconape.com/wp-content/files/ce/246502/svg/246502.svg" alt="" />
      </Link>
      <ul className='menu__list'>
        <li className='menu__item'>
          <NavLink  className="menu__link" to="/">Home</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink className="menu__link" to="/Popular">Popular</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink className="menu__link" to="/up-coming">Up Coming</NavLink>
        </li>
      </ul>
      <input className='menu__search' type="search" placeholder='search..' />
    </div>
  );
}

export default Nav;
