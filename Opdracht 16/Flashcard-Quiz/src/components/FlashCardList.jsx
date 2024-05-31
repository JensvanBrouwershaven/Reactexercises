import React from 'react';
import FlashCard from './FlashCard';
import '../App';

const FlashCardList = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <FlashCard key={index} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default FlashCardList;
