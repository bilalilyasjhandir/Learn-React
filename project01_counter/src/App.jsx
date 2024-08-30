import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(6)
  // let count = 6

  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Current count: {counter}</h2>
      <button onClick={addValue}>Add count</button>
      <br />
      <button onClick={removeValue}>Remove count</button>
    </>
  )
}

export default App
