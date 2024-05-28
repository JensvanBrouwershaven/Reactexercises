import { useState } from "react";

const CreateMessage = ({ addMessage }) => {
  const [textInput, setTextInput] = useState('');

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  }

  const submitMessageHandler = (e) => {
    e.preventDefault();
    if (textInput.trim()) {
      addMessage(textInput);
      setTextInput('');
    }
  }

  return ( 
    <>

      <form onSubmit={submitMessageHandler}>
      <div className="CreateMessageButtonDiv">
        <textarea 
          cols={50} 
          rows={5} 
          value={textInput} 
          onChange={userInputHandler}
          
        ></textarea>
        <button type="submit">+</button>
    


      </div>
      </form>

    </>
  );
}
 
export default CreateMessage;
