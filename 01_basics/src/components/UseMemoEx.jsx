import { useMemo, useRef, useState } from "react";

//useMemoEx
const nums = new Array(5_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 4_000_000,
  };
});

function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  //   const magical = numbers.find((item) => item.isMagical == true);
  const magical = useMemo(
    () => numbers.find((item) => item.isMagical == true),
    [numbers]
  );

  const countIncrement = () => {
    setCount(count + 1);
    if (count == 10) {
      setNumbers(
        new Array(10_000_000).fill(0).map((_, i) => {
          return {
            index: i,
            isMagical: i === 9_000_000,
          };
        })
      );
    }
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Magical Number : {magical.index}</h1>

      <button onClick={countIncrement}>Count Increment</button>
    </>
  );
}

export default UseMemoEx;
