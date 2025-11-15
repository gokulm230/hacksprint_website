import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
