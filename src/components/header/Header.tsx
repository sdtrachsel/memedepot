import React from "react";
import './Header.css'
import logo from '../../assets/meme_depot_logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Meme Depot Logo" className="logo" />
      </Link>
      <nav>
        {/* <NavLink exact to="/" className={isActive => "nav-link" + (!isActive? ' unselected': "")} > Home </NavLink> */}
        <NavLink exact to="/" className="button" > Home </NavLink>
        {/* <NavLink exact to="/savedmemes" className={isActive => "nav-link" + (!isActive? ' unselected': "")}> Saved Memes </NavLink> */}
        <NavLink exact to="/savedmemes" className="button"> Saved Memes </NavLink>
      </nav>
    </header>
  )
}

export default Header;