import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);




  return (
    <>
        <div>Counter: {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={() => {num += 1; console.log(num)}}>Increment</button>
        <button onClick={() => {numRef.current += 1; console.log(numRef)}}>Increment useRef</button>
    </>
);
}

export default Counter;
