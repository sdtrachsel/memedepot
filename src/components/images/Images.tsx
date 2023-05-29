import React from 'react'
import Form from '../form/Form'
import './Images.css'
import Image from '../image/Image'
import memeImages, { MemeImage } from '../../meme_image_data'

type ImagesState = {
	selectedToggle: boolean;
	selectedImage: string;
};

class Images extends React.Component<{}, ImagesState>{
	constructor(props: {}) {
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

	render(): React.ReactNode {
		const memeButtons: React.ReactNode[] = memeImages.map((image: MemeImage) => <Image key={image.id} id={image.id} path={image.path} alt={image.alt} selectImage={this.selectImage} />)

		return (
			<div className="image-container">
				{this.state.selectedImage? <Form selectedImage={this.state.selectedImage}/> : memeButtons}			
			</div>
		)
	}
}


export default Images;

// const Images: React.FC = () => {
// 	const memeButtons: React.ReactNode[] = memeImages.map((image: MemeImage) => <Image key={image.id} id={image.id} path={image.path} alt={image.alt} />)

// 	return (
// 		<div className="image-container">
// 			{memeButtons}
// 		</div>
// 	)
// }

