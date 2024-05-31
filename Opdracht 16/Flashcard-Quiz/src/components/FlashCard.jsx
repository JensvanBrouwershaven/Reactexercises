import React, { useState } from 'react';
import '../App';

const FlashCard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleClick} className="flashcard">
      {isFlipped ? flashcard.answer : flashcard.question}
    </div>
  );
};

export default FlashCard;
