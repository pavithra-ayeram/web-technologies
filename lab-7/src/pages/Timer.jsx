// Countdown app using various components
import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import TimeSetter from "../components/TimeSetter";
import TimerDisplay from "../components/TimerDisplay";
import ControlButtons from "../components/ControlButtons";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // countdown logic
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSetTime = (minutes, seconds) => {
    setTimeLeft(minutes * 60 + seconds);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <Heading text="Countdown Timer" />
      <TimeSetter onSetTime={handleSetTime} />
      <TimerDisplay timeLeft={timeLeft} />
      <ControlButtons
        isRunning={isRunning}
        onStart={() => setIsRunning(true)}
        onPause={() => setIsRunning(false)}
        onReset={() => {
          setTimeLeft(0);
          setIsRunning(false);
        }}
      />
    </div>
  );
}

export default Timer;