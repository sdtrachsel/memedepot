import React from 'react'
import './Images.css'
import Image from '../image/Image'
import Form from '../form/Form';
import memeImages, { MemeImage } from '../../meme_image_data'

// types
type ImagesState = {
	selectedImage: string;
	selectedToggle: boolean;
}

// component
class Images extends React.Component<{},ImagesState> {
	constructor(props: {})	{
	super(props)
	this.state = {
		selectedImage: "",
		selectedToggle: false
		}
	}

	// methods
	selectImage = (event: React.MouseEvent<HTMLImageElement>) =>	{
		this.setState({ selectedImage: event.currentTarget.src  })
	}

	// component render
	render = ()	=>	{
		const memeButtons: React.ReactNode[] = memeImages.map((image: MemeImage) => (
			<Image
				key={image.id}
				id={image.id}
				path={image.path}
				alt={image.alt}
				// onClick={(event: React.MouseEvent<HTMLImageElement>):void => this.selectImage(event)}
			/>
		));

		return (
			<div className="image-container">
				<Form selectedImage={this.state.selectedImage}/>
				{memeButtons}
			</div>
		)
	}
}


export default Images;

