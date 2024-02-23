import React from 'react';
import Chart from '../Chart/Chart';
import ItemLists from '../ItemLists/ItemLists';
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';
import Sidebar from '../Sidebar/Sidebar';
import './Home.scss';

function Home() {
    //
    return (
        <div className="home">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="home_main">
                <Navbar />

                <div className="bg_color" />

                <div className="home_items">
                    <ItemLists type="data-buku" />
                    <ItemLists type="peminjaman-buku" />
                    <ItemLists type="pengembalian-buku" />
                </div>

                <div className="chart_sec">
                    <ProgressBar />
                    <Chart height={450} title="Grafik Peminjaman" />
                </div>

    </div>
        </div>
    );
}

export default Home;
