import React from "react";
import "./Image.css";
import { MemeImage } from "../../meme_image_data";

// types
type ImageState = {
  selectedToggle: boolean;
  selectedImage: string;
};

type ImageProps = {
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

  // selectImage = (event: React.MouseEvent<HTMLElement>) => {
      
  //     const imageElement = event.target as HTMLImageElement;
  //     const currentSrc = imageElement.currentSrc;
  //     this.setState({ selectedImage: currentSrc });
    
  //   // const imageElement = event.currentTarget as HTMLImageElement;
  //   // const imageSRC = imageElement.src;
  //   // this.setState({ selectedImage: imageSRC, selectedToggle: true });
  // };

  // component render
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