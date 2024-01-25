import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import DashboardAdmin from './views/Dashboard/Admin'
import DashboardPustakawan from './views/Dashboard/Pustakawan'
import DashboardAnggota from './views/Dashboard/Anggota'

const App = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Landing title="Landing" />} />
            <Route path="/login" element={<Login title="Login"/>} />
          <Route path="/register" element={<Register title="Register" />} />
          <Route path="/dashboard-admin" element={<DashboardAdmin title="DashboardAdmin" />} />
          <Route path="/dashboard-pustakawan" element={<DashboardPustakawan title="DashboardAdmin" />} />
          <Route path="/dashboard-anggota" element={<DashboardAnggota title="DashboardAdmin" />} />
      </Routes>
    </Router>
  )
}

export default App