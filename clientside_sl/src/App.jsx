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
import Home from './components/Dashboard/Pustakawan/Home/Home';
import { ColorContext } from './ColorContext/darkContext';
import Orders from './components/Dashboard/Pustakawan/Orders/Orders';
import AddNew from './views/Dashboard/Pustakawan/AddNew/AddNew';
import BlogDetail from './views/Dashboard/Pustakawan/BlogDetail/BlogDetail';
import Blogs from './views/Dashboard/Pustakawan/Blogs/Blogs';
import Detail from './views/Dashboard/Pustakawan/Detail/Detail';
import Lists from './views/Dashboard/Pustakawan/UserLists/UserLists';
import './app.scss'

// Dashboard Anggota
import DashboardAnggota from './views/Dashboard/Anggota'

// Dynamicaly change the data for different pages(replaceable)
const userInpDetails = [
    {
        id: 2,
        name: 'username',
        lable: 'Username',
        type: 'text',
        placeholder: 'John23',
        required: true,
        pattern: '^[A-Za-z0-9]{3,12}$',
        errorMsg: 'Username should be 3-12 characters & should not include any special character!',
    },
    {
        id: 3,
        name: 'name',
        lable: 'Name',
        type: 'text',
        placeholder: 'John Smith',
        required: true,
        pattern: '^[A-Za-z]{1,20}$',
        errorMsg: 'Name is required!',
    },
    {
        id: 4,
        name: 'email',
        lable: 'Email',
        type: 'email',
        placeholder: 'example@email.com',
        required: true,
        errorMsg: 'Enter a valid email!',
    },
    {
        id: 5,
        name: 'password',
        lable: 'Password',
        type: 'password',
        placeholder: 'Password',
        required: true,
        pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
        errorMsg:
            'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
    },
    {
        id: 6,
        name: 'address',
        lable: 'Address',
        type: 'text',
        placeholder: 'Address',
        required: true,
        errorMsg: 'Address is required!',
    },
];
const productInpDetails = [
    {
        id: 2,
        name: 'title',
        lable: 'Title',
        type: 'text',
        placeholder: 'Product title',
        required: true,
        errorMsg: 'Title is required!',
    },
    {
        id: 3,
        name: 'description',
        lable: 'Description',
        type: 'text',
        placeholder: 'Product description',
        required: true,
        errorMsg: 'Description is required!',
    },
    {
        id: 4,
        name: 'category',
        lable: 'Category',
        type: 'text',
        placeholder: 'Product category',
        required: true,
        errorMsg: 'Category is required!',
    },
    {
        id: 5,
        name: 'price',
        lable: 'Price',
        type: 'number',
        placeholder: 'Product price',
        required: true,
        errorMsg: 'Price is required!',
    },
    {
        id: 6,
        name: 'stock',
        lable: 'In Stock',
        type: 'text',
        placeholder: 'In Stock',
        required: true,
        errorMsg: 'This field is required!',
    },
];
const blogInputs = [
    {
        id: 1,
        name: 'title',
        lable: 'Title',
        type: 'text',
        placeholder: 'Blog title',
        required: true,
        errorMsg: 'Title is required!',
    },
    {
        id: 2,
        name: 'description',
        lable: 'Description',
        type: 'text',
        placeholder: 'Blog description',
        required: true,
        errorMsg: 'Description is required!',
    },
    {
        id: 3,
        name: 'tags',
        lable: 'Tags',
        type: 'text',
        placeholder: 'Travel, Communication',
        required: true,
        errorMsg: 'Tag is required!',
    },
];

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
                        <Route path="users">
                            <Route index element={<Lists type="user" />} />
                            <Route path=":userId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New User"
                                        type="USER"
                                    />
                                }
                            />
                        </Route>

                        <Route path="orders" element={<Orders />} />

                        {/* nested routes */}
                        <Route path="products">
                            <Route index element={<Lists type="product" />} />
                            <Route path=":productId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={productInpDetails}
                                        titlee="Add New Product"
                                        type="PRODUCT"
                                    />
                                }
                            />
                        </Route>

                        <Route path="blogs">
                            <Route index element={<Blogs type="blog" />} />
                            <Route path=":blogId" element={<BlogDetail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew inputs={blogInputs} titlee="Add New Blog" type="BLOG" />
                                }
                            />
                        </Route>
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