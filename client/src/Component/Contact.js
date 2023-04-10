import Axios from 'axios';
import { useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import '../Styles/Contact.css';
import { FaFacebookSquare } from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLine} from "react-icons/fa";
export default function Contact() {
    return (
        <div class="headerbg">
        <div class="container">
            <div class="information">
                <a  href="#"><FaFacebookSquare/>ชื่อร้าน</a> 
                <br/>
                <a  href="#"><FaInstagramSquare/>ชื่อร้าน</a>
                <br/>
                <a  href="#"><FaLine/>ชื่อร้าน</a>
            </div>

            <div class="QR_code">
              <img 
                  src="https://drive.google.com/uc?export=view&id=1J0RVrMiGMFOcLVT_oqDMQGFl8qHi9gop"
                  alt=""
                  >
              </img>   
            </div>              
        </div> 
      </div> 
    );
}