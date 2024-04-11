import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router> 
     <Navbar/>
     <Home/>
     <Footer/>
    </Router>
  )
}

export default App
