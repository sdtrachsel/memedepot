import React from 'react'
import './SavedMemes.css'
import starOutline from '../../assets/favorite-outline.png'
import starFilled from '../../assets/favorite-filled.png'
import Meme from '../meme/Meme';
import { Link } from 'react-router-dom';
import { SavedMeme } from '../../types'

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
		return memes.map(meme => (
			<div className="saved-meme" key={meme.id}>
				<img
					className='fav-icon'
					src={meme.favorite ? starFilled : starOutline}
					onClick={() => this.props.favoriteMeme(meme.id)}
				/>
				<Link to={meme.id} >
					<Meme key={meme.id} selectedJoke={meme.joke} selectedImage={meme.image} />
				</Link>
			</div>
		))
	}

	handleViewFavorite = () => {
		this.setState((prevState) => ({ showFavorites: !prevState.showFavorites }))
	}

	renderAllMemes = (): JSX.Element[] => {
		const { savedMemes } = this.props;
		return this.createMemesDisplay(savedMemes);
	}

	renderFavoriteMemes = (): JSX.Element[] => {
		const { savedMemes } = this.props;
		return this.createMemesDisplay(savedMemes.filter(meme => meme.favorite));
	}

	render(): JSX.Element {
		const { showFavorites } = this.state;
		const buttonLabel = showFavorites ? "Show All" : "View Favorites";

		return (
			<div className="saved-meme-container">
				<div className="view-fav-btn-wrapper">
					<button	className="view-fav-button" onClick={this.handleViewFavorite} >
						{buttonLabel}
					</button>
				</div>
				<div className="saved-meme-wrapper">
					{showFavorites ? this.renderFavoriteMemes() : this.renderAllMemes()}
				</div>
			</div>
		)
	}
}

export default SavedMemes