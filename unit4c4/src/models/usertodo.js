const mongoose=require("mongoose");

const usertodo=new mongoose.Schema({
    title:{type:String,require:true},
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }

},
     {
        versionKey:false,
        timestamps:true,
    }
);