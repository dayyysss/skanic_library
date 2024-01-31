import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'

import DashboardAdmin from './views/Dashboard/Admin/index'

import DashboardPustakawan from './views/Dashboard/Pustakawan'

import DashboardAnggota from './views/Dashboard/Anggota'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing title="Landing" />} />

          <Route path="/login" element={<Login title="Login"/>} />
          <Route path="/register" element={<Register title="Register" />} />

          {/* Start Dashboard Admin */}
          <Route path="/dashboard-admin" element={<DashboardAdmin title="DashboardAdmin" />} />
          {/*  End Dashboard Admin */}

          {/* Start Dashboard Pustakawan */}
          <Route path="/dashboard-pustakawan" element={<DashboardPustakawan title="DashboardAdmin" />} />
          {/* End Dashboard Pustakawan */}

          {/* Start Dashboard Aggota */}
          <Route path="/dashboard-anggota" element={<DashboardAnggota title="DashboardAdmin" />} />
          {/* End Dashboard Anggota */}

      </Routes>
    </Router>
  )
}

export default App