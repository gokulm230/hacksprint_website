import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SponsorsPage from './pages/SponsorsPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
