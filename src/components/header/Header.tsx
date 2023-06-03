import React from "react";
import './Header.css'
import logo from '../../assets/meme_depot_logo.png'
import { Link, NavLink } from 'react-router-dom'
import { SavedMeme } from '../../types'

const Header = ({ savedMemes }: { savedMemes: SavedMeme[] }): JSX.Element => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Meme Depot Logo" className="logo" />
      </Link>
      <nav>
        <NavLink exact to="/" className="header-button"> Home </NavLink>
        {savedMemes.length > 0 &&
          <NavLink exact to="/savedmemes" className="header-button"> Saved Memes </NavLink>
        }
      </nav>
    </header>
  )
}

export default Header;