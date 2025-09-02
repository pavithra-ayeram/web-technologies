// TimeSetter Component
import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function TimeSetter({ onSetTime }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="time-setter">
      <InputField
        value={minutes}
        onChange={setMinutes}
        placeholder="Minutes"
        min={0}
        max={999}
      />
      <InputField
        value={seconds}
        onChange={setSeconds}
        placeholder="Seconds"
        min={0}
        max={59}
      />
      <Button label="Set" onClick={() => onSetTime(minutes, seconds)} />
    </div>
  );
}
