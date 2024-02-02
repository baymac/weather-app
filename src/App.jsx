import { useState } from 'react'
import './App.css'
import { HomeComponents } from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponents />
    </>
  )
}

export default App
