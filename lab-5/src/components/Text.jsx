import React from "react";

function Text({ temperature, unit }) {
  return (
    <p className="temp-display">
      Temperature: {temperature}&deg; {unit}
    </p>
  );
}

export default Text;