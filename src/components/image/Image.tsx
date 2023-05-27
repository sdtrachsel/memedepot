import React from "react";
import './Image.css'
import { MemeImage } from "../../meme_image_data";

const Image: React.FC<MemeImage> = (image) => {
  const { id, path, alt } = image;
  return (
    <button id={id} className="image-button">
      <img className="button-image" src={path} alt={alt} />
    </button>
  );
};

export default Image;