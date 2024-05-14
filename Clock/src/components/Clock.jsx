import React, { useState } from 'react';
import { useEffect, useState } from 'react';

function Clock() {
  // Initial state voor currentTime is bijvoorbeeld 0
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => 
    setCurrentTime(currentTime)
  }, 1000)
  ;


  return (
    
    <div>
      <p>Huidige tijd: {currentTime}</p>
      <button onClick={() => setCurrentTime(Date.now())}>
        Bijwerken tijd
      </button>
    </div>
  );
}

export default Clock;
