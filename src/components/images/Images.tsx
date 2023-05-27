import React from 'react'
import './Images.css'
import Image from '../image/Image'
import memeImages, { MemeImage } from '../../meme_image_data'


const Images: React.FC = () => {
	const memeButtons: React.ReactNode[] = memeImages.map((image: MemeImage) => <Image key={image.id} id={image.id} path={image.path} alt={image.alt} />)

	return (
		<div className="image-container">
			{memeButtons}
		</div>
	)
}

export default Images;