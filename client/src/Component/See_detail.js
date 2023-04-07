import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {  Link, useParams } from 'react-router-dom';


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

        <div>
            <p>{booklist[0]?.Book_ID||""}</p>
            {check()}
        </div>
    );

}