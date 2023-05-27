import React from "react";
import './Header.css'
import logo from '../../assets/meme_depot_logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Meme Depot Logo" className="logo" />
      <nav>
        <NavLink exact to="/" className={isActive => "nav-link" + (!isActive? ' unselected': "")} > Home </NavLink>
        <NavLink exact to="/savedmemes" className={isActive => "nav-link" + (!isActive? " unselected": "")}> Saved Memes </NavLink>
      </nav>
    </header>
  )
}

export default Header;