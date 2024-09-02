import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WebSpecial from './components/WebSpecial'
import Trending from './components/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen font-[Roboto]'>
       <Header />
       <Navbar />
       <Hero />
       <WebSpecial />
       <Trending />
    </div>
  )
}

export default App
