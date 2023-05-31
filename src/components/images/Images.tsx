import React from 'react'
import Form from '../form/Form'
import './Images.css'
import Image from '../image/Image'
import memeImages, { MemeImage } from '../../meme_image_data'
import { SavedMeme } from '../form/Form'
import { Link } from 'react-router-dom'

interface ImagesState  {
	selectedToggle: boolean;
	selectedImage: string;
};

interface ImageProps {
	saveNewMeme:(newMeme: SavedMeme) => void;
}

class Images extends React.Component<ImageProps, ImagesState>{
	constructor(props:ImageProps) {
		super(props)
		this.state = {
			selectedToggle: false,
			selectedImage: ''
		}
	}

	selectImage = (event: React.MouseEvent<HTMLImageElement>) => {
		const imageElement = event.target as HTMLImageElement;
		const currentSrc = imageElement.currentSrc;
		this.setState({ 
			selectedImage: currentSrc,
			selectedToggle: true
		});
};

	closeForm =() => {
		this.setState({selectedToggle: false, selectedImage: ''})
	}

	render(): React.ReactNode {
		console.log(this.state.selectedImage)
		const memeButtons: React.ReactNode[] = memeImages.map((image: MemeImage) => (
			<Image key={image.id} id={image.id} path={image.path} alt={image.alt} selectImage={this.selectImage} />
		))

		return (
			<div>
				{ !this.state.selectedImage &&
				<p className="instructions">Click on a picture to get started:</p>
				}
					<div className="image-container">
						{this.state.selectedToggle? <Form 
							selectedImage={this.state.selectedImage} 
							saveNewMeme={this.props.saveNewMeme}
							closeForm={this.closeForm}
						/> 
						: memeButtons}
					</div>
			</div>
		)
	}
}

export default Images;