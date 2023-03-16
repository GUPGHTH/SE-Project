import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import Axios from 'axios'
import Book_home from './Component/Book_home';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Add_book from './Component/Add_book';
import Manage_book from './Component/Management_book';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="Book_shelf" element={<Book_home/>} />
          <Route path="Add_book" element={<Add_book/>} />
          <Route path="Manage_book" element={<Manage_book/>} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
