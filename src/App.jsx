import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './components/auth/AuthContext';
import Login from './components/auth/Login';
import Home from './components/home/Home';

import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/auth/Signup';
import Ecommerce from './components/dashboard/Ecommerce';
import Order from './components/dashboard/Order';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="RivoFrontend/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
         
          {/* Other routes can go here */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
