const express = require("express");
const mongoose = require("mongoose");
   
const usercontroller=require("./src/controllers/usercontroller");

const book=require("./src/controllers/book");

const comment=require("./src/controllers/comment");

const publication=require("./src/controllers/publication");
const {register,login}=require("./src/controllers/auth.controller");

const app=express();

app.use(express.json());

app.use("/users",usercontroller);

app.post("/register",register)
app.post("/login",login)


app.listen(5600, async () =>{
 try{
     await connect();
     console.log("listening on port 5600")
 }
 catch(err){
     console.log(err.message);
 }
})

model.exports=app;
