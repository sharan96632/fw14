const mongoose=require("mongoose");

const user=new mongoose.Schema({
    firstname:{type:String,require:true},
    lastname:{type:String,require:false},
    email:{type:String,require:true},
    password:{type:String,require:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const User=mongoose.model("user",userSchema)

model.exports=User;