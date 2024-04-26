import React, { useState } from 'react';
import data from './components/data'; // Import data from the correct location
import './App.css';

const Birthday = () => {
  const [birthday, setBirthday] = useState(data);

  // Map through the birthday array and render each birthday item
  const renderBirthdays = () => {
    return birthday.map((person) => (
      <div key={person.id}>
        <img src={person.image} alt={person.name} />
        <div>
          <h2>{person.name}</h2>
          <p>{person.age} years old</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="birthday-container">
      {renderBirthdays()}
    </div>
  );
};

function App() {
  return (
    <>
      <Birthday />
    </>
  );
}

export default App;
