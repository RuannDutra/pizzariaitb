import {useStates} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Listagem from './pages/Listagem';

const App = () => {

  const [color] = useStates("#0000ff")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Listagem />} />
    </Routes>
  )
}

export default App;