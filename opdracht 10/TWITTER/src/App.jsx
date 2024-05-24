import { useState } from 'react'
import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

const App  = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (name, text) => {
    setMessages([...messages, { id: messages.length, name, text }]);
  }

  return ( 
    <>
      <CreateMessage addMessage={addMessage} />
      <MessageList messages={messages} />
    </>
  );
}
 
export default App;
