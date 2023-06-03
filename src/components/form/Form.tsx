// imports
import './Form.css'
import React from 'react'
import Meme from '../meme/Meme';
import getJokes from '../../apiCalls';

// types
interface Joke {
	joke: string;
}

interface SavedMeme extends Joke {
	image: string;
	id: string;
	favorite: boolean;
}

interface FormState {
	jokes: Joke[];
	error: null;
	selectedImage: string;
	selectedJoke: string;
	selectedOptionIndex: number;
}

interface FormProps {
	selectedImage: string;
	saveNewMeme: (newMeme: SavedMeme) => void;
	closeForm: () => void;
}

// component 
class Form extends React.Component<FormProps, FormState> {
	constructor(props: FormProps) {
		super(props)
		this.state = {
			jokes: [],
			error: null,
			selectedImage: this.props.selectedImage,
			selectedJoke: "",
			selectedOptionIndex: -1,
		}
	}

	// lifecycle methods 
	componentDidMount = () => {
		this.getJokeOptions()
	}

	// methods
	selectJoke = (joke: string, index: number) => {
		this.setState({ selectedJoke: joke, selectedOptionIndex: index });
	}

	getJokeOptions = () => {
		this.setState({ selectedJoke: "", selectedOptionIndex: -1 });
		getJokes()
			.then((data) => {
				const jokes: Joke[] = data.map((joke: Joke) => joke);
				this.setState({ jokes: jokes });
			})
			.catch((error) => this.setState({ error: error.message }));
	}

	createJokeOptions = (): JSX.Element[] => {
		const { jokes } = this.state;

		const options: JSX.Element[] = jokes.map((joke, index) => {
			return (
				<div key={index + 1} className="joke-option-wrapper">
					<input
						type="radio"
						id={`joke${index + 1}`}
						className="joke-option-button"
						name="joke-option"
						value={joke.joke}
						required
						checked={this.state.selectedOptionIndex === index}
						onChange={() => this.selectJoke(joke.joke, index)}
					/>
					<label htmlFor={`joke${index + 1}`} id={`joke${index + 1}`} className="joke-option"> {joke.joke} </label>
				</div>
			)
		})
		return options
	}

	saveMeme = () => {
		const { selectedJoke, selectedImage } = this.state;
		if (selectedJoke) {
			const newMeme: SavedMeme = {
				image: selectedImage,
				joke: selectedJoke,
				id: `${Date.now()}`,
				favorite: false
			}
			this.props.saveNewMeme(newMeme)
			this.clearInputs();
			this.props.closeForm();
		} else {
			window.alert("Please select a joke before saving.")
		}
	}

	clearInputs = () => {
		this.setState({ selectedImage: "", selectedJoke: "", selectedOptionIndex: -1 });
	}

	// component render
	render = () => {
		const { jokes, selectedImage, selectedJoke, error } = this.state;
		const jokeOptions: JSX.Element[] = this.createJokeOptions()

		if (jokes.length < 0) {
			return <div>Loading...</div>
		}

		return (
			<div className="generator-container">
				<div className='form-meme-wrapper'>
					<Meme selectedJoke={selectedJoke} selectedImage={selectedImage} />
				</div>
				<div className="form-container">
					<button className="close-button" onClick={this.props.closeForm}>X</button>
					<form className="form">
						<h4 className="joke-option-header">Choose Your Joke</h4>
						{!error ? jokeOptions : <p>Oops, something went wrong. Error: {error} jokes...</p>}
					</form>
					<div className="button-wrapper">
						<button className="form-button" onClick={this.getJokeOptions}>get new jokes</button>
						<button className="form-button" onClick={this.saveMeme}>save meme</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
export type { SavedMeme };