// Control Buttons
import Button from "./Button";

export default function ControlButtons({ isRunning, onStart, onPause, onReset }) {
  return (
    <div>
      {!isRunning ? (
        <Button label="Start" onClick={onStart} />
      ) : (
        <Button label="Pause" onClick={onPause} />
      )}
      <Button label="Reset" onClick={onReset} />
    </div>
  );
}
