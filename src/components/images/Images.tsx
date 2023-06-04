import React from 'react'
import './Images.css'
import Form from '../form/Form'
import Image from '../image/Image'
import memeImages from '../../meme_image_data'
import { SavedMeme, MemeImage } from '../../types'

interface ImagesState {
	selectedToggle: boolean;
	selectedImage: string;
};

interface ImagesProps {
	saveNewMeme: (newMeme: SavedMeme) => void;
}

class Images extends React.Component<ImagesProps, ImagesState>{
	constructor(props: ImagesProps) {
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

	renderInstructions = (): JSX.Element | null => {
		const { selectedImage } = this.state;
		if (!selectedImage) {
			return <p className="instructions">Click on a picture to get started:</p>;
		}
		return null;
	}

	renderImages = (): JSX.Element[] => {
		const memeButtons = memeImages.map((image: MemeImage) => (
			<Image key={image.id} id={image.id} path={image.path} alt={image.alt} selectImage={this.selectImage} />
		));
		return memeButtons;
	}

	renderFormOrImages = (): JSX.Element | JSX.Element[] => {
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

	render(): JSX.Element {
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