import React from "react";

function Button({text, method}) {
  return (
    <button className="btn" onClick={method}>{text}</button>
  );
}

export default Button;