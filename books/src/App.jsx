import React, { useState } from 'react';
import BookList from './components/Book-List';

const App = () => {
  const [books, setBooks] = useState([
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: "/images/catcher-in-the-rye.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "/images/to-kill-a-mockingbird.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "/images/1984.jpg"
    }
  ]);

  return (
    <div className="app">
      <h1>Top 3 Bestseller Boeken</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;