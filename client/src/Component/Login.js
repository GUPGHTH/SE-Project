import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import '../Styles/login.css'


export default function Sing_up(){


    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");



    const set_session_login_true = () => {
        //saving username to session storage
        sessionStorage.setItem("usernamelogin", username);
        sessionStorage.setItem("login_status","true");
        
        setTimeout(() => {
          sessionStorage.removeItem("name");
          sessionStorage.removeItem("login_status");
        }, 7200000);
      };

    const requst_login = () =>[
        Axios.post('http://localhost:3001/requst_login',{
            username : username,
            password : password
        }).then((Response) => {
            if(Response.data == "succes"){
                set_session_login_true();
            }else{
                sessionStorage.removeItem("name");
                sessionStorage.removeItem("login_status");
            }
        })
    ];

    



    return(
        <body>
        <div class="login-box">
         <div class="form">
         <form class="login-form"></form>
        
            <div class='topic'>LOGIN</div>
            <div className='text'>Username : </div>
                      <input
                          type='text'
                          
                          placeholder='Enter username'
                          onChange={(event) =>{
                            setusername(event.target.value)
                          }}  
                      />

            <div className='password'  >Password : </div>
                      <input
                          type='password'
                          
                          placeholder='Enter password'
                          onChange={(event) =>{
                            setpassword(event.target.value)
                          }}  
                      />

            <Link to="/"><button onClick={requst_login}  > login</button></Link>

            <p class="message">Not registered? <a href="Register.js">Create an account</a></p>
        </div>
        </div>
        </body>
    );
}