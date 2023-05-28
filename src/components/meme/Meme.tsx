import React from 'react';
import './Meme.css';

type SavedMeme = {
	id: number;
  image: string;
  joke: string;
}

type MemeProps = {
  savedMeme?: SavedMeme;
}

const Meme: React.FC<MemeProps> = ({ savedMeme }: MemeProps) => {
  if (!savedMeme) {
    return <div>No meme saved.</div>
  }

  return (
    <div className="meme-placeholder">
      <h4 className="joke"> joke will go here</h4>
      <div className="image-placeholder">
        <img src={savedMeme.image} alt="Meme" />
      </div>
    </div>
  );
}

export default Meme;