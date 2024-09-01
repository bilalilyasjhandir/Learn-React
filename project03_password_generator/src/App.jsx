import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+= "0123456789"
    if(char) str+= "!@#$%^&*()_+-=<>?,.`~[]{}"
    for (let i = 1; i <= length; i++){
      let character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
    }
    setPassword(pass)
  }, [length, num, char, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()}, [length, num, char, setPassword])

  return (
    <>
      <div className="w-full h-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-600 bg-gray-700">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            id='lengthInput'
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor='lengthInput'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={num}
            id='numInput'
            onChange={()=>{setNum((prev)=>!prev)}}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={()=>{setChar((prev)=>!prev)}}
            />
          </div>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
