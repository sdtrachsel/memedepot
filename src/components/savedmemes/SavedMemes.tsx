import React from 'react'
import './SavedMemes.css'
import { SavedMeme } from '../form/Form';

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

	render() {
		return (
			<div>
				<p>Saved Memes ...... </p>
			</div>
		)
	}
}

export default SavedMemes