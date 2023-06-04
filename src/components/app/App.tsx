import React from 'react';
import './App.css';
import Error from '../error/Error';
import Header from '../header/Header';
import Images from '../images/Images';
import Meme from '../meme/Meme';
import SavedMemes from '../savedmemes/SavedMemes';
import { Route, Switch } from 'react-router-dom';
import { SavedMeme, SavedMemesList } from '../../types'
import { JsxElement } from 'typescript';

class App extends React.Component<{}, SavedMemesList>{
  constructor(props: {}) {
    super(props)
    this.state = {
      savedMemes: []
    }
  }

  saveNewMeme = (newMeme: SavedMeme) => {
    this.setState({ savedMemes: [...this.state.savedMemes, newMeme] })
  }

  favoriteMeme = (memeId: string) => {
    const { savedMemes } = this.state;
    const updatedMemes = savedMemes.map((meme) => {
      if (meme.id === memeId) {
        return {
          ...meme,
          favorite: !meme.favorite
        }
      }
      return meme;
    })

    this.setState({ savedMemes: updatedMemes })
  }

  renderMeme = ({ match }: { match: any }): JSX.Element => {
    const memeId = match.params.id;
    const findMeme = this.state.savedMemes.find(meme => meme.id === memeId)
    return (findMeme
      ? <div className='single-view-wrapper'><Meme selectedJoke={findMeme.joke} selectedImage={findMeme.image} /></div>
      : <Error />);
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Header savedMemes={this.state.savedMemes} />
        <Switch>
          <Route exact path="/" render={() => <Images saveNewMeme={this.saveNewMeme} />} />
          <Route exact path="/savedmemes" render={() => <SavedMemes favoriteMeme={this.favoriteMeme} savedMemes={this.state.savedMemes} />} />
          <Route exact path="/:id" render={this.renderMeme} />
          <Route exact path='*' render={() => <Error />} />
        </Switch>
      </div>
    );
  }
}

export default App