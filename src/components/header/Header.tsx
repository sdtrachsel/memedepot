import React from "react";
import './Header.css'
import logo from '../../assets/meme_depot_logo.png'
import { Link, NavLink } from 'react-router-dom'


// types 
interface HeaderProps {
  savedMemes: Array<Object>;
}

interface HeaderState {
  savedMemes: Array<Object>;
}

// component 
class Header extends React.Component<HeaderProps, HeaderState>{
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      savedMemes: this.props.savedMemes,
    }
  }

// lifecycle methods 
  componentDidUpdate(prevProps: HeaderProps) {
    if (prevProps.savedMemes !== this.props.savedMemes) {
      this.setState({ savedMemes: this.props.savedMemes });
    }
  }

//component render 
  render(): React.ReactNode {
    return  (
      <header>
      <Link to="/">
        <img src={logo} alt="Meme Depot Logo" className="logo" />
      </Link>
      <nav>
        <NavLink exact to="/" id="button"> Home </NavLink>
        { this.state.savedMemes.length > 0 &&
          <NavLink exact to="/savedmemes" id="button"> Saved Memes </NavLink>
        }
      </nav>
    </header>
    )
  }
}

export default Header;