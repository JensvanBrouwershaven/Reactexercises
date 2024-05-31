import React from 'react';
import FlashCardList from './components/FlashCardList';
import Data from '../src/components/data';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <FlashCardList flashcards={Data} />
    </div>
  );
};

export default App;
