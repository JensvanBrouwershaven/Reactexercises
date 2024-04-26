import React, { useState } from 'react'; // Import useState from React
import './App.css';
import data from './components/data-1';

function App() {
  const Menu = () => {
    const [menu, setMenu] = useState(data);

    // Rendering menu items
    return (
      <div>
        {menu.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Menu />
    </>
  );
}

export default App;
