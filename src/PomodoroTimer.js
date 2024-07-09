import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => (seconds > 0 ? seconds - 1 : 0));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>{formatTime(seconds)}</div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setSeconds(1500)}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;
