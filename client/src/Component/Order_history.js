import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import "../Styles/Cart.css";

export default function Order_history() {
    const [booklist,setbooklist] = useState([]);
    const Phone =sessionStorage.getItem("Phone")
    

    const getBooklist = () =>{
        Axios.post('http://localhost:3001/History',{
            Phone : Phone
        }).then((Response) => {
            setbooklist(Response.data);
        });
    }

  
    getBooklist();
    return (
        <div >
            <div >
            <div className='Cart-container'>
                             

                             <div className='item_top'>
                             <p>Order ID</p>
                             </div>
                             <div className='item_top'>
                             <p>Derivery ID</p>
                             </div>
                 
                             <div className='item_top'>
                                 <p>รูปสลิป</p>
                             </div>
                 
                             <div className='item_top'>
                                 <p></p>
                             </div>
                 
                             <div className='item_top'>
                 
                            
                             </div>
                                 </div>
            {booklist.map((val, key) =>{
            return (
            <div className='Cart-container'>
                            

            <div className='item_bookid'>
           
            <p>{val.Order_ID}</p>
            </div>

            <div className='item_bookname'>
                
                <p>{val.Derivery_ID}</p>
            </div>

            <div className='item_img'>
            <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" alt=""></img>
            </div>

            <div className='item_BookType'>
                
                <p></p>
            </div>
            

            <div className='item_button'>
                <Link to={"/See_order_detail/"+val.Order_ID}>
                                            <button className="button-28" >See detail</button>
                                       </Link> 
            
            </div>
                </div>


        )})}
        
            </div>
           


        </div> 
    );
}