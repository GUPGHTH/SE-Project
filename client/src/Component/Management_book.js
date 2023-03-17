import * as React from 'react';


import Axios from 'axios';
import { useState } from 'react';




export default function Manage_book() {

    
    const [booklist,setbooklist] = useState([]);

    const getBooklist = () =>{
        Axios.get('http://localhost:3001/Requst_book').then((Response) => {
            setbooklist(Response.data);
        });
    }
    getBooklist();

    const [selectbook,setselectbook] = useState("");

    const post_select_book = () =>{
        Axios.post('http://localhost:3001/Post_select_book',{selectbook : selectbook});
    }

    const send_book = (selectbook) =>{
        setselectbook(selectbook);
        post_select_book();
    }

    

  return (
    
    <div className='grid-Box'>
        {booklist.map((val, key) =>{
            return (
                <div className="grid-Box" >
                    <div className='grid-item' >
                        <div className='content'>
                            <p>Book ID:{val.Book_ID}</p>
                            <p>{val.Book_Name}</p>
                            <p>{val.Book_Type}&nbsp;&nbsp;{val.Book_Price}$</p>
                            <button className="btn btn-success" onClick={(event) =>{
                                send_book(val.Book_ID)
                            }} href='/Book_shelf'>Edit Book</button>
                            
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  );
}