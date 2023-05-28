import React from 'react';
import './App.css';
import Error from '../error/Error';
import Form from '../form/Form';
import Header from '../header/Header';
import Images from '../images/Images';
import Meme from '../meme/Meme';
import SavedMemes from '../savedmemes/SavedMemes';
import { Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Images} />
      <Route exact path="/savedmemes" render={() => <SavedMemes />} />
    </div>
  );
}

export default App
