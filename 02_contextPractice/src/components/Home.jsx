import React from "react";
import Card from "./card";
import { useRef } from "react";
import useButton from "../context/ButtonContext";

function Home() {
  const inputRef = useRef();

  const { setButtonText } = useButton();

  const handleSubmit = () => {
    const value = inputRef.current.value;
    setButtonText(value);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>This is Home Page</h1>
      <div>
        <input
          ref={inputRef}
          style={{ backgroundColor: "white", color: "black" }}
          type="text"
        />
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
      <Card />
    </div>
  );
}

export default Home;
