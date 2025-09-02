import React, { useState } from "react";
import Header from "../components/Heading";
import Button from "../components/Button";
import Text from "../components/Paragraph";


export default function Thermostat() {
  const [temperature, setTemperature] = useState(32);
  const [unit, setUnit] = useState("C");

  const increaseTemp = () => setTemperature(temperature + 1);
  const decreaseTemp = () => setTemperature(temperature - 1);

  const toggleUnit = () => {
    if (unit === "C") {
      setTemperature(Math.round((temperature * 9) / 5 + 32));
      setUnit("F");
    } else {
      setTemperature(Math.round(((temperature - 32) * 5) / 9));
      setUnit("C");
    }
  };

  return (
    <div className="app">
      <Header title="Thermostat" />
      <Text temperature={temperature} unit={unit} />
      <div className="button">
        <Button text="+" method={increaseTemp} />
        <Button text="-" method={decreaseTemp} />
        {unit === "C" ? <Button method={toggleUnit} text="F" /> : <Button method={toggleUnit} text="C"/>}
      </div>  
    </div>
  );
}