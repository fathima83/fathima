import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Login from './components/Login'
import NabBar from './components/NabBar'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import statebasics from './components/statebasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NabBar/>

      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/s' element={<Signup/>}/>
      <Route path='/state' element={<statebasics/>}/>
      <Route path='/name' element={<name/>}/>
      <Route path='/api' element={<api/>}/>
      </Routes>
      </>
  )
}

export default App