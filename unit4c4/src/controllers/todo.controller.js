const express=require("express");

const router=express.Router();

const client=require("../configs/redis")

router.post("", async (req,res) =>{
    try{
        const todo=await todo.create(req,body)
        const todos=await todo.find().lean().exec();
        client.set("todo",JSON.stringify(todos))
        res.status(200).send(todo);
    }
    catch(err){
        res.status(400).send({message :err.message})
    }
}) 
 
router.get("", async (req,res) =>{
    try{
        client.get("todos", function(fetchTodos){
         if(fetchTodos){
            res.status(200).send(JSON.parse(fetchTodos)) 
            return res.send(200).send(todos);
         }
         else{
             const todos=await todo.find().lean().exec();
             client.set=("todos",JSON.stringify(todos))
             return res.send(200).send(todos);
         }
        })
    }
    catch(err){
        res.status(400).send({message :err.message})
    }
})

router.get("/:id", async (req,res) =>{
    try{
        const todo=await todo.findById(req.params.id).lean().exec();
        res.status(200).send(todo);
    }
    catch(err){
        res.status(400).send({message :err.message})
    }
})

router.patch("/:id", async (req,res) =>{
    try{
        const todo=await todo.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
        res.status(200).send(todo);
    }
    catch(err){
        res.status(400).send({message :err.message})
    }
})


router.delete("/:id", async (req,res) =>{
    try{
        const todo=await todo.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send(todo);
    }
    catch(err){
        res.status(400).send({message :err.message})
    }
})

model.exports=router;