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
				<div className="saved-container">
					<Link to={meme.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
						<Meme selectedJoke={meme.joke} selectedImage={meme.image}/>
					</Link>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				<h2>Saved Memes</h2>
				{this.displaySavedMemes()}
			</div>
		)
	}
}

export default SavedMemes