import React from 'react';

const Book = ({ title, author, image }) => {
  return (
    <div className="book">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Book;