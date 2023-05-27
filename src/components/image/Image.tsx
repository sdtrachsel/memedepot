import React from "react";
import './Image.css'

type Props = {
  id: string;
  path: string;
  alt: string;
}

const Image: React.FC<Props> = ({ id, path, alt }) => {
  return (
    <button id={id} className="image-button">
      <img className="button-image" src={path} alt={alt} />
    </button>
  );
};

export default Image;