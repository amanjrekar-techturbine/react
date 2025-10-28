import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharacterAllowed, setCharacterAllowed] = useState(false);
  const inputRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNEOPQRSUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "?><:}{+_)(*&^%$#@!)}";

    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [passwordLength, isNumberAllowed, isCharacterAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    inputRef.current?.select()
    const value = inputRef.current?.value
    console.log(value)
    window.navigator.clipboard.writeText(value)
    // alert("Password copied to clipboard!")
  }, [inputRef])

  useEffect( () => {
    passwordGenerator()
  }, [passwordLength, isNumberAllowed, isCharacterAllowed])

  

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={inputRef}
            type="text"
            className="outline-none w-full py-1 px-3 bg-white text-black "
            placeholder="Password"
            value={password}
            readOnly
            name=""
            id=""
          />
          <button onClick={copyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={passwordLength}
              className="cursor-pointer"
              onChange={(e) => {
                setPasswordLength(e.target.value);
              }}
            />
            <label>Length: {passwordLength}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharacterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
