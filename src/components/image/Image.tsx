import React from "react";
import "./Image.css";
import { MemeImage } from "../../meme_image_data";

// types
interface ImageState {
  selectedToggle: boolean;
  selectedImage: string;
};

interface ImageProps {
  id: string;
  path: string;
  alt:string;
  selectImage: (event: React.MouseEvent<HTMLImageElement>) => void;  
};

// component
class Image extends React.Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);
    this.state = {
      selectedToggle: false,
      selectedImage: ""
    };
  }

  render = () => {
    const { id, path, alt } = this.props;
    return (
        <img
          className="button-image"
          id={id}
          src={path}
          alt={alt}
          onClick={event => this.props.selectImage(event)}
        />
      
    );
  };
}

export default Image;