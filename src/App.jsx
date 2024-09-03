import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WebSpecial from './components/WebSpecial'
import Trending from './components/Trending'
import Leaders from './components/Leaders'
import IrVideo from './components/IrVideo'
import Fashion from './components/Fashion'
import Food from './components/Food'
import Ecommerce from './components/Ecommerce'
import SupplyChain from './components/SupplyChain'
import CaseStudy from './components/CaseStudy'
import Shopping from './components/Shopping'
import BookStore from './components/BookStore'
import Reconnect from './components/Reconnect'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen font-[Roboto]'>
       <Header />
       <Navbar />
       <Hero />
       <WebSpecial />
       <Trending />
       <Leaders />
       <IrVideo />
       <Fashion />
       <Food />
       <Ecommerce />
       <Shopping />
       <SupplyChain />
       <CaseStudy />
       <BookStore />
       <Reconnect />
       <Footer />
    </div>
  )
}

export default App
