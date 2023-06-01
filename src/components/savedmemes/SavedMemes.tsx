import React from 'react'
import './SavedMemes.css'
import { SavedMeme } from '../form/Form';
import Meme from '../meme/Meme';
import { Link } from 'react-router-dom';
import star from '../../assets/star.png'
import openStar from '../../assets/002-star.png'

interface SavedMemesState {
	showFavorites: boolean;
}

interface SavedMemesProps {
	savedMemes: SavedMeme[];
	favoriteMeme: (memeId: string) => void;
}

class SavedMemes extends React.Component<SavedMemesProps, SavedMemesState>{
	constructor(props: SavedMemesProps) {
		super(props)
		this.state = {
			showFavorites: false,
		}
	}

	displaySavedMemes = () => {

		const savedMemes = this.props.savedMemes.map(meme => {
			return (
				<div key={meme.id}>
						<Link to={meme.id} >
							<Meme key={meme.id} selectedJoke={meme.joke} selectedImage={meme.image} />
						</Link>
							<img className='fav-icon' src={meme.favorite ? star : openStar} onClick={() => this.props.favoriteMeme(meme.id)} />
					</div>
			)
		})

		return savedMemes
	}


	render() {
	
		const savedMemes = this.displaySavedMemes()
		return (
			<div>
				<h2>Saved Memes</h2>
				{savedMemes}
			</div>
		)
	}
}

export default SavedMemes