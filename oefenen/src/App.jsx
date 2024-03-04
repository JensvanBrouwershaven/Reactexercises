import { useState } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
function counter() {
setNumber(number + 1);
setName("jens");
}

  return (
    <>
    <h1>{number}</h1>
    <button onClick={counter}>aaa</button>
    <h1>{name}</h1>
    </>
  )
}

export default App
