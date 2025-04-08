import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cars from './components/Cars'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/cars" element={<Cars />} /> 
          <Route path="/contact" element={<Contact />} />           


        </Routes>
      </Router>
    </div>
  )
}

export default App
