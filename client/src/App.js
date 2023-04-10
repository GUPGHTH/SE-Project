import logo from './logo.svg';
import * as React from 'react';

import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Book_home from './Component/Book_home';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Add_book from './Component/Add_book';
import Manage_book from './Component/Management_book';
import Edit_Book from './Component/Edit_book';
import See_detail from './Component/See_detail';
import Login from './Component/Login';
import Login_state from './Component/Login_state';
import Sign_up from'./Component/Sign_up';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Sing_up from './Component/Login';



function App() {


  const sessioncheck = () => {
    if (sessionStorage.getItem("login_status") != "true" ){
      sessionStorage.setItem("usernamelogin","null");
      sessionStorage.setItem("login_status","false");
      sessionStorage.setItem("role","null");
    }

  }

  React.useEffect(() => {
    sessioncheck();
  },[]);

  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="Book_shelf" element={<Book_home/>} />
          <Route path="Add_book" element={<Add_book/>} />
          <Route path="Manage_book" element={<Manage_book/>} />
          <Route path="Edit_book/:b_ID" element={<Edit_Book/>}></Route>
          <Route path="See_detail/:b_ID" element={<See_detail/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="Login_state" element={<Login_state/>}></Route>
          <Route path="Sign_up" element={<Sign_up/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
