import { Outlet } from 'react-router-dom';
import Dashboardview from '../../../components/Dashboard/Admin/Dashboardview';
import Sidebar from '../../../components/Dashboard/Admin/Sidebar';
import MainAdmin from '../../../components/Dashboard/Admin/Main'
import logo from '../../../assets/digital.svg';
import './style.css'


function App() {
  return (
    <div className="">
      <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <MainAdmin />
          <div>
            <Outlet></Outlet>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
