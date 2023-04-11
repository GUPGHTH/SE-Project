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



app.post('/History',(req,res) => {
    const phone = req.body.Phone
    db.query("SELECT * FROM `order` WHERE `Phone` = (?) ",[phone],(err,result) =>{
        if(err){
            console.log(err)
        }else {
            res.send(result)
        }
    })


});

app.post('/History_Detail',(req,res) => {
    const Order_ID = req.body.Order_ID
    db.query("SELECT * FROM `book` LEFT JOIN `cart` ON `book`.`Book_ID` = `cart`.`Book_ID` WHERE `cart`.`bill_ID` = (?) ",[Order_ID],(err,result) =>{
        if(err){
            console.log(err)
        }else {
            res.send(result)
        }
    })


});

app.post('/Add_to_cart',(req,res) => {
    const Book_Id  = req.body.b_ID
    const book_temp = req.body.book_temp
    const Phone = req.body.Phone
    const total = req.body.total

    db.query("INSERT INTO `cart`(`id`, `Phone`, `Book_Id`, `quantity`, `total`, `bill_ID`) VALUES (?,?,?,?,?,?)",[0,Phone,Book_Id,book_temp,total,"null"],(err,result) => {
        if(err){
            console.log(err)
            res.send("fail");
        }else if(result != "" && result != []){
            
            res.send(["succes",result])
        }else{
            res.send("fail")
        }
    })


});

app.post('/Post_select_book',(req,res) => {
    const Select_book_ID = req.body.b_ID;
    selectbook = Select_book_ID;
    console.log(selectbook);
})

app.post('/Requst_cart',(req,res) => {
    const phone = req.body.Phone
    db.query("SELECT * FROM `book` LEFT JOIN `cart` ON `book`.`Book_ID` = `cart`.`Book_ID` WHERE `cart`.`Phone` = (?) AND `cart`.`bill_ID` = (?) ",[phone,"null"],(err,result) =>{
        if(err){
            console.log(err)
        }else {
           
            res.send(result)
        }
    })

})

app.post('/Delete_cart',(req,res) =>{
    const cart_id = req.body.cart_id

    db.query("DELETE FROM `cart` WHERE `id` = (?)",[cart_id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            console.log("delete")
            res.send("succes")
        }
    })
})
//SELECT SUM(`total`) AS totalprice FROM `cart` WHERE 1

app.post('/Sum_total',(req,res) =>{
    const Phone = req.body.Phone
    db.query("SELECT SUM(`total`) AS totalprice FROM `cart` WHERE `Phone` = (?) AND `bill_ID` = (?)",[Phone,"null"],(err,result) => {
        if(err){
            console.log(err)
        }else{
            
            res.send(result)
        }
    })
})

app.post('/Sum_total_bill',(req,res) =>{
    const Order_ID = req.body.Order_ID
    db.query("SELECT SUM(`total`) AS totalprice FROM `cart` WHERE `bill_ID` = (?)",[Order_ID],(err,result) => {
        if(err){
            console.log(err)
        }else{
            
            res.send(result)
        }
    })
})

app.post('/requst_login',(req,res) => {
    const phone = req.body.phone;
    const password = req.body.password;
    db.query("SELECT * FROM `customer_infomation` WHERE `Phone` = (?) AND `password` = (?)",[phone,password],(err,result) =>{
        if(err){
            console.log(err)
            res.send("fail");
        }else if(result != "" && result != []){
            
            res.send(["succes",result])
        }else{
            res.send("fail")
        }
    })

})

app.post('/Register',(req,res) => {
    const Fist_name = req.body.Fist_name;
    const Last_name = req.body.Last_name;
    const Phone = req.body.Phone;
    const password = req.body.password;
    

    db.query(
        "INSERT INTO `customer_infomation`(`Phone`, `password`, `Fist_name`, `Last_name`, `key_id`, `Role`) VALUES(?,?,?,?,?,?)",
        [Phone,password,Fist_name,Last_name,1,"custumer"],
        (err,result) =>{
            if(err){
                //console.log(err);
                res.send("Error")
            }else{
                res.send("Values inserted");
                //console.log("value add");
            }
        }
    );
});

app.post('/Get_user',(req,res) =>{
    const Phone = req.body.Phone

    db.query("SELECT * FROM `customer_infomation` WHERE `Phone` = (?)",[Phone],(err,result) =>{
        if(err){

        }else{
            res.send(result)
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