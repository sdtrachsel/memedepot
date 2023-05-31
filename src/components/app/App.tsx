import React from 'react';
import './App.css';
import Error from '../error/Error';
import Header from '../header/Header';
import Images from '../images/Images';
import SavedMemes from '../savedmemes/SavedMemes';
import { Route } from 'react-router-dom';
import { SavedMeme } from '../form/Form';
import Meme from '../meme/Meme';

interface AppState {
  savedMemes: SavedMeme[]
}

class App extends React.Component<{}, AppState>{
  constructor(props: {}) {
    super(props)
    this.state = {
      savedMemes: []
    }
  }

  saveNewMeme = (newMeme:SavedMeme) => {
    this.setState({savedMemes:[...this.state.savedMemes, newMeme]})
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <Images saveNewMeme={this.saveNewMeme} />} /> 
        <Route exact path="/:id" render={( { match } ) => {
          const memeId = match.params.id
          const findMeme = this.state.savedMemes.find(meme => meme.id === memeId)
          if(!findMeme) {
            //Error page or redirect to home
          } else {
            return(
              <Meme selectedJoke={findMeme.joke} selectedImage={findMeme.image}/>
            )
          }
        }} />
        <Route exact path="/savedmemes" render={() => <SavedMemes savedMemes={this.state.savedMemes}/>} />
      </div>
    );
  }
}

export default App