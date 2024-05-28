import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg.text} />
      ))}
    </>
  );
}
 
export default MessageList;
