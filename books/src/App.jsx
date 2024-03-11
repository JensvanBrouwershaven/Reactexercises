import React, { useState } from 'react';
import BookList from './components/Book-List';
import Header from './components/header';
import './App.css'; // Import the CSS file

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
    <div>
      <div className='header'>
        <Header />
        <div className='bestsellers'>
        <h1>Top 3 Bestseller Boeken</h1>
        </div>
      </div>
      <div className="app">
        <BookList books={books} />
      </div>
    </div>
  );
};

export default App;
