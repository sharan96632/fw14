const app=require("./index")

const connect=require("./src/configs/db")

app.listen(5600,async function(){
    await connect();
    console.log("listening in port 5600")
})