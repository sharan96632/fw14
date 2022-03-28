
const register=(req,res) =>{
    try{
        const user= user.findOne({email:req.body.email}) 
        if(user){
            return res.status(400).send({message:"Email Exist"})
        }
    }
    catch(err){
      res.status(400).send({message:err.message})
    }
}










const login=(req,res) =>{
    try{
        return res.status(200).send("login")
    }
    catch(err){
      res.status(400).send({message:err.message})
    }
}

module.exports={register,login}