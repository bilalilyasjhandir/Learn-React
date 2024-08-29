import HelloWorld from "./HelloWorld"

function App() {
  const user = "This is a variable"
  return (
    // vite react returns only one element
    //so we use fragments to manipulate it
    <>
      <HelloWorld/>
      <h1>Bilal</h1>
      <p>React.js is fun</p>
      <p>{user}</p>
    </>
  )
}

export default App
