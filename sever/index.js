const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "popouyuy788",
    database: "bookstoresystem"
})

 var selectbook = "";

app.get('/Requst_book',(req,res) => {
    db.query("SELECT * FROM book",(err , result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/Post_select_book',(req,res) => {
    const Select_book_ID = req.body.b_ID;
    selectbook = Select_book_ID;
    console.log(selectbook);
})

app.post('/requst_login',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM `customer_infomation` WHERE `Username` = (?) AND `password` = (?)",[username,password],(err,result) =>{
        if(err){
            console.log(err)
            res.send("fail");
        }else if(result != "" && result != []){
            console.log(result)
            res.send("succes")
        }else{
            res.send("fail")
        }
    })

})



app.post('/Requst_book_somebook',(req,res) => {
    const Select_book_ID = req.body.b_ID;
    var resultlk = "";
    selectbook = Select_book_ID;

    
    app.get('/Requst_book_idb',(req,res) =>{
        res.send(selectbook);
    });
    
    db.query("SELECT * FROM `book` WHERE `Book_ID` = (?)",[selectbook],(err,resultl) => {
        resultlk = resultl;
        if(err){
            console.log(err);
        }else{
            res.send(resultlk);
            //console.log(resultlk)
            
            
        }
    });
});

app.post('/Add_book_to_table',(req,res) => {
    const ID = req.body.Book_ID;
    const Name = req.body.Book_Name;
    const Type = req.body.Book_Type;
    const Price = req.body.Book_Price;
    const Detail = req.body.Book_Detail;
    const Quantity = req.body.Book_Quantity;
    const Pic = req.body.Book_Pic;

    db.query(
        "INSERT INTO book (Book_ID,Book_Name,Book_Type,Book_Price,Book_detail,Book_Quantity,Book_Pic) VALUES(?,?,?,?,?,?,?)",
        [ID,Name,Type,Price,Detail,Quantity,Pic],
        (err,result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values inserted");
                console.log("value add");
            }
        }
    );
});

app.post('/Update_book_to_table',(req,res) => {
    
    const ID = req.body.Book_ID;
    const Name = req.body.Book_Name;
    const Type = req.body.Book_Type;
    const Price = req.body.Book_Price;
    const Detail = req.body.Book_Detail;
    const Quantity = req.body.Book_Quantity;
    const Pic = req.body.Book_Pic;
    console.log(selectbook);
    db.query(
        "UPDATE `book` SET `Book_ID`=(?),`Book_Name`=(?),`Book_Type`=(?),`Book_Price`=(?),`Book_Detail`=(?),`Book_Quantity`=(?),`Book_Pic`=(?) WHERE `Book_ID`=(?)",
        [ID,Name,Type,Price,Detail,Quantity,Pic,selectbook],
        (err,result) =>{
            if(err){
                console.log(err);
            }else{
                res.send("Values inserted");
                console.log("value add");
            }
        }
    );
});


app.listen('3001',() =>{
    console.log("Sever is runnibg in port 3001");
})