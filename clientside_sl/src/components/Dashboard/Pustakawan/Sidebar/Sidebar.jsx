/* eslint-disable jsx-a11y/no-static-element-interactions */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../../../ColorContext/darkContext';
import './Sidebar.scss';

function Sidebar() {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/dashboard-pustakawan" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">PustakawanDashboard</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Main</p>
                    <Link to="/dashboard-pustakawan" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Dashboard
                        </li>
                    </Link>

                    <p className="spann">Data Master</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Kategori Buku
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" /> Data Buku
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Orders
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" /> Balance
                    </li>
                    <li>
                        <BarChartIcon className="icon" /> Status
                    </li>

                    <p className="spann">Data Transaksi</p>
                    <li>
                        <AccountCircleIcon className="icon" /> Peminjaman Buku
                    </li>
                    <li>
                        <SettingsRoundedIcon className="icon" /> Pengembalian Buku
                    </li>
                    <li>
                        <LogoutIcon className="icon" /> Logout
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
