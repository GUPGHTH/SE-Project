import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {  Link, useParams } from 'react-router-dom';

export default function Login_state(){
    const getuserlogin = () => {
       
        return sessionStorage.getItem("usernamelogin");
      };

      const getloginstatus = () => {
        
        return sessionStorage.getItem("login_status");
      };

      const check_login = () =>{

        if(getloginstatus() == "true"){
            return(
                <div>
                    <h2>LOGIN SUCCES</h2>
                    <Link to={"/Book_shelf"}><button>Continious</button></Link>
                </div>

            );
        }else{
            return(
                <div>

                    <h2>LOGIN FAIL</h2>
                    <Link to={"/login"}><button>Try again</button></Link>
                    <Link to={"/Register"}><button>Sign up</button> </Link>
                </div>
            );
        }

      }




    return(
        <div>
            {check_login()}
        </div>

    );



}