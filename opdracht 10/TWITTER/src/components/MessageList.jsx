import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((msg) => (
        <Message key={msg.id} name={msg.name} message={msg.text} />
      ))}
    </>
  );
}
 
export default MessageList;
