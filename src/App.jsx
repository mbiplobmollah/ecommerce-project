import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/*' element={<NoPage></NoPage>}></Route>
      </Routes>
    </Router>
  );
};

export default App;