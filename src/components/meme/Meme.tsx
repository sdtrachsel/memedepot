import React from 'react';
import './Meme.css';
import Star from '../../assets/002-star.png'

// types
interface MemeProps {
  selectedJoke: string;
  selectedImage: string;
}

// component 
const Meme: React.FC<MemeProps> = (props) => {
  const { selectedJoke, selectedImage } = props;

  return (
    <div className="meme-placeholder">
      <img src={Star} className="star" alt="star to favorite meme or unfavorite"/>
      <h4 className="meme-joke"> {selectedJoke} </h4>
      <img className="meme-image" src={selectedImage} alt="User-generated meme" />
    </div>
  );
}

export default Meme;