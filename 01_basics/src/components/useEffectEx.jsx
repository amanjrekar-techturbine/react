import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

function UseEffectEx() {
    const [count, setCount] = useState(0);
  
    const countIncrement = () => {
      setCount(count + 1);
    };

    useEffect(() => {
        alert("Every Render")
    })

    useEffect(() => {
        alert("Initial render")
    }, [])

    useEffect(() => {
        alert("Intial Render + Count Render")
    }, [count])
  
    return (
      <>
        <h1>Count: {count}</h1>
  
        <button onClick={countIncrement}>Count Increment</button>
      </>
    );
  }
  
  export default UseEffectEx;