    import * as React from 'react';
    import Axios from 'axios';
    import { useState } from 'react';
    import { Link ,useParams} from 'react-router-dom';
    import "../Styles/Cart.css";

    export default function Cart() {
        const { b_ID } = useParams();
        const [bookQ,setbookQ] = useState(0);
        const [book_temp,setbook_temp] = useState(1);
        const [booklist,setbooklist] = useState([]);
        const Phone =sessionStorage.getItem("Phone")

        const postBooklist = () => {
        
            Axios.post('http://localhost:3001/Requst_book_somebook', { b_ID }).then((Response) => {
                setbooklist(Response.data[0]);
                setbookQ(Response.data[0].Book_Quantity);
            });
            
        }
        React.useEffect(() => {
            postBooklist()
            
        },[]);

        const increaseValue = () =>{
            console.log(book_temp)
            if (book_temp < bookQ){
                setbook_temp(book_temp+1)
                
            }
            
        }

        const decreaseValue = () =>{
            if (book_temp > 1){
                setbook_temp(book_temp-1)
                
            }
        
        }

        const getBooklist = () =>{
            Axios.post('http://localhost:3001/Requst_cart',{
                Phone : Phone
            }).then((Response) => {
                setbooklist(Response.data);
            });
        }
        getBooklist();
        return (
            <div >
            <div >
            {booklist.map((val, key) =>{
            return (
            <div className='Cart-container'>
                            <div className='item_img'>
            <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" alt=""></img>
            </div>

            <div className='item_bookid'>
            <p>ชื่อ</p>
            </div>

            <div className='item_bookname'>
                <p>จำนวน</p>
            </div>

            <div className='item_BookType'>
                <p>ราคา</p>
            </div>

            <div className='item_button'>
                
            <button className="button-detail" >Delete</button>
            </div>
                </div>
                
            
                
                
        )})}
            </div>

            

        </div> 
        
        );
    }