const express=require("express");

const mongoose=require("mongoose");

const usercontroller=require("./controllers/usercontroller");

const app=express();

app.use(express.json());

app.use("/user", usercontroller)

app.post("/register",register)

app.post("login",login)

app.use("/todo",todocontrollers);

const app=require("./index");

const connect=require("./configs/db")

app.listen (5000, async function(){
   try{
    await connect();
    console.log("Listening on port 5000")
   }
   catch(err){
   console.log("err found")
   }
})