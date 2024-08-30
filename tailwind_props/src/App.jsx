import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="bg-green-950 text-white rounded-3xl p-4">Installed Tailwind</h1>
      < Card product="HP Laptop" buttonText="Visit Now"/>
    </>
  )
}

export default App
