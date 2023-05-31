import React from 'react'
import './SavedMemes.css'
import { SavedMeme } from '../form/Form';
import Meme  from '../meme/Meme';
import { Link } from 'react-router-dom';

interface SavedMemesState {
	showFavorites: boolean;
}

interface SavedMemesProps {
	savedMemes: SavedMeme[]
}

class SavedMemes extends React.Component<SavedMemesProps, SavedMemesState>{
	constructor(props: SavedMemesProps) {
		super(props)
		this.state = {
			showFavorites: false,
		}
	}

	displaySavedMemes = () => {
		return this.props.savedMemes.map(meme => {
			return (
				<Link to={meme.id}>
					<Meme selectedJoke={meme.joke} selectedImage={meme.image}/>
				</Link>
				
			)
		})
	}

	render() {
		{console.log('Checking', this.props.savedMemes)}
		
		return (
			<div>
				<h2>Saved Memes</h2>
				{this.displaySavedMemes()}
			</div>
		)
	}
}

export default SavedMemes