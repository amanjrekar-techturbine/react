import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Button from './components/Button'

function App() {

  const [color, setColor] = useState("black")

  console.log(color)

  return (
    <>
      <div style={{ backgroundColor: color, width: "100vw", height: "100vh" }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl'>
            <Button title="Red" color="red" setColor={setColor} />
            <Button title="Blue" color="blue" setColor={setColor} />
            <Button title="Green" color="green" setColor={setColor} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
