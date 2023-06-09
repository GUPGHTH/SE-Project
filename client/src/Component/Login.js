import * as React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "../Styles/login.css";

export default function Sing_up() {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  

  const set_session_login_true = (r,n) => {
    //saving username to session storage
    sessionStorage.setItem("usernamelogin", n);
    sessionStorage.setItem("login_status", "true");
    sessionStorage.setItem("role",r)
    sessionStorage.setItem("Phone",phone)

    setTimeout(() => {
      sessionStorage.setItem("usernamelogin","null");
      sessionStorage.setItem("login_status","false");
      sessionStorage.setItem("role","null");
      sessionStorage.setItem("Phone","null")

    }, 7200000);
  };

  const requst_login = () => [
    Axios.post("http://localhost:3001/requst_login", {
      phone: phone,
      password: password,
    }).then((Response) => {
      if (Response.data[0] == "succes") {
        console.log(Response.data[1][0].Role)
        console.log(Response.data[1][0].Fist_name)
        set_session_login_true(Response.data[1][0].Role,Response.data[1][0].Fist_name);
      } else {
        sessionStorage.setItem("usernamelogin","null");
      sessionStorage.setItem("login_status","false");
      sessionStorage.setItem("role","null");
      }
      navigate('/Login_state', { replace: true });
      
    }),
  ];

  return (
      <body className="box">
        <div class="form">
          <form className="loginbox"></form>
          <div className="topic">LOGIN</div>
          <div className="text">Phone number : </div>
          <input
            type="text"
            placeholder="Enter Phone number"
            onChange={(event) => {
              setphone(event.target.value);
            }}
          />

          <div className="password">Password : </div>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />

         
            <button onClick={requst_login} > login</button>
          
          <p class="message">
            Not registered? <a href="Register">Create an account</a>
          </p>
        
        </div> 
        </body>
    
  );
}