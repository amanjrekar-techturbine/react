import React, { useCallback, useEffect, useRef, useState } from "react";
import { Counter, Section } from "../index.js";
import Input from "../Input.jsx";
import { useLoaderData } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
    console.log("Hello World")
  }, []);

  const githubData = useLoaderData();
  console.log(githubData)

  return (
    <>
      {/* <Section /> */}
      {/* <button onClick={increment}>Focus Input</button> */}
      <Input />
      <div>Github Followers : {githubData.followers}</div>
    </>
  );
}

export default Home;

export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return await response.json();
};
