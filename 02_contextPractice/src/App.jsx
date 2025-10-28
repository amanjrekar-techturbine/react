import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home";
import { ButtonContextProvider } from "./context/ButtonContext";

function App() {
  const [buttonText, setButtonText] = useState("Hello World");

  return (
    <>
      <ButtonContextProvider value={{buttonText, setButtonText}}>
        <Home />
      </ButtonContextProvider>
    </>
  );
}

export default App;
