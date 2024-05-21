import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Aboutus from './components/Aboutus/Aboutus'
import Pestprobems from './components/Pestprobems/Pestprobems'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Aboutus/>
      <Pestprobems/>
      
    </>
  )
}

export default App
