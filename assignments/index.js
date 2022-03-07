const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
app.get("/books",logger1, (req,res) =>{
  return res.send("All Books")
})

app.get("/book/:name" ,logger2,(req,res)=>{
  req.name=req.params.name
  res.send({bookNmae:req.name})
})

function logger1(req, res, next) {
  console.log ( "Fetching all books")
  next();
 
}

function logger2(req, res, next) {
   
  console.log(req.params)

    next();
  
}

app.listen(2002, function () {
  console.log("listening on port 2001");
})