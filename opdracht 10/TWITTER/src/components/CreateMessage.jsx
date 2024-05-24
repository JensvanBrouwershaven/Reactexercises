import { useState } from "react";

const CreateMessage = ({ addMessage }) => {
  const [textInput, setTextInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  }

  const userNameHandler = (e) => {
    setNameInput(e.target.value);
  }

  const submitMessageHandler = (e) => {
    e.preventDefault();
    if (textInput.trim() && nameInput.trim()) {
      addMessage(nameInput, textInput);
      setTextInput('');
      setNameInput('');
    }
  }

  return ( 
    <>
      <form onSubmit={submitMessageHandler}>
        <input 
          type="text" 
          value={nameInput} 
          onChange={userNameHandler}
          placeholder="Your name"
        />
        <textarea 
          cols={50} 
          rows={5} 
          value={textInput} 
          onChange={userInputHandler}
          placeholder="Your message"
        ></textarea>
        <button type="submit">Toevoegen</button>
      </form>
    </>
  );
}
 
export default CreateMessage;
