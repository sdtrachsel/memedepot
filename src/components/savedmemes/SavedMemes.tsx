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

	createMemesDisplay = (memes: SavedMeme[]): JSX.Element[] => {
		const memesDisplay: JSX.Element[] = memes.map(meme => {
			return (
				<div key={meme.id}>
					<img className='fav-icon' src={meme.favorite ? star : openStar} onClick={() => this.props.favoriteMeme(meme.id)} />
					<Link to={meme.id} >
						<Meme key={meme.id} selectedJoke={meme.joke} selectedImage={meme.image} />
					</Link>
				</div>
			)
		})

		return memesDisplay
	}

	handleViewFavorite = () => {
		this.setState((prevState)=> ({ showFavorites: !prevState.showFavorites}))
	}

	render() {
		const allMemes: JSX.Element[] = this.createMemesDisplay(this.props.savedMemes)
		const favMemes: JSX.Element[] = this.createMemesDisplay(this.props.savedMemes.filter(meme => meme.favorite))

		return (
			<div>
				<button onClick={this.handleViewFavorite}>{this.state.showFavorites? "Show All": "Favorites"}</button>
				{this.state.showFavorites ? favMemes : allMemes}
			</div>
		)
	}
}

export default SavedMemes