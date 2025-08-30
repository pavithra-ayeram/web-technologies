// Timer Display 
import Heading from "./Heading";

export default function TimerDisplay({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Heading
      text={`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
    />
  );
}
