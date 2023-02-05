import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </div>


    </>
  );
};

export default App;