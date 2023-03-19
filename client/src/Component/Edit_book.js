import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {  useParams } from 'react-router-dom';

import '../Styles/Add_book.css'

export default function Edit_Book() {
    const { b_ID } = useParams();
    const [booklist, setbooklist] = useState([]);
    const [Book_ID, setBook_ID] = useState("");
    const [Book_Name, setBook_Name] = useState("");
    const [Book_Type, setBook_Type] = useState("");
    const [Book_Price, setBook_Price] = useState(0);
    const [Book_Detail, setBook_Detail] = useState("");
    const [Book_Quantity, setBook_Quantity] = useState(0);
    const [Book_Pic, setrBook_Pic] = useState("");

    const postBooklist = () => {
        Axios.post('http://localhost:3001/Requst_book_somebook', { b_ID }).then();
        
    }
    postBooklist()



    const getBooklist = async () => {
        await Axios.get('http://localhost:3001/Result_serch_book').then((Response) => {
            setbooklist(Response.data);
            setBook_ID(Response.data[0].Book_ID);
            setBook_Name(Response.data[0].Book_Name);
        });
    }

    React.useEffect(() => {
        getBooklist()
    }, []);



    const addBook = () => {
        Axios.post('http://localhost:3001/Add_book_to_table', {
            Book_ID: Book_ID,
            Book_Name: Book_Name,
            Book_Type: Book_Type,
            Book_Price: Book_Price,
            Book_Detail: Book_Detail,
            Book_Quantity: Book_Quantity,
            Book_Pic: Book_Pic
        }).then(() => {
            setbooklist([
                ...booklist,
                {
                    Book_ID: Book_ID,
                    Book_Name: Book_Name,
                    Book_Type: Book_Type,
                    Book_Price: Book_Price,
                    Book_Detail: Book_Detail,
                    Book_Quantity: Book_Quantity,
                    Book_Pic: Book_Pic
                }
            ])
        })

    }
    console.log(b_ID)


    return (
        <div><h2 className='Add_book'>Edit book to data base</h2>





            <div className='add_book_gridboox'>
                <div className='add_book_item'>
                    <form action=''>
                        <div className='name-input'>
                            <label htmlFor='Book_ID' className='form-label'>Book_ID: </label>
                            <input
                                defaultValue={booklist[0]?.Book_ID || ""}
                                type='text'
                                className='input_add_book'
                                placeholder='Enter Book ID'



                                onChange={(event) => {
                                    setBook_ID(event.target.value)
                                }}
                            />
                        </div>

                        <div className='name-input'>
                            <label htmlFor='Book_Name' className='form-label'>Name: </label>
                            <input
                                defaultValue={booklist[0]?.Book_Name || ""}
                                type='text'
                                className='input_add_book'
                                placeholder='Enter name'
                                onChange={(event) => {
                                    setBook_Name(event.target.value)
                                }}
                            />
                        </div>
                        <div className='name-input'>
                            <label htmlFor='Book_Type' className='form-label'>
                                Book_Type:
                            </label>
                            <input
                                type='text'
                                className='input_add_book'
                                placeholder='Enter TYpe'
                                onChange={(event) => {
                                    setBook_Type(event.target.value)
                                }}
                            />
                        </div>
                        <div className='name-input'>
                            <label htmlFor='Book_Price' className='form-label'>
                                Book_Price:
                            </label>
                            <input
                                type='float'
                                className='input_add_book'
                                placeholder='Enter price'
                                onChange={(event) => {
                                    setBook_Price(event.target.value)
                                }}
                            />
                        </div>
                        <div className='name-input'>
                            <label htmlFor='Book_Detail' className='form-label'>
                                Book_Detail:
                            </label>
                            <input
                                type='text'
                                className='input_add_book'
                                placeholder='Enter Detail'
                                onChange={(event) => {
                                    setBook_Detail(event.target.value)
                                }}
                            />
                        </div>
                        <div className='name-input'>
                            <label htmlFor='Book_Quantity' className='form-label'>
                                Book_quantity:
                            </label>
                            <input
                                type='int'
                                className='input_add_book'
                                placeholder='Enter Quantity'
                                onChange={(event) => {
                                    setBook_Quantity(event.target.value)
                                }}
                            />
                        </div>
                        <div className='name-input'>
                            <label htmlFor='Book_Pic' className='form-label'>
                                Book_Pic:
                            </label>
                            <input
                                type='text'
                                className='input_add_book'
                                placeholder='Enter Picture url'
                                onChange={(event) => {
                                    setrBook_Pic(event.target.value)
                                }}
                            />
                        </div>
                        <p></p>
                        <button className="btn-add-book" onClick={addBook}>Add Book</button>
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    );
}