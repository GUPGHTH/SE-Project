import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Book_home from './Component/Book_home';
import Navbar from './Component/Navbar';
import Layout from './Component/Layout';
import Add_book from './Component/Add_book';
import Manage_book from './Component/Management_book';
import Edit_Book from './Component/Edit_book';
import See_detail from './Component/See_detail';
import Login from './Component/Login';
import Login_state from './Component/Login_state';
import Register from './Component/Register';
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
          <Route path="Book_shelf" element={<Book_home/>} />
          <Route path="Add_book" element={<Add_book/>} />
          <Route path="Manage_book" element={<Manage_book/>} />
          <Route path="Edit_book/:b_ID" element={<Edit_Book/>}></Route>
          <Route path="See_detail/:b_ID" element={<See_detail/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="Login_state" element={<Login_state/>}></Route>
          <Route path="Register" element={<Register/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
