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
    <section className="books" >
    {booklist.map((val, key) =>{
        return (
           <body>
                <div>
              <div className='books-sell'>
                           <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" alt=""></img>
                                       <p>Book ID:{val.Book_ID}</p>
                                       <p>{val.Book_Name}</p>
                                       <p>{val.Book_Type}&nbsp;&nbsp;{val.Book_Price}$</p>
                                       <button className="button-28" >Add to cart</button>
                                       </div>
              </div>
           </body>
             
            
        )
    })}
</section>
  );
}