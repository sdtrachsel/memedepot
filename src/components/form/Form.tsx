// imports
import './Form.css'
import React from 'react'
import Meme from '../meme/Meme';
import getJokes from '../../apiCalls';
import Image from '../image/Image';

// types
interface Joke {
	joke: string;
}

interface SavedMeme extends Joke{
	image: string;
	id: string;
}

interface FormState {
  jokes: Joke[];
  error: string;
  selectedImage: string;
  selectedJoke: string;
  savedMeme: SavedMeme; 
}

interface FormProps {
	selectedImage: string;
}

// component 
class Form extends React.Component<FormProps, FormState> {
	constructor(props: FormProps)	{
		super(props)
		this.state = {
			jokes: [],
			error: "",
			selectedImage: this.props.selectedImage,
			selectedJoke: "",
			savedMeme: { image: "", joke: "", id: ""}
		}
	}

// lifecycle methods 
	componentDidMount = ()	=>	{
		this.getJokeOptions()
	}

// methods
	selectJoke = (joke: string) => {
		this.setState({ selectedJoke: joke }, () => {
		});
	}

	getJokeOptions = () =>{
		getJokes()
		.then((data) => {
			const jokes: Joke[] = data.map((joke: Joke) => joke);
			this.setState({ jokes: jokes });
		})
		.catch((error) => this.setState({ error: error.message }));
	}

	saveMeme = ()	=>	{
		const newMeme: SavedMeme = {
			image: this.state.selectedImage,
			joke: this.state.selectedJoke,
			id: `${Date.now()}`
		}
		this.setState({ savedMeme: newMeme })
		this.clearInputs();
	}

	clearInputs	=	()	=>	{
		this.setState({ selectedImage: "" });
		this.setState({ selectedJoke: "" });
	}

// component render
	render = ()	=>	{
		const { jokes, selectedImage, selectedJoke } = this.state;

    const options: JSX.Element[] = jokes.map((joke, index) => {
      return (
				<div key={index + 1}className="joke-option-wrapper">
					<input
						type="radio"
						id={`joke${index + 1}`}
						className="joke-option-button"
						name="joke-option"
						value={joke.joke}
						onChange={(event) => this.selectJoke(event.target.value)}
					/>
					<label htmlFor={`joke${index + 1}`} id={`joke${index + 1}`} className="joke-option"> {joke.joke} </label>
				</div>
			)
    })

    if (jokes.length < 0) {
      return <div>Loading...</div>
    }

    return (
			<div className="generator-container">
				<Meme 
					selectedJoke={selectedJoke} 
					selectedImage={selectedImage}
				/>
				<form className="form-container">
					<button>X</button>
					<h4 className="joke-option-header">Choose Your Joke</h4>
					{options}
      	</form>
					<div className="button-wrapper">
						<button className="button" onClick={this.getJokeOptions}>get new jokes</button>
						<button className="button" onClick={this.saveMeme}>save meme</button>
					</div>
			</div>
    );
  }
}

export default Form


