import React from "react";
import useButton from "../context/ButtonContext.js"

function Button() {
  const { buttonText } = useButton()

  return <button>{buttonText}</button>;
}

export default Button;
