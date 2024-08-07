import {useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Listagem  from './pages/Listagem'


const App = () => {

  const [color, setColor] = useState("#ffff")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Listagem />} />
    </Routes>
  )
}

export default App;