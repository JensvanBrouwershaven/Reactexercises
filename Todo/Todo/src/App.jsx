import { useState } from 'react'
import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

const App  = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { id: messages.length, text }]);
  }



  return ( 
    <>
    <div className="todoHeader">
    <h1>To Do List</h1>
    </div>
    <div className="createMessageDiv">
      <CreateMessage addMessage={addMessage} />
      <MessageList messages={messages} />
      </div>  
      
    </>
  );
}
 
export default App;
