import "../App";
import { useRef } from "react";

const Message = ({ message }) => {
  const messageRef = useRef(null);
  const doneButtonRef = useRef(null);
  const delButtonRef = useRef(null);

  const doneButton = () => {
    if (messageRef.current) {
      messageRef.current.style.backgroundColor = "greenyellow";
    }
    if (doneButtonRef.current) {
      doneButtonRef.current.style.display = "none";
    }
  };

  const deleteButton = () => {
    if (messageRef.current) {
      messageRef.current.style.display = "none"; // Hide the message paragraph
    }
    if (doneButtonRef.current) {
      doneButtonRef.current.style.display = "none"; // Hide the Done button
    }
    if (delButtonRef.current) {
      delButtonRef.current.style.display = "none"; // Hide the Delete button
    }
  };

  return (
    <>
      <div className="messageContent">
        <p className="messagePar" ref={messageRef}>{message}</p>
        <button className="doneButton" onClick={doneButton} ref={doneButtonRef}>Done</button>
        <button className="delButton" onClick={deleteButton} ref={delButtonRef}>🗑️</button>
      </div>
    </>
  );
};

export default Message;
