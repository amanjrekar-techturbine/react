import { useState } from "react"


function App() {
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
    setCount(latest => latest + 1);
  }

  const decrement = () => {
    if(!count) return;
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

    return (
      <>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </>
    )
}

export default App
