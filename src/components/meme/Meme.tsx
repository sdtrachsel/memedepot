import React from 'react';
import './Meme.css';

interface MemeProps {
  selectedJoke: string;
  selectedImage: string;
}

const Meme: React.FC<MemeProps> = (props) => {
  const { selectedJoke, selectedImage } = props;

  return (
    <div className="meme">
      <h4 className="meme-joke"> {selectedJoke} </h4>
      <img className="meme-image" src={selectedImage} alt="User-generated meme" />
    </div>
  );
}

export default Meme;