const express= require("express");
const mongoose=require("mongoose");

const app=express();

const connect= () =>{
return mongoose.connect(
    "mongodb+srv://sharan1:sharan123@cluster0.s30rh.mongodb.net/test"
);
};

app.listen(5000,async()=>{
    await connect();

    console.log("listening on port 5000")
})