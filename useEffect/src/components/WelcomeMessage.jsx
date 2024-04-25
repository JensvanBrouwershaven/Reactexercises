import React, { useState, useEffect } from "react";

function Welkom() {
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const amsterdamTime = new Date(
        currentTime.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })
      );
      const hours = amsterdamTime.getHours();

      if (hours < 12) {
        setNewMessage("Goedemorgen");
      } else if (hours >= 12 && hours < 18) {
        setNewMessage("Goedemiddag");
      } else {
        setNewMessage("Goedeavond");
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{newMessage}</div>;
}

export default Welkom;
