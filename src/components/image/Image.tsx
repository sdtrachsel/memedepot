import React from "react";
import "./Image.css";
import { MemeImage } from "../../meme_image_data";

// types
type ImageState = {
  selectedToggle: boolean;
  selectedImage: string;
};

type ImageProps = {
  image: MemeImage;
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

  selectImage = (event: React.MouseEvent<HTMLElement>) => {
    const imageElement = event.currentTarget as HTMLImageElement;
    const imageSRC = imageElement.src;
    this.setState({ selectedImage: imageSRC, selectedToggle: true });
  };

  // component render
  render = () => {
    const { id, path, alt } = this.props.image;
    return (
      <button className="image-button">
        <img
          className="button-image"
          id={id}
          src={path}
          alt={alt}
          onClick={event => this.selectImage(event)}
        />
      </button>
    );
  };
}

export default Image;