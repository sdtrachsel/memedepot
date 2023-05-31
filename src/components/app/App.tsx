import React from 'react';
import './App.css';
import Error from '../error/Error';
import Header from '../header/Header';
import Images from '../images/Images';
import SavedMemes from '../savedmemes/SavedMemes';
import { Route, Switch } from 'react-router-dom';
import { SavedMeme } from '../form/Form';
import Meme from '../meme/Meme';

interface AppState {
  savedMemes: SavedMeme[]
  favoriteMemes: SavedMeme[]
}

class App extends React.Component<{}, AppState>{
  constructor(props: {}) {
    super(props)
    this.state = {
      savedMemes: [],
      favoriteMemes: []
    }
  }

  saveNewMeme = (newMeme: SavedMeme) => {
    this.setState({savedMemes:[...this.state.savedMemes, newMeme]})
  }

  favoriteMeme = (favorited: SavedMeme) => {
    this.setState({favoriteMemes: [...this.state.favoriteMemes, favorited]})
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Images saveNewMeme={this.saveNewMeme}  favoriteMeme={this.favoriteMeme}/>} /> 

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
          <Route exact path='*' render={() => <Error />}></Route>
        </Switch>
      </div>
    );
  }

}

export default App