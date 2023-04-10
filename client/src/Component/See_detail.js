import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import '../Styles/See_detail.css'
import { ImCart } from "react-icons/im";

export default function See_detail(){

    const { b_ID } = useParams();
    const [booklist, setbooklist] = useState([]);
    const [bookQ,setbookQ] = useState(0);

    const postBooklist = () => {
        console.log(b_ID)
        Axios.post('http://localhost:3001/Requst_book_somebook', { b_ID }).then((Response) => {
            setbooklist(Response.data);
            setbookQ(Response.data[0].Book_Quantity);
            
        });
        
    }
    React.useEffect(() => {
        postBooklist()
    },[]);

    const addcart = () =>{
        Axios.post('http://localhost:3001/Requst_book_somebook',{
            
        })

    }

    const check =() => {
        if (bookQ > 0){
            
            return(
                <Link to={'Book_shelf'}><button className='bt-buy' onClick={addcart}>สั่งซื้อ <ImCart/></button></Link>
            );
        }else{
            return(
                <p>Out of stock</p>
            );
        }
    };


    return(

        <body class="See_detali">
        <div class="content_detali">

            <div class="img_detali">
                 <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" alt=""></img>
            </div>
            
            <div class="text_detali">
                <h1 >รายละเอียดหนังสือ</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores voluptatibus, consequatur natus sunt asperiores deserunt nesciunt qui ut est exercitationem, voluptas fugit dolor necessitatibus, iure adipisci tenetur! Modi, asperiores!</p>
                <br></br>
                <h1>ราคา : 50 ฿</h1>
                
            </div>              
        </div> 

      </body> 
        
    );

}