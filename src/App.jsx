import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center'>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
