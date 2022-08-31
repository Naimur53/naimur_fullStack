import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import MainNav from './Components/MainNav/MainNav';
import Dashboard from './pages/Dashboard/Dashboard';
import Overview from './pages/Overview/Overview';
import UpdateBanner from './pages/UpdateBanner/UpdateBanner';
import AddWallet from './pages/AddWallet/AddWallet';
import ManageWallets from './pages/ManageWallets/ManageWallets';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav></MainNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path='/dashboard/overview' element={<Overview />} />
            <Route path='/dashboard/manage-banner' element={<UpdateBanner />} />
            <Route path='/dashboard/add-wallet' element={<AddWallet />} />
            <Route path='/dashboard/manage-wallets' element={<ManageWallets />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
