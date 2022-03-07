const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express();

app.use(checkpermission);

app.get("/books", (req,res) =>{
    return res.send({ route: "/books"})
  });

app.get("/ libraries" ,(req,res) =>{
  return res.send ({ route: "/libraries", permission: true})
});

app.get("/authors",(res,req)=>{
    return res.send({ route: "/authors", permission: true})
});

function checkpermission(req,res,next){
    if(req.path==="/libraries"){
        req.role="libraries"
    } else if(req.path==="authors"){
        req.role="authors"
    }
    next();
}
app.listen(5000);