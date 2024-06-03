
import React from 'react';
import { HashRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import { AuthProvider, useAuth } from './AuthContext';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Markets from './pages/Markets';
import Trade from './pages/Trade';
import About from './pages/About';
import Register from './registrationForm';
import Login from './LoginForm';
import LiveChart from './pages/LiveChart'; // Импортируем компонент LiveChart
import qrcode from './images/qrbinance.jpeg';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const MainApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <nav>
            <ul>
              <li className="nav-left"><Link to="/"><span className="binance-jr">Binance Jr.</span></Link></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/markets">Markets</Link></li>
              <li><Link to="/trade">Trade</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/live-chart">Live Chart</Link></li> 
            </ul>
          </nav>
        </div>
      </header>
      <div className="App-body">
        <aside className="App-sidebar">
          <ul>
            <li><Link to="/dashboard">Курс BTC/USDT</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/wallet">Wallet</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </aside>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<PrivateRoute element={<h1>Welcome to Binance Clone</h1>} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/orders" element={<PrivateRoute element={<Orders />} />} />
            <Route path="/wallet" element={<PrivateRoute element={<Wallet />} />} />
            <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/about" element={<About />} />
            <Route path="/live-chart" element={<LiveChart />} /> 
          </Routes>
        </main>
        <div className="qr-code">
          <div className="tekst">
        <h1>Скачать мобильное приложение через QR code:</h1>
        </div>
        <div className="qr-code">
        <img src={qrcode} alt="QR-Code" />
        </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainApp />
      </Router>
    </AuthProvider>
  );
}

export default App; 