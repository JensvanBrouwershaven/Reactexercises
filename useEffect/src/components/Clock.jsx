import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  
  const amsterdamTime = new Date(
    time.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })
  );

  const hours = amsterdamTime.getHours();
  const minutes = amsterdamTime.getMinutes();
  const seconds = amsterdamTime.getSeconds();

  return (
    <div>
      <h2>Current Amsterdam Time</h2>
      <div>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
    </div>
  );
}

export default Timer;
