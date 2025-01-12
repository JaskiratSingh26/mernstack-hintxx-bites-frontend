import React from 'react'
import Home from './Page/Home'

import { BrowserRouter, Routes, Route } from "react-router";
import About from './Page/About';
import Navbar from './components/Navbar';
import Register from './userresgister/Register';
import Login from './userresgister/Login';
import Fotter from './components/Fotter';
import AddFoodItem from './adminside/Addfooditem';
import MyState from './contextStore/MyState';
import SingleFood from './components/SingleFood';
import Myorder from './components/Myorder';

import Cart from './components/Cart';
export default function App() {
  return (
    <div >

      <MyState>


        <BrowserRouter>


          <Navbar></Navbar>


          <Routes>


            <Route path='/' element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addfooditmes" element={<AddFoodItem />} />
            <Route path="/singlefood/:id" element={<SingleFood />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myorder" element={<Myorder />} />


          </Routes>

          <Fotter></Fotter>

        </BrowserRouter>
      </MyState>

    </div>
  )
}
