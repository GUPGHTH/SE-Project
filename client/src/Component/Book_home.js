import * as React from 'react';


import Axios from 'axios';
import { useState } from 'react';
import '../Styles/gridbox.css'


export default function Book_home() {
    const [booklist,setbooklist] = useState([]);

    const getBooklist = () =>{
        Axios.get('http://localhost:3001/Requst_book').then((Response) => {
            setbooklist(Response.data);
        });
    }
    getBooklist();

  return (
    
    <div className='grid-Box'>
        {booklist.map((val, key) =>{
            return (
                <div className="grid-Box">
                    <div className='grid-item'>
                        <div className='content'>
                            <p>Book ID:{val.Book_ID}</p>
                            <p>{val.Book_Name}</p>
                            <p>{val.Book_Type}&nbsp;&nbsp;{val.Book_Price}$</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  );
}