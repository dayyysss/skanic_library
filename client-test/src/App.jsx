import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <Router>
      <div className='max-w-screen-xl mx-auto'>
        <Routes>
          <Route path="/" element={<Landing title="Landing" />} />
          <Route path="/login" element={<Login title="Login"/>} />
          <Route path="/register" element={<Register title="Register" />} />
          <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App