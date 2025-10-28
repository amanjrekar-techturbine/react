import { useRef, useState } from "react";

//useMemoEx
const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_000 
  }
})

function Greet() {
  const [count, setCount] = useState(0);
  const a = useRef(1);
  const countRef = useRef();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementRef = () => {
    a.current += 1;
    console.log(a.current);
  };

  const hideCount = () => {
    countRef.current.style.display = "none"
  }

  

  // a.current += 1;
  // console.log(a.current);

  return (
    <>
      <h1 ref={countRef}>{count}</h1>
      <h2>useRef: {a.current}</h2>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementRef}>Update useRef</button>
      <button onClick={hideCount}>Hide Count</button>
    </>
  );
}

export default Greet;
