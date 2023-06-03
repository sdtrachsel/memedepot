import React from 'react'
import Form from '../form/Form'
import './Images.css'
import Image from '../image/Image'
import memeImages, { MemeImage } from '../../meme_image_data'
import { SavedMeme } from '../form/Form'

interface ImagesState {
	selectedToggle: boolean;
	selectedImage: string;
};

interface ImageProps {
	saveNewMeme: (newMeme: SavedMeme) => void;
}

class Images extends React.Component<ImageProps, ImagesState>{
	constructor(props: ImageProps) {
		super(props)
		this.state = {
			selectedToggle: false,
			selectedImage: ''
		}
	}

	selectImage = (event: React.MouseEvent<HTMLImageElement>) => {
		const imageElement = event.target as HTMLImageElement;
		const currentSrc = imageElement.currentSrc;
		this.setState({ selectedImage: currentSrc, selectedToggle: true });
	};

	closeForm = () => {
		this.setState({ selectedToggle: false, selectedImage: '' })
	}

	renderInstructions = () => {
		const { selectedImage } = this.state;
		if (!selectedImage) {
			return <p className="instructions">Click on a picture to get started:</p>;
		}
		return null;
	}

	renderImages = () => {
		const memeButtons = memeImages.map((image: MemeImage) => (
			<Image key={image.id} id={image.id} path={image.path} alt={image.alt} selectImage={this.selectImage} />
		));
		return memeButtons;
	}

	renderFormOrImages = () => {
		const { selectedToggle, selectedImage } = this.state;
		if (selectedToggle) {
			return (
				<Form 
					selectedImage={selectedImage} 
					saveNewMeme={this.props.saveNewMeme}
					closeForm={this.closeForm}
				/>
			);
		} else {
			return this.renderImages();
		}
	}

	render(): React.ReactNode {
		return (
			<div>
				{this.renderInstructions()}
				<div className="image-container">
					{this.renderFormOrImages()}
				</div>
			</div>
		)
	}
}

export default Images;