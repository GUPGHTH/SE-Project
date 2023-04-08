import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import '../Styles/See_detail.css'

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
                <Link to={'Book_shelf'}><button onClick={addcart}> Add to cart</button></Link>
            );
        }else{
            return(
                <p>Out of stock</p>
            );
        }
    };


    return(

        <body className='body_See_detail'>

            <div className='See_detail'>

                <div className='img_detail'>
                <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" alt=""></img>
                </div>
                
                <div className='text_bt'>
                    <p>Lorem</p>
                    <button>ซื้อ</button>
                </div>
            </div>
        </body>
        
    );

}