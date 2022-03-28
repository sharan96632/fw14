const {createClient}=require("redis");

const client=createClient({url:"redis://localhost:6379"})

client.on("err",function (err){
    console.log({message:err.message})
});

model.exports=client;