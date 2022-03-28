const register=(req,res) =>{
   try{
       res.status(200).send(Registerd);
   }
   catch(err){
       res.status(400).send({message :err.message})
   }
}

const login =(req,res)=>{
    try{
        res.status(200).send(login);
    }
    catch(err){
        res.status(400).send({message :err.message})
    }
}