import React from 'react'
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'

// Dashboard Admin
import HomeAdmin from './components/Dashboard/Admin/Home/HomeAdmin';

import ListAdmin from './views/Dashboard/Admin/DataMaster/Admin/AdminList'
import TambahAdmin from './views/Dashboard/Admin/DataMaster/Admin/AddAdmin'

import ListPustakawan from './views/Dashboard/Admin/DataMaster/Pustakawan/PustakawanList'
import TambahPustakawan from './views/Dashboard/Admin/DataMaster/Pustakawan/AddPustakawan'

import ListAnggota from './views/Dashboard/Admin/DataMaster/Anggota/AnggotaList'
import TambahAnggota from './views/Dashboard/Admin/DataMaster/Anggota/AddAnggota'

import ListBook from './views/Dashboard/Admin/DataMaster/Buku/BookList'
import TambahBuku from './views/Dashboard/Admin/DataMaster/Buku/AddBook'

import KategoriBook from './views/Dashboard/Admin/DataMaster/Kategori/KategoriList'
import TambahKategori from './views/Dashboard/Admin/DataMaster/Kategori/AddKategori'

import TransPeminjaman from './views/Dashboard/Admin/DataTransaksi/PeminjamanBuku'
import TransPengembalian from './views/Dashboard/Admin/DataTransaksi/PengembalianBuku'
import TransDenda from './views/Dashboard/Admin/DataTransaksi/Denda'

// Dashboard Pustakawan
import { ColorContext } from './ColorContext/darkContext';
import Home from './components/Dashboard/Pustakawan/Home/Home';
import ListBooks from './views/Dashboard/Pustakawan/DataBuku/BooksList'
import ListKategori from './views/Dashboard/Pustakawan/KategoriBuku/ListKategori'
import './app.scss'

// Dashboard Anggota
import DashboardAnggota from './views/Dashboard/Anggota'

function App() {
    // color state management using react context
    const { darkMode } = useContext(ColorContext);

    return (
        <div className={darkMode ? 'App dark' : 'App'}>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing title="Landing" />} />

                    <Route path="/login" element={<Login title="Login" />} />
                    <Route path="/register" element={<Register title="Register" />} />

                    {/* Start Dashboard Admin */}
                    <Route path="/dashboard-admin">
                        <Route index element={<HomeAdmin />} />
                        {/* nested routes */}
                        <Route path="admin/*" element={<ListAdmin type="admin" />} />
                        <Route path="/dashboard-admin/admin/add-admin/*" element={<TambahAdmin type="admin" />} />

                        <Route path="pustakawan/*" element={<ListPustakawan type="pustakawan" />} />
                        <Route path="/dashboard-admin/pustakawan/add-pustakawan/*" element={<TambahPustakawan type="pustakawan" />} />

                        <Route path="anggota/*" element={<ListAnggota type="anggota" />} />
                        <Route path="/dashboard-admin/anggota/add-anggota/*" element={<TambahAnggota type="anggota" />} />

                        <Route path="buku/*" element={<ListBook type="buku" />} />
                        <Route path="/dashboard-admin/buku/add-buku/*" element={<TambahBuku type="buku" />} />

                        <Route path="kategori/*" element={<KategoriBook type="kategori" />} />
                        <Route path="/dashboard-admin/kategori/add-kategori/*" element={<TambahKategori type="pustakawan" />} />

                        <Route path="peminjaman/*" element={<TransPeminjaman type="peminjaman" />} />
                        <Route path="pengembalian/*" element={<TransPengembalian type="pengembalian" />} />
                        <Route path="denda/*" element={<TransDenda type="denda" />} />
                    </Route>
                    {/*  End Dashboard Admin */}


                    {/* Start Dashboard Pustakawan */}
                    <Route path="/dashboard-pustakawan">
                        <Route index element={<Home />} />
                        {/* nested routes */}
                        <Route path="data-buku/*" element={<ListBooks type="buku" />} />
                        <Route path="kategori-buku/*" element={<ListKategori type="kategori" />} />

                    </Route>
                    {/* End Dashboard Pustakawan */}

                    {/* Start Dashboard Aggota */}
                    <Route path="/dashboard-anggota" element={<DashboardAnggota title="DashboardAdmin" />} />
                    {/* End Dashboard Anggota */}

                </Routes>
            </Router>
        </div>
    )
}

export default App