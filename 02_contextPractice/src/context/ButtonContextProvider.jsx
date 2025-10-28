import React from "react";
import { useState } from "react";
import ButtonContext from "./ButtonContext";

function ButtonContextProvider({ children }) {
  const [buttonText, setButtonText] = useState("Ankit");
  return (
    <ButtonContext.Provider value={{ buttonText, setButtonText }}>
      {children}
    </ButtonContext.Provider>
  );
}

export default ButtonContextProvider;
