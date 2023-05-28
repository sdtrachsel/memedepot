import React from 'react';
import './Meme.css';

// types
type MemeProps = {
  selectedJoke: string;
  selectedImage: string;
}

// component 
const Meme: React.FC<MemeProps> = (MemeProps) => {
  console.log(MemeProps.selectedJoke)
  return (
    <div className="meme-placeholder">
      <h4 className="joke"> {MemeProps.selectedJoke} </h4>
      <div className="image-placeholder">
      {/* <img src={SELECTED IMAGE PATH GOES HERE} alt="User-generated meme" /> */}
      </div>
    </div>
  );
}

export default Meme;