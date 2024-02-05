import React, { useState } from 'react';

const BookComponent = ({ book }) => (
  <div key={book.titel}>
    <h2>{book.titel}</h2>
    <p>Auteur: {book.auteur}</p>
    {/* Voeg hier andere boekinformatie toe, zoals de afbeelding */}
    <img src={book.afbeelding} alt={book.titel} />
  </div>
);

const App = () => {
  const [books, setBooks] = useState([
    {
      titel: 'interesting facts for the curious minds',
      auteur: 'jordan moore',
      afbeelding: 'x'
    },
    {
      titel: 'atomic habits',
      auteur: 'james clear',
      afbeelding: 'x'
    },
    {
      titel: 'fairy tale',
      auteur: 'stephen king',
      afbeelding: 'x'
    },
  ]);

  return (
    <div>
      <h1>Booklist</h1>
      {books.map((book) => (
        <BookComponent key={book.titel} book={book} />
      ))}
    </div>
  );
};

export default App;
