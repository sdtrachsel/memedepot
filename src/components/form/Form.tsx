// imports
import './Form.css'
import React from 'react'
import Meme from '../meme/Meme';

// types
type Joke = {
	joke: string
}

type FormState = {
	jokes: Joke[];
	error: string;
	selectedImage: string;
	selectedJoke: string;
}

type FormProps = {
	selectedImage: string
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
		}
	}

// lifecycle methods 
	componentDidMount = ()	=>	{
		fetch("https://api.api-ninjas.com/v1/dadjokes?limit=3", {
			method: 'GET',
			headers: {'X-Api-Key': 'C/1Bummp5MFkEZYvGxfhOQ==0XCoAUNJSOQoFpuv'}
		})
		.then((response) => {
			if(!response.ok) {
				throw new Error(`${response.status}`);
			} else {
				return response.json();
			}
		})
		.then((data) => {
			const jokes: Joke[] = data.map((joke: Joke) => joke);
			this.setState({ jokes: jokes });
		})
		.catch((error) => this.setState({ error: error.message }));
	}

// methods
	selectJoke = (joke: string) => {
		this.setState({ selectedJoke: joke }, () => {
			console.log(this.state.selectedJoke);
		});
	}

	saveMeme = ()	=>	{
		const newMeme: object = {
			id: Date.now(),
			image: this.state.selectedImage,
			joke: this.state.selectedJoke
		}
		this.clearInputs();
		return newMeme;
	}

	clearInputs	=	()	=>	{
		this.setState({ selectedImage: "" });
		this.setState({ selectedJoke: "" });
	}

// component render
	render = ()	=>	{
		console.log(this.state.selectedImage)
		const { jokes } = this.state;
    const options: JSX.Element[] = jokes.map((joke, index) => {
      return (<React.Fragment key={index + 1}>
				<div className="joke-option-wrapper">
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
      </React.Fragment>)
    })

    if (jokes.length < 0) {
      return <div>Loading...</div>
    }

    return (
			<div className="generator-container">
				{/* <Meme savedMeme={this.saveMeme()} /> */}
				<Meme />
				<form className="form-container">
					<h4 className="joke-option-header">Choose Your Joke</h4>
					{options}
					<div className="button-wrapper">
						<button className="button" onClick={this.componentDidMount}>get new jokes</button>
						<button className="button" onClick={this.saveMeme}>save meme</button>
					</div>
      	</form>
			</div>
    );
  }
}

export default Form


