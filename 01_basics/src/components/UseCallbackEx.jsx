import { useCallback, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar";

function UseCallbackEx() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = useCallback(() => {
    return "Bad" + count2;
  }, [count2]);

  const countIncrement = () => {
    setCount(count + 1);
  };
  const countIncrement2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective} />
      <h1>Count 1: {count}</h1>
      <h1>Count 2: {count2}</h1>

      <button onClick={countIncrement}>Count Increment</button>
      <button onClick={countIncrement2}>Count Increment 2</button>
    </>
  );
}

export default UseCallbackEx;
